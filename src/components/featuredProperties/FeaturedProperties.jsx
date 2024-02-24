import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItems">
        <img
          src="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Shangri-la-eros</span>
        <span className="fpCity">New Delhi</span>
        <span className="fpPrice">Strarting Price Rs.12000</span>
        <div className="fpRating">
          <button className="fpRatingBtn">8.9</button>
          <span className="fpRatingText">Exellent</span>
        </div>
          </div>
          <div className="fpItems">
        <img
          src="https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Taj Palace</span>
        <span className="fpCity">New Delhi</span>
        <span className="fpPrice">Strarting Price Rs.18000</span>
        <div className="fpRating">
          <button className="fpRatingBtn">8.9</button>
          <span className="fpRatingText">Exellent</span>
        </div>
          </div>
          <div className="fpItems">
        <img
          src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Radison Blue</span>
        <span className="fpCity">Noida</span>
        <span className="fpPrice">Strarting Price Rs.12000</span>
        <div className="fpRating">
          <button className="fpRatingBtn">8.9</button>
          <span className="fpRatingText">Exellent</span>
        </div>
          </div>
          <div className="fpItems">
        <img
          src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Crown Plaza </span>
        <span className="fpCity">Noida</span>
        <span className="fpPrice">Strarting Price Rs.8000</span>
        <div className="fpRating">
          <button className="fpRatingBtn">8.5</button>
          <span className="fpRatingText">Exellent</span>
        </div>
          </div>
          <div className="fpItems">
        <img
          src="https://images.pexels.com/photos/1055056/pexels-photo-1055056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Jaypee Green Golf</span>
        <span className="fpCity">New Delhi</span>
        <span className="fpPrice">Strarting Price Rs.12000</span>
        <div className="fpRating">
          <button className="fpRatingBtn">7.5</button>
          <span className="fpRatingText">Good</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
