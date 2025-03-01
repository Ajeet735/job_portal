import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import { User } from "../models/userSchema.js";
import ErrorHandler from "../middlewares/error.js";
import { sendToken } from "../utils/jwtToken.js";

//user Regester function
export const register = catchAsyncErrors(async (req, res, next) => {
  const { name, email, phone, password, role } = req.body;

  //checking missing requirement of these
  if (!name || !email || !phone || !password || !role) {
    return next(new ErrorHandler("Please fill full form !"));
  }
  //checking the email correct or not
  const isEmail = await User.findOne({ email });
  if (isEmail) {
    return next(new ErrorHandler("Email already registered !"));
  }
  //creating the new user
  const user = await User.create({
    name,
    email,
    phone,
    password, 
    role,
  });
  sendToken(user, 201, res, "User Registered Sucessfully !");
});

//creating the  user login
export const login = catchAsyncErrors(async (req, res, next) => {
  //Extracts applicant details from the request body.
  const { email, password, role } = req.body;

  //checking any missing details
  if (!email || !password || !role) {
    return next(new ErrorHandler("Please provide email ,password and role !"));
  }

  //checkig the email that is exist with user or not
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email Or Password.", 400));
  }

  //checkig the password that is match with user or not
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email Or Password !", 400));
  }

  //checkig the role that is exist with user or not
  if (user.role !== role) {
    return next(
      new ErrorHandler(`User with provided email and ${role} not found !`, 404)
    );
  }
  sendToken(user, 201, res, "User Logged In Sucessfully !");
});

//creating the  user logout
export const logout = catchAsyncErrors(async (req, res, next) => {
  res
    .status(201)
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Logged Out Successfully !",
    });
});

//FOR GETTING all THE USER stored in database

export const getUser = catchAsyncErrors((req, res, next) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    user,
  });
});