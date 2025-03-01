import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Application } from "../models/applicationSchema.js";
import { Job } from "../models/jobSchema.js";
import cloudinary from "cloudinary";

//Submit a Job Application
//Allows Job Seekers to apply for a job by uploading a resume and providing details.
export const postApplication = catchAsyncErrors(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Employer") {
    return next(
      new ErrorHandler("Employer not allowed to access this resource.", 400)
    );
  }
   //Ensures that a resume file is uploaded from frontend server
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler("Resume File Required!", 400));
  }

  const { resume } = req.files;
  const allowedFormats = [" application/pdf", "application/msword","image/png", "image/jpeg", "image/webp"];

  //checking the format of the files uploaded
  if (!allowedFormats.includes(resume.mimetype)) {
    return next(
      new ErrorHandler("Invalid file type. Only PDF, DOCX, JPG, and PNG are allowed.", 400)
    );
  }
  
  //Uploads the resume file to Cloudinary
  const cloudinaryResponse = await cloudinary.uploader.upload(
    resume.tempFilePath
  );

  //Handles potential errors during Cloudinary upload.
  if (!cloudinaryResponse || cloudinaryResponse.error) {
    console.error(
      "Cloudinary Error:",
      cloudinaryResponse.error || "Unknown Cloudinary error"
    );
    return next(new ErrorHandler("Failed to upload Resume to Cloudinary", 500));
  }
  //Extracts applicant details from the request body.
  const { name, email, coverLetter, phone, address, jobId } = req.body;
  const applicantID = {
    user: req.user._id,
    role: "Job Seeker",
  };
  //Checks if the job exists before proceeding.
  if (!jobId) {
    return next(new ErrorHandler("Job not found!", 404));
  }
  const jobDetails = await Job.findById(jobId);
  if (!jobDetails) {
    return next(new ErrorHandler("Job not found!", 404));
  }
//Stores  employer details in the application.
 const employerID = {
    user: jobDetails.postedBy,
    role: "Employer",
  };
  //Ensures that all required fields are provided.
  if (!name || !email || !coverLetter || !phone || !address || !applicantID || !employerID || !resume) 
  {
    return next(new ErrorHandler("Please fill all fields.", 400));
  }
  //Saves the application in the database and
  //Stores the uploaded resume’s public ID and URL.
  const application = await Application.create({
    name,
    email,
    coverLetter,
    phone,
    address,
    applicantID,
    employerID,
    resume: {
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url,
    },
  });
  res.status(200).json({
    success: true,
    message: "Application Submitted!",
    application,
  });
});

//Employer Views Received Applications 
//Employers can view all job applications submitted for their job listings.
//Only Employers can access this function.
export const employerGetAllApplications = catchAsyncErrors(
  async (req, res, next) => {
    const { role } = req.user;
    if (role === "Job Seeker") {
      return next(
        new ErrorHandler("Job Seeker not allowed to access this resource.", 400)
      );
    }
//Fetches all applications where the employerID.user matches the logged-in employer’s ID.
    const { _id } = req.user;
    const applications = await Application.find({ "employerID.user": _id });
    res.status(200).json({
      success: true,
      applications,
    });
  }
);

//Job Seeker Views Their Applications
//Job Seekers can view all the jobs they have applied to.
export const jobseekerGetAllApplications = catchAsyncErrors(
  async (req, res, next) => {
    const { role } = req.user;
    if (role === "Employer") {
      return next(
        new ErrorHandler("Employer not allowed to access this resource.", 400)
      );
    }
    // Fetches all applications where applicantID.user matches the logged-in job seeker’s ID.
    const { _id } = req.user;
    const applications = await Application.find({ "applicantID.user": _id });
    res.status(200).json({
      success: true,
      applications,
    });
  }
);

//Job Seeker Deletes an Application
//Allows a Job Seeker to delete an application they submitted.
export const jobseekerDeleteApplication = catchAsyncErrors(
  async (req, res, next) => {
    const { role } = req.user;
    if (role === "Employer") {
      return next(
        new ErrorHandler("Employer not allowed to access this resource.", 400)
      );
    }
  //Checks if the application exists before attempting to delete it.
    const { id } = req.params;
    const application = await Application.findById(id);
    if (!application) {
      return next(new ErrorHandler("Application not found!", 404));
    }
    //Deletes the application from the database.
    await application.deleteOne();
    res.status(200).json({
      success: true,
      message: "Application Deleted!",
    });
  }
);
