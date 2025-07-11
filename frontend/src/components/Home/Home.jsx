
import { useContext } from "react";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopularCategories from "./PopularItems/PopularCategories";
import PopularCompanies from "./PopularItems/PopularCompanies";
import Carousel from "./PopularItems/Carousel.jsx";
import "../../App.css";

const Home = () => {
  const { isAuthorized } = useContext(Context);
  if (!isAuthorized) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <section className="homePage page">
        <HeroSection />
        <HowItWorks />
        <PopularCategories />
        <PopularCompanies />
        <Carousel/>
      </section>
    </>
  );
};

export default Home;
