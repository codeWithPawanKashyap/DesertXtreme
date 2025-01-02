import React, { useEffect, useState } from "react";

import AccessTimeIcon from "@mui/icons-material/AccessTime";

import FavSliderComponent from "../../component/slider/FavSlider";
import DetailTabs from "../../component/detailTabs/DetailTabs";
import DetailCard from "../../component/detailsPageCard/DetailCard";
import {favorite}from "../../assets"
import { detailPageJson } from "../../component/json/Json";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "../../useMediaQuery";
import { Helmet } from "react-helmet";

const TourDetail = () => {
  const isMobile = useMediaQuery("(max-width:480px)")
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  // const {data:houseRule} = useHouseRuleQuery(id)
  // const houseRuleData = houseRule && houseRule?.data[0]
  const [getData, setgetData] = useState([])
  const {id} = useParams()
  useEffect(() => {
    const getData2 = detailPageJson?.find((item)=>item?.id == id)
    window.scrollTo(0, 500);
    setgetData(getData2)
  }, [id]);

  return (
    <>
      <Helmet>
<title>{getData?.name}</title>
<meta name="description" content={getData?.description}/>
    </Helmet>
      <div className="heading">
        <div className="heading-left-col">
          <h1>{getData?.name} 
            <span>- {getData?.minPrice + " AED /-"}</span>
          </h1>
          
        </div>
        <div className="heading-right-col">
          {/* <FormControl sx={{ width: "100%" }}>
                <BorderlessSelect
                  multiple
                  displayEmpty
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <>Sort By: Popularity</>;
                    }

                    return selected.join(", ");
                  }}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem disabled value="">
                    <>Sort By: Popularity</>
                  </MenuItem>
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </BorderlessSelect>
              </FormControl> */}
        </div>
      </div>
      <DetailTabs slides={getData?.slide}/>
      <div className="short-description">
     <span style={{fontSize:"12px"}}>Description:</span>  {getData?.description}
      </div>
      <div id="highlights">
        <div className="highlights-section m-collapse2">
          <DetailCard name={"Highlights"} list={getData?.highlights}/>
          <DetailCard name={"Inclusions"} data={getData}/>
          {/* <DetailCard name={"Need To Know"} list={getData?.Needtoknow}/>
          <DetailCard name={"Cancellation Policy"}list={getData?.cancellationPollicy}/> */}
        </div>
      </div>
      <div className="guest-review" id="review">
        <div className="guest-review-left-col">Guest Reviews</div>
        <div className="guest-review-right-col">
          <ul>
            <li>8.1</li>
            <li>Very Good</li>
            <li>10,926 reviews</li>
            <li>Read all reviews</li>
          </ul>
        </div>
      </div>
      {/* <div className="house-rules">
            <div className="heading-house-rule">

              <h4>House Rules </h4>
              <p>{houseRuleData?.description}</p>
            </div>
            <div className="house-rule-content">
            

             <HouseRuleContent houseRuleData={houseRuleData}/>
          
             

            </div>

          
          </div> */}
      <div className="slider-section">
        <div className="slider-heading">
          Travellers' favorite choice
          <p className="para" style={{color:"black"}}>
            From Desert Sands to Celestial Canopies: Dubai Safari Expeditions
          </p>
        </div>
        <div className="slider-col2 slider-col">
          <div className="slider-container">
            <FavSliderComponent />
          </div>
          <div className="slider-bg"></div>
        </div>
      </div>
    </>
  );
};

export default TourDetail;
