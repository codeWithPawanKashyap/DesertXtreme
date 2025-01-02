// Import Swiper React components

// Import Swiper styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


///styles
import "./styles.scss";
// import { cardImage } from "../../assets/images";
const MobileSliderComponent = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:3,
    slidesToScroll: 3,
    variableWidth: false,
    arrows:false,
    autoPlay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
        <img src={cardImage} alt="" />
        <img src={cardImage} alt="" />
        <img src={cardImage} alt="" />
        <img src={cardImage} alt="" />
        <img src={cardImage} alt="" />
    </Slider>
  );
};

export default MobileSliderComponent;
