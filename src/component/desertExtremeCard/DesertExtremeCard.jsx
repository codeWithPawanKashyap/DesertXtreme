import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
////styles
import "./styles.scss"
import Chart from '../tablechart/Chart';
// import { desertExtreme } from '../../assets/images';
const DesertExtremeCard = ({fun}) => {
  return (
    <div className='desert-extreme-card-col'>
        
        <div className="desert-extreme-content">
            <Chart />
            {/* <h3>Property Highlights</h3>
            <p className='desert-extreme-subtitle m-0'>Perfect for a 1-night stay!</p>
            <ul>
                <li className='desert-extreme-list'><span>
                    <LocationOnOutlinedIcon/>
                    </span>
                    Top Location Highly rated by recent guests (8.3)</li>
                <li className='desert-extreme-list'><span>
                    <LocationOnOutlinedIcon/>
                    </span>Want a great night's sleep? This hotel was highly-rated for its very comfy beds</li>
           <li className='desert-extreme-subtitle'>Breakfast Info</li>
           <li className='desert-extreme-list'><span>
                    <LocationOnOutlinedIcon/>
                    </span>Continental, Vegetarian Halal , Asian,Buffet</li>
                    <li className='desert-extreme-subtitle'>Rooms with:</li>
                    <li className='desert-extreme-list'><span>
                    <LocationOnOutlinedIcon/>
                    </span>
                    City View</li>
                <li className='desert-extreme-list'><span>
                    <LocationOnOutlinedIcon/>
                    </span>Free private parking available at the hotel</li>

                    <li className='desert-extreme-subtitle'>Loyal Customers:</li>
                    <li className='desert-extreme-list'><span>
                    <LocationOnOutlinedIcon/>
                    </span>There are more repeat guests here than most other properties</li>
            </ul> */}
            {/* <div className="reserve-btn">
                <button onClick={()=>fun()}>Reserve</button>
            </div> */}
        </div>
    </div>
  )
}

export default DesertExtremeCard