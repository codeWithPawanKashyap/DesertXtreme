import { Link, useNavigate } from "react-router-dom";
// import { cardImage } from "../../assets/images";
////styles
import "./styles.scss";
const SliderCard2 = ({ image ,name,description,price,id,desc}) => {
  // const navHandler = (url)=>{
  //   nav("/tour-detail/"+)
  // }
  return (
    <Link to={`/tour-detail/${id}`}>

    <div className="slider-card2" >
      <div className="top-col" style={{ backgroundImage: `url(${image})` }}>
        {/* <img src={cardImage}/> */}
        {/* <img src={data?.image}/> */}
      </div>
      <div className="bottom-col">
        <h4 className="card-heading" style={{fontSize:desc == false?"16px":"12px"}}>{name}</h4>
        <p>{description}</p>
        <span>{price} AED /-</span>
      </div>
    </div>
    </Link>
  );
};

export default SliderCard2;
