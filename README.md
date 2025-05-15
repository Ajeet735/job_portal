Job Portal App (MERN Stack)

A comprehensive job portal application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application allows users to browse job listings, apply for jobs, and manage their applications seamlessly.

Features

User Authentication: Secure authentication using JWT (JSON Web Tokens) for both job seekers and employers.

Job Listings: Browse through a wide range of job listings fetched from MongoDB.

Application Management: Job seekers can manage their job applications, and employers can view and manage received applications.

Responsive Design: Ensures a seamless experience across all devices.

Technologies Used

Frontend:

React.js

React Router

Bootstrap

Backend:

Node.js

Express.js

MongoDB

Authentication & Security:

JWT (JSON Web Tokens)

Bcrypt (for password hashing)

Other Integrations:

Image Upload: Cloudinary for storing and managing uploaded images

Deployment: Vercel (frontend), Render (backend), MongoDB Atlas (database)

Getting Started

Follow these steps to set up and run the project locally.

Prerequisites

Ensure you have the following installed:

Node.js (Latest version or v22.2.0+)

MongoDB Atlas account (or a local MongoDB server)

Cloudinary account for image storage

Installation

Clone the repository:

https://github.com/Ajeet735/job_portal.git

Navigate to the project directory:

cd job-portal

Install dependencies:

cd backend && npm install
cd ../frontend && npm install

Set up environment variables:

Create a config.env file inside a config folder in the backend directory.

Add the following variables and replace them with your specific configuration details:

PORT=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_CLOUD_NAME=
FRONTEND_URL=
DB_URL=
JWT_SECRET_KEY=
JWT_EXPIRE=
COOKIE_EXPIRE=

Running the Application

Start the development server:

npm run dev

Then, open your browser and navigate to:

(http://localhost:5173/)

Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

How to Contribute

Fork the Project

Create your Feature Branch: (git checkout -b feature/AmazingFeature)

Commit your Changes: (git commit -m 'Add some AmazingFeature')

Push to the Branch: (git push origin feature/AmazingFeature)

Open a Pull Request (We will review and merge within 24 hours!)

⭐ Support the Project

If you find this project helpful, please give a star ⭐ to the repository.

Contact: 7903395232

Ajeetkumar - ajeetkumar.dev735@gmail.com

## Project Link
[Visit Live Project](https://job-portal-hs45.vercel.app/login)

