
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";
import "../../App.css";
import './HeroSection.css'
import Carousel from "./PopularItems/Carousel";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="title">
            <h2>Find a job that suits</h2>
            <h2>your interests and skills</h2>
            <p>
              Discover job opportunities that match your skills and passions.
              Connect with employers seeking talent like yours for rewarding
              careers.
            </p>
          </div>
          <div className="image">
            <img src="/heroS.jpg" alt="hero" />
          </div>
        </div>
        <div className="details">
         <Carousel details = {details}></Carousel>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
