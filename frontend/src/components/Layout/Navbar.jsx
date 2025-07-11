import  { useContext, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon
import "../../App.css";
import './Navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  //Handle Logout Function
  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/user/logout", { withCredentials: true,} );

      toast.success(response.data.message); //Shows success messages.
      setIsAuthorized(false); // User is now logged out
      navigateTo("/login"); // Redirect to login page
    } catch (error) {
      toast.error(error.response.data.message), setIsAuthorized(true); // show error message
    }
  };

  return (
    // Navbar JSX (Rendering) If the user is logged in (isAuthorized === true), the navbar is displayed.
    //Otherwise, the navbar is hidden.
    <nav className={isAuthorized ? "navbarShow" : "navbarHide"}> 
      <div className="container">

 {/*Displays the CareerConnect logo.*/}
        <div className="logo"> 
          <img src="/careeconnect-white.png" alt="logo" />
        </div>
        <ul className={!show ? "menu" : "show-menu menu"}>

 {/*Links for All Users*/}
          <li> <Link to={"/"} onClick={() => setShow(false)}>Home</Link> </li>
          <li> <Link to={"/job/getall"} onClick={() => setShow(false)}> All Jobs</Link> </li>
 {/*Applications Link (Job Seeker vs Employer)*/}
          <li> <Link to={"/applications/me"} onClick={() => setShow(false)}> {user && user.role === "Employer"? "Applicant's Application": "My Application"}</Link>  </li>

 {/*Employer-Specific Links*/}
          {user && user.role === "Employer" ? (
            <>
              <li> <Link to={"/job/post"} onClick={() => setShow(false)}> Post New Job </Link></li>
              <li><Link to={"/job/me"} onClick={() => setShow(false)}>View Your Jobs </Link></li>
             </>
          ) : null}
          
{/*Logout Button*/}
          <button onClick={handleLogout}>Logout</button>
        </ul>

        {/*This code snippet represents a hamburger menu in React, commonly used for navigation menus on mobile devices.*/}
        <div className="hamburger" onClick={() => setShow(!show)}>
          {show ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
