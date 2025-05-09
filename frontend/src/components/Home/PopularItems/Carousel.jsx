import PropTypes from 'prop-types';
import Slider from 'react-slick';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ categories = [], companies = [], details = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {categories.map((element) => (
        <div className="card" key={element.id}>
          <div className="icon">{element.icon}</div>
          <div className="text">
            <p>{element.title}</p>
            <p>{element.subTitle}</p>
          </div>
        </div>
      ))}
      {companies.map((element) => (
        <div className="card" key={element.id}>
          <div className="content">
            <div className="icon">{element.icon}</div>
            <div className="text">
              <p>{element.title}</p>
              <p>{element.location}</p>
            </div>
          </div>
          <button>Open Positions {element.openPositions}</button>
        </div>
      ))}
      {details.map((element) => (
        <div className="card" key={element.id}>
          <div className="icon">{element.icon}</div>
          <div className="content">
            <p>{element.title}</p>
            <p>{element.subTitle}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

Carousel.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      icon: PropTypes.node,
      title: PropTypes.string,
      subTitle: PropTypes.string,
    })
  ),
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      icon: PropTypes.node,
      title: PropTypes.string,
      location: PropTypes.string,
      openPositions: PropTypes.number,
    })
  ),
  details: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      icon: PropTypes.node,
      title: PropTypes.string,
      subTitle: PropTypes.string,
    })
  ),
};

export default Carousel;
