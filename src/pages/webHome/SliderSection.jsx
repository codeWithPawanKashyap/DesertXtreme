import React from 'react'
import Slider from 'react-slick';
import Card from '../../component/card/Card';
import { adventureImg, bike, bluebuggy, cannam1000, cannam4, desertImg, headingImg, polaris1000, road1, road2, sharma180, sharma320, sharmaatv250, singleImg, sliderImg, twinRider } from '../../assets'

const SliderSection = ({name,para,data,tag}) => {
    var settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        // centerPadding: "60px",
        slidesToScroll: 1,
        arrows: tag ? true:false,
        autoplay:false,
        // centerMode:true,
      };
  return (
    <section className='twin-rider-section2'>
    <div className="web-rider-title">
<h2>{name}</h2>
<p>{para}

</p>
      {/* <img src={adventureImg} alt="desert" />
      <img src={twinRider} alt="" /> */}
    </div>
    


    <div className="twin-rider-slider">

      <Slider {...settings2}>
        {data?.map((item,index)=>{
          return(

            <Card double={item?.double} tag={tag} id={item?.id} title={item?.title} min={item?.min} hours={item?.hour} img={item?.img} key={index}/>
          )
        })}

      </Slider>
      {/* <div className="overlay"></div> */}
    </div>
  </section>
  )
}

export default SliderSection