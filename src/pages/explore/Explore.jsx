import  { useState } from 'react'
import SliderCard from '../../component/sliderCard/SliderCard';
import {  cardImage, headingImg, kymko250, polaris1000, sharmaATV250, sharmaatv250 } from '../../assets'

////styles
import "./styles.scss"


import FooterSection from '../../component/footerSec/FooterSection';
import Navbar from '../../component/navbar/Navbar';
import Modal from '../../component/modal/Modal';
import Form from '../../component/form/Form';
import Slides from "./Slides"
import Slider from 'react-slick';
import {ExperienceSlides} from "../../component/json/Json"
const Explore = () => {

 
  const [isOpen, setIsOpen] = useState(false);

const openModal = () => {

  setIsOpen(true);
};

const closeModal = () => {
  setIsOpen(false);
};
const [activeSlide, setActiveSlide] = useState(0);
const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 1,
  speed: 500,
  arrows: false,

  dots: true,
  beforeChange: (current, next) => setActiveSlide(next),

};
  return (
    <>
    <Modal isOpen={isOpen} onClose={closeModal}>
       <Form />
      </Modal>
    <div className="navbar-layout">
    <Navbar />
  </div>
    <section className='experience-sec' id='top'>
        <div className="experience-heading">
          <img src={headingImg} alt="" />
        </div>
        <div className="sub-heading">
          <p> driving a desert buggy</p>
          <p>across stunning <span>
            sandy dunes.
          </span></p>

        </div>
        <div className="slider-container">

          <Slider {...settings}>
 
            {ExperienceSlides.map((item, index) => {
              return (

                <SliderCard key={item} item={item} animation={activeSlide} index={index} />
              )
            })}


          </Slider>
        </div>
        {/* <Slider /> */}
      </section>
   <Slides />
  <FooterSection/>
    </>
  )
}

export default Explore
