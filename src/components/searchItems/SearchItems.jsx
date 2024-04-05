import { Link } from "react-router-dom";
import "./searchItems.css";

const SearchItems = ({ item }) => {
   
  return (
      <div className="searchItems">
          <div className="itemLeft">
              <img className="searchItemImg" src={item.photos[0]} alt="" />
          </div>
          <div className="itemCenter">
              <span className="propTitle">{item.name}</span>
              <span className="propDistance">{item.distance}</span>
              <span className="propTexi">Free airport texi</span>
              <span className="propAmenity">Studio apartment with air conditioning</span>
              <span className="amenities">{item.desc }</span>
              <span className="cancel">Free cancellation</span>
              <span className="cancelDesc">You can cancel later, so look in this great price today</span>
          </div>
          <div className="itemRight">
              {item.rating && 
              <div className="itemRightTop">
                  <span className="exellent">Excellent</span>
                  <span className="itemRating">{item.rating} </span>
              </div>
              }
              <span className="itemPrice">Rs. {item.cheapestPrice }</span>
              <span className="tax">Includes taxes and fees</span>
              <Link to={`/hotels/${item._id}`}>
              <button className="itemRightBtn">See availability</button>
              </Link>
          </div>
    </div>
  )
}

export default SearchItems