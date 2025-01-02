import { adventureImg, bike, bluebuggy, cannam1000, cannam4, desertImg,  polaris1000, road1, road2, sharma180, sharma320, sharmaATV250, sharmaatv250, singleImg, sliderImg, twinRider } from '../../assets'
import  { useState } from 'react'
import "./styles.scss"
import Enquiry from '../../component/enquiryform/Enquiry'
import Slider from 'react-slick';
////styles
import "./styles.scss"
import SliderCard from '../../component/sliderCard/SliderCard';
import Card from '../../component/card/Card';
import Gallerycard from '../../component/card/Gallerycard';
import {Adultdouble, Adultsingle, DuneBuggy, Offroad} from "../../component/json/Json"
const Slides = ({gallery}) => {

  var settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // centerPadding: "60px",
    slidesToScroll: 1,
    // centerMode:true,
  };
  var settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // centerPadding: "60px",
    slidesToScroll: 1,
    arrows:false,
    // centerMode:true,
  };
  return (
    <div style={{ width: "100%" }}>




    


      <section className='twin-rider-section' id="activity">
        <div className="twin-rider-title">

          <img src={adventureImg} alt="desert" />
          <img src={twinRider} alt="" />
        </div>
        <div className="twin-detail">
          <h1>QUAD (BIKE)</h1>
         <p>
            Embrace Adventure: Thrilling Buggy <br /> Tours Await
          </p>

        </div>


        <div className="twin-rider-slider">

          <Slider {...settings2}>
            {Adultsingle?.map((item,index)=>{
              return(

                <Card tag={true} double={item?.double} id={item?.id} title={item?.title} min={item?.min} hours={item?.hour} img={item?.img} key={index}/>
              )
            })}


          </Slider>
          <div className="overlay"></div>
        </div>
      </section>


      {/* <section className='single-rider-section'>
        <div className="twin-rider-title">

          <img src={adventureImg} alt="desert" />
          <img src={singleImg} alt="" />
        </div>
        <div className="twin-detail">
          <h1>ADULT (single)</h1>
         <p>
            Embrace Adventure: Thrilling Buggy <br />Tours Await
          </p>

        </div>


        <div className="twin-rider-slider">

          <Slider {...settings2}>
            {Adultsingle?.map((item,index)=>{
              return(

                <Card  id={item?.id} title={item?.title} min={item?.min} hours={item?.hour} img={item?.img} key={index}/>
              )
            })}
          


          </Slider>
          <div className="overlay"></div>
        </div>
      </section> */}


      <section className='Dune-buggy-section'>
        <div className="twin-rider-title">

          <img src={adventureImg} alt="desert" />
          <img src={singleImg} alt="" />
        </div>
        <div className="twin-detail">
          <h1>Dune buggy</h1>
         <p>
            Embrace Adventure: Thrilling Buggy <br /> Tours Await
          </p>

        </div>


        <div className="twin-rider-slider">

        <Slider {...settings2}>
            {DuneBuggy?.map((item,index)=>{
              return(

                <Card  id={item?.id} title={item?.title} min={item?.min} hours={item?.hour} img={item?.img} key={index}/>
              )
            })}
          


          </Slider>
          <div className="overlay"></div>
        </div>
      </section>


      
      <section className='Offroad-Bike-section'>
        <div className="twin-rider-title">

          <img src={adventureImg} alt="desert" />
          <img src={singleImg} alt="" />
        </div>
        <div className="twin-detail">
          <h1>Other Offroad Bikes & ATV’s (Single)</h1>
         <p>
            Embrace Adventure: Thrilling Buggy <br />Tours Await
          </p>

        </div>


        <div className="twin-rider-slider">

        <Slider {...settings2}>
            {Offroad?.map((item,index)=>{
              return(

                <Card  id={item?.id} title={item?.title} min={item?.min} hours={item?.hour} img={item?.img} key={index}/>
              )
            })}
          


          </Slider>
          <div className="overlay"></div>
        </div>
      </section>
{!gallery && 

      <section className="gallery-sec">
        <div className="title">
          <img src={desertImg} alt="desert" />
        </div>
        <div className="gallery">
          <p>Gallery</p>
        </div>
        <div className="twin-rider-slider"> 

<Slider {...settings3}>
 
<Gallerycard />
<Gallerycard />
<Gallerycard />
<Gallerycard />
<Gallerycard />
</Slider>

</div> 

      </section>
    }

      <section id='enquiry'>

        <Enquiry />
      </section>


      
    

    </div>
  )
}

export default Slides