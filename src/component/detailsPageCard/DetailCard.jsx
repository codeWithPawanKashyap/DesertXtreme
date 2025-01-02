import React from "react";
////styles
import "./styles.scss";
import Chart from "../tablechart/Chart";
const DetailCard = ({ name, list,data }) => {
  return (
    <>
    {name == "Inclusions"?
      <Chart data={data}/>:
    <div className="detail-card">
      <h2>{name}</h2>
      {/* <ul> */}
    
               <div dangerouslySetInnerHTML={{ __html: list }} />
      
         
      {/* </ul> */}

    </div>
    }
    </>
  );
};

export default DetailCard;









