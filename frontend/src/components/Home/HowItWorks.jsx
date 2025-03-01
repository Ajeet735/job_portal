import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import "../../App.css";
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How Career Connect Works !</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              `Register now to explore countless opportunities tailored to your needs. By creating an account, you will gain access to exclusive features, personalized recommendations, and a smooth, secure experience. Join our community and start your journey today!`
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p style={{ color: "white" }}>
              `Whether you are seeking new career opportunities or looking to hire the best talent, we have got you covered. Job seekers can explore a wide range of listings, while employers can post jobs to find skilled professionals. Start your journey with us now!`
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
              `Ready to take the next step in your career? Browse thousands of job listings across various industries and apply with just a few clicks. Find opportunities that match your skills and experience, and start your journey toward a brighter future today!`
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
