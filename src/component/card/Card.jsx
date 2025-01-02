// import "./styles.scss"
import "./gallery.scss"

import { useNavigate } from 'react-router-dom';

const Card = ({title,hours,min,img,id,tag,double}) => {
  const nav =useNavigate()
  return (
    <div className='card-container' onClick={()=>nav(`/tour-detail/${id}`)}>
      
      {tag && 
      <div className="rating">
        <span>
{double ? "DOUBLE":"SINGLE"}
      
        </span>

      </div>
      }
      <div className="img-sec" style={{backgroundImage:`url(${img})`}}>
      </div>
      <div className="detail-sec">
        <div className="title">
          <p>{title}</p>
        </div>
        <div className="price-sec">
          <div className="price">
            <span>{min}</span>
            <span>{hours}</span>
          </div>
          <div className="booknow">
          <button className="book-btn" >
              book now
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Card