import { useEffect, useState } from "react"
import Slider from "react-slick";

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
///styles
import "./styles.scss"

import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

import Modal from "../modal/Modal";
import Form from "../form/Form";
import axios from "axios";
import { toast } from "react-toastify";
import ThankYouModal from "../thankYouModal/ThankYouModal";
import { isMobile } from "react-device-detect";


const DetailTabs = ({sliderData,fun,slides}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [checkErorr,setCheckError] = useState({})
  const [isOpen2, setIsOpen2] = useState(false);
  const [changeImage, setChangeImage] = useState(null)
  const [value, setValue] =useState(4);
  useEffect(() => {
   setChangeImage(slides?.length && slides[0])
  }, [slides])
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: false,
    autoPlay:true,
    Loop:true,
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
  const [activeTabs, setActiveTabs] = useState(0)
  const tabs = [ {
  name:"Highlights",link:"highlights"},
  // {
  // name:"Inclusions",link:"highlights"}, 
  // {
  // name:"Need to Know",link:"highlights"},
  {
  name:"Reviews",link:"review"},{
    name:"ENQUIRY NOW",link:"enquiry"},]
 
 
  const [checkFavourite, setCheckFavourite] = useState(false)

  
  useEffect(() => {
   setValue(4)
  }, [sliderData])
  
  // const [isOpen, setIsOpen] = useState(false);

  
  
  
  // const [isOpen2, setIsOpen2] = useState(false);
  
  const openModal = () => {
    setIsOpen(true);
  };


  const closeModal = () => {
    setIsOpen(false);
    setIsOpen2(false)
  };
  const openModal2 = () => {
  setIsOpen(false)
    setIsOpen2(true);
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deviceType:isMobile?"Mobile":"Desktop",
    senderEmail: 'ad@example.com', // Add senderEmail to the initial state
  });
  const [loading, setLoading] = useState(false)
  const submitHandler = async(e)=>{
    e.preventDefault()
    
    let errors = {};
    for (let key in formData) {
      if (formData[key] === "") {
        errors[key] = true;
      } else {
        errors[key] = false;
      }
    }
    setCheckError(errors);
  
    let checkErr = false;
    for (let key in errors) {
      if (errors[key] === true) {
        checkErr = true;
        break;
      }
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(formData?.email)){
      alert("Invalid email format");
      return
    }
    console.log(checkErorr)
 if(!checkErr) {
    // return Object.values(errors).every(value => value === false);
   
      const formData2 = {
        deviceType: isMobile ? "Mobile" : "Desktop",
        name: formData?.name,
        email: formData?.email,
        phone: formData?.phone,
        countryCode: formData?.countryCode,
      };
      setLoading(true)
    await axios.post("https://tripatours.com/api/enquiry/desertExtremeEnquiry",formData2).then((response)=>{
    
      
      if(response?.data?.status == "true"){
         openModal2()
         setLoading(false)
        // toast.success(response?.data?.message,{
        //   position: "top-right",
        // });
         setFormData((prev)=>{
          return{
            ...prev,name:"",email:"",phone:""
          }
         })
       }else{
        toast.error(response?.data?.message);
        setLoading(false)
       }
     }).catch((error)=>{
      toast.error(error?.response?.data?.message || 'An error occurred');
      setLoading(false)
    })
     setLoading(false)
   }
  }
  
  return (
    <>
     
    <Modal isOpen={isOpen2} onClose={closeModal}>
    <ThankYouModal />
   </Modal>
       <Modal isOpen={isOpen} onClose={closeModal}>
     {loading ? <span style={{color:"black"}}>loading...</span>:<Form setCheckError={setCheckError}checkErorr={checkErorr} setFormData={setFormData} formData={formData} submitHandler={submitHandler}/>}  
      </Modal>
    <div className="tabs-container">
      <div className="tabs-title">
        <ul>
          {tabs.map((item,index)=>{
            return(

            <a href={`#${item.link}`} key={item} >

              <li onClick={()=>item.link == "enquiry"?openModal(): setActiveTabs(index)} className={item.link == "enquiry" ?"bg-green":activeTabs == index?"active-tab":""}>{item.name}</li>
            </a> 
            )
          })}
         
        </ul>
      </div>
      <div className="tabs-content">
        <div className="slides">
          <div className="preview-slide">
            <img src={changeImage} alt="" />
            <div className={` ${checkFavourite ?"heart-icon2":"heart-icon"}`}>{!checkFavourite ?<FavoriteBorderOutlinedIcon/>:<FavoriteOutlinedIcon /> }</div>
          </div>
          <div className="slides-list">
          <Slider {...settings}>
              
         
            {slides?.map((item) => (
              <img src={item} alt={item} key={item} onClick={()=>setChangeImage(item)}/>
            ))}
    </Slider>
         
          </div>
        </div>
      
      </div>
    </div>
    </>
  )
}

export default DetailTabs