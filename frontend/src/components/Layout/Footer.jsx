import React, { useContext } from 'react'
import {Context} from "../../main"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import { RiInstagramFill} from "react-icons/ri";
import "../../App.css";
import './Footer.css';

function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div>&copy; All Rights Reserved by Ajeet.</div>
<div>
  <Link to={'https://github.com/Ajeetchirag'} target='github'><FaGithub></FaGithub></Link>
  <Link to={'https://leetcode.com/u/Ajeet_211538/'} target='leetcode'><SiLeetcode></SiLeetcode></Link>
  <Link to={'https://www.linkedin.com/in/ajeet-kumar-4ba383244/'} target='linkedin'><FaLinkedin></FaLinkedin></Link>
  <Link to={'https://www.instagram.com/ajeet_chirag?igsh=Y2d0ZHVyMTZzOWx3'} target='instagram'><RiInstagramFill></RiInstagramFill></Link>
</div>
      
    </footer>
  )
}

export default Footer