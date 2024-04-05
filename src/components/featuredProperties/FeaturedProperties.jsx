import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/hotels?featured=true"
  );
  return (
    <div className="fp">
      {loading ? "Loading..." : 
        data.map((item) => (
        
      <div className="fpItems" key={item._id}>
        <img
          src={item.photos[0]}
          alt=""
          className="fpImg"
        />
        <span className="fpName">{item.name} </span>
        <span className="fpCity">{item.city} </span>
            <span className="fpPrice">Strarting Price Rs.{item.cheapestPrice}</span>
              {item.rating && 
            <div className="fpRating">
          <button className="fpRatingBtn">{item.rating} </button>
          <span className="fpRatingText">Exellent</span>
        </div>
              }
          </div>
      ))
      }
      
    </div>
  );
};

export default FeaturedProperties;
