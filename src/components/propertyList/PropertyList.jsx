import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const image = [
  "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2111768/pexels-photo-2111768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const PropertyList = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/hotels/countbytype"
  );

  return (
      <div className="pList">
          {loading ? "Loading..." : <>
              { data && image.map((img, i) => (
                  
                  <div className="pListItems" key={i}>
                  <img
                  src={img}
                  alt=""
                  className="plistImg"
                  />
                  <div className="pListTitles">
                  <h1 style={{textTransform: "capitalize"}}>{data[i]?.type} </h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                  </div>
                  </div>
              ))}
              </>
           }
    </div>
  );
};

export default PropertyList;
