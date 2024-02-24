import "./searchItems.css";

const SearchItems = () => {
  return (
      <div className="searchItems">
          <div className="itemLeft">
              <img className="searchItemImg" src="https://images.pexels.com/photos/10146823/pexels-photo-10146823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div className="itemCenter">
              <span className="propTitle">Greater Kailash Apartments</span>
              <span className="propDistance">500m from kalka ji</span>
              <span className="propTexi">Free airport texi</span>
              <span className="propAmenity">Studio apartment with air conditioning</span>
              <span className="amenities">Entire Studio* 1 bathroom* 21m 1 full bed</span>
              <span className="cancel">Free cancellation</span>
              <span className="cancelDesc">You can cancel later, so look in this great price today</span>
          </div>
          <div className="itemRight">
              <div className="itemRightTop">
                  <span className="exellent">Excellent</span>
                  <span className="itemRating">8.9</span>
              </div>
              <span className="itemPrice">Rs. 12000</span>
              <span className="tax">Includes taxes and fees</span>
              <button className="itemRightBtn">See availability</button>
          </div>
    </div>
  )
}

export default SearchItems