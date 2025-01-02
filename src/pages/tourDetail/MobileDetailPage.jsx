import  {  useEffect, useState } from "react";

import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
////styles
import "./mobileDetail.scss";
import { Rating } from "@mui/material";
import { CustomAccordion } from "./styled";
import { Link, useParams } from "react-router-dom";
import Modal from "../../component/modal/Modal";
import Form from "../../component/form/Form";
import FooterSection from "../../component/footerSec/FooterSection";
import Slides from "../explore/Slides";
import { detailPageJson } from "../../component/json/Json";
import Navbar from "../../component/navbar/Navbar";
import { deal } from "../../assets";
import Greatcard from "../../component/greatcard/Greatcard";
import Slider from "react-slick";
import Enquiry from "../../component/enquiryform/Enquiry";
import FavSliderComponent from "../../component/slider/FavSlider";
import { Helmet } from "react-helmet";
import axios from "axios";
import { isMobile } from "react-device-detect";
import { toast } from "react-toastify";

const MobileDetailPage = () => {

const [isOpen, setIsOpen] = useState(false);
const [formData, setFormData] = useState({
  name:"",
  email:"",
  countryCode:"",
  phone:"",
  deviceType:isMobile?"Mobile":"Desktop",
  senderEmail: "ad@example.com", // Add senderEmail to the initial state
});
const [checkErorr,setCheckError] = useState({})

const openModal = () => {

  setIsOpen(true);
};

const closeModal = () => {
  setIsOpen(false);
};
const {id} = useParams()

const [getData, setGetData] = useState(null)
useEffect(() => {


  const getData2 = detailPageJson?.find((item)=>item?.id == id)
 setGetData(getData2)
}, [id])

  const [showFull, setShowFull] = useState(false);

  const toggleShowFull = () => {
    setShowFull(!showFull);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  const settings = {
    infinite: true,
    slidesToShow: 1,
    // speed: 1500,
    arrows: false,
loop:true,
    dots: true,
    autoplay: true,
  };
  
  const submitHandler = async (e) => {
    e.preventDefault();
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
 if(!checkErr) {
    // return Object.values(errors).every(value => value === false);
   
      const formData2 = {
        deviceType: isMobile ? "Mobile" : "Desktop",
        name: formData?.name,
        email: formData?.email,
        phone: formData?.phone,
        countryCode: formData?.countryCode,
      };
     await axios.post("https://tripatours.com/api/enquiry/desertExtremeEnquiry",formData2).then((response)=>{
   

          if (response?.data?.status == "true") {
            openModal();
            // toast.success(response?.data?.message,{
            //   position: "top-right",
            // });
            setFormData((prev) => {
              return {
                ...prev,
                name: "",
                email: "",
                phone: "",
                message: "",
              };
            });
          } else {
            toast.error(response?.data?.message);
          }
          
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message || "An error occurred");
        });
    
 }

  };
  return (
    <>
    <Helmet>
<title>{getData?.name}</title>
<meta name="description" content={getData?.description}/>
    </Helmet>
    <Modal isOpen={isOpen} onClose={closeModal}>
       <Form submitHandler={submitHandler} formData = {formData} setFormData ={setFormData}setCheckError={setCheckError}checkErorr={checkErorr}/>
      </Modal>
      <div className="navbar-layout">
    <Navbar />
  </div>
       {/* <BasicModal  Children={<EnquiryForm setOpen={setOpen} id={id} width={"100%"}/>}  setOpen={setOpen} open={open}/> */}

      <div className="detail-center-col">
        <div className="mobile-detail-top-banner" >
           {/* style={{backgroundImage:`url("")`}}> */}
           <div className="slider">
              <Slider {...settings}>
                {/* <div>
                  <Greatcard />
                </div>
                <div>
                  <Greatcard />
                </div> */}
                {getData?.slide.map((item)=>{

                    return(
                      <img src={item} alt={item} key={item}/>
                    )
                })}
                <div>
                  {/* <Greatcard /> */}
                </div>
              </Slider>
            </div>
          <div className="mobile-deatil-banner-head">
            <div className="head-left-col">
              <Link to={"/"}> 
                <div className="head-icon">
                  <KeyboardBackspaceOutlinedIcon />
                </div>
              </Link>
              <button>{getData?.tag}</button>
            </div>
            <div className="head-right-col">
             
              <div className="head-icon">
                <ReplyOutlinedIcon />
              </div>
            </div>
          </div>
          <div className="mobile-detail-banner-bottom-col">
            {/* <img src={deal} alt="item" /> */}
            {/* <ul>
              <li>
                <div className="icon">
                  <AccessAlarmsIcon />
                </div>
                <div className="text-b">Duration 6Hr.</div>
              </li>
              <li>
                <div className="icon">
                  <AirportShuttleOutlinedIcon />
                </div>
                <div className="text-b">Transfer Included</div>
              </li>
              <li>
                <div className="icon">
                  <LocalHotelOutlinedIcon />
                </div>
                <div className="text-b">Hotel Pickup</div>
              </li>
              <li>
                <div className="icon">
                  <RamenDiningOutlinedIcon />
                </div>
                <div className="text-b">Meals Included</div>
              </li>
            </ul> */}
          </div>
        </div>
        <div className="detail-heading">
          <h2>{getData?.name}</h2>
        </div>
        <div className="price-rating-section">
        <div className="number-rating">
      

              <p>Very Good</p>
              <p>

              (44 VERIFIED RATINGS)
              </p>
       
            </div>  
          <div className="star-rating">

<Rating
  size="small"
  name="simple-controlled"
  color="green"
  value={5}
  // onChange={(event, newValue) => {
  //   setValue(newValue);
  // }}
/>
</div>
        
      
        </div>
        <div className="price-btn">

        <p>AED {getData?.minPrice}/-</p>
<div className="book-btn">

<a href="#enquiry">
  <button>Book Now</button>
  </a>
</div>
</div>
        <hr />
        {/* <div className="detail-description">
        Embrace Adventure: Thrilling Buggy <br /> Tours Await
        </div> */}
        <div className="experience-section m-collapse">
          <h2>Experience</h2>
          <CustomAccordion >
            <AccordionSummary
              // expandIcon={null}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                filter: "drop-shadow(0px 1px 8px rgba(0,0,0,0.09))",
                backgroundColor: "#ffffff",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "16px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "green",
                    borderRadius: "100px",
                  }}
                ></span>
                Description
              </div>
            </AccordionSummary>
            <AccordionDetails>
            <p>{showFull ? getData?.description : `${getData?.description.slice(0, 100)}...`} <span onClick={toggleShowFull} style={{color:"#df723c"}}>  {showFull ? 'Show less' : 'Show more'}</span> </p>
     
            
            </AccordionDetails>
          </CustomAccordion>
          <CustomAccordion defaultExpanded>
            <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                filter: "drop-shadow(0px 1px 8px rgba(0,0,0,0.09))",
                backgroundColor: "#ffffff",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "16px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "green",
                    borderRadius: "100px",
                  }}
                ></span>
                Highlights
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                dangerouslySetInnerHTML={{ __html: getData?.highlights}}
              />
            </AccordionDetails>
          </CustomAccordion>
          {/* <CustomAccordion>
            <AccordionSummary
           expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                filter: "drop-shadow(0px 1px 8px rgba(0,0,0,0.09))",
                backgroundColor: "#ffffff",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "16px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "green",
                    borderRadius: "100px",
                  }}
                ></span>
                Need To Know
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                dangerouslySetInnerHTML={{ __html:getData?.Needtoknow }}
              />
            </AccordionDetails>
          </CustomAccordion>
          <CustomAccordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                filter: "drop-shadow(0px 1px 8px rgba(0,0,0,0.09))",
                backgroundColor: "#ffffff",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "16px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "green",
                    borderRadius: "100px",
                  }}
                ></span>
                Cancel Policy
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                dangerouslySetInnerHTML={{ __html: getData?.cancellationPollicy }}
              />
            </AccordionDetails>
          </CustomAccordion> */}
        </div>
      </div>
      {/* <Slides gallery={true}/>
       */}
        <div className="slider-section">
        <div className="slider-heading">
          Travellers' favorite choice
          <p className="para" style={{color:"black",fontSize:"12px"}}>
            From Desert Sands to Celestial Canopies: Dubai Safari Expeditions
          </p>
        </div>
        <div className="slider-col2 slider-col" id="fav">
          <div className="slider-container" style={{width:"92%",margin:"2% auto"}}>
            <FavSliderComponent desc={false}/>
          </div>
          <div className="slider-bg"></div>
        </div>
      </div>
        <section id='enquiry'>

<Enquiry />
</section>
   <FooterSection/>
    </>

  );
};

export default MobileDetailPage;
