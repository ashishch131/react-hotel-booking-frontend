import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
import { format } from "date-fns";

const Hotel = () => {
  const { dates, options } = useContext(SearchContext);
  const { user } = useContext(AuthContext);
  const [openModel, setOpenModel] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  const { data, loading, error } = useFetch(
    `http://localhost:5000/api/hotels/find/${id}`
  );

  const handleClick = () => {
    if (user) {
      setOpenModel(true);
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Loading..."
      ) : (
        <div className="hotelConatianer">
          {open && (
            <div className="slider">
              <CloseIcon className="close" onClick={() => setOpen(false)} />
              <ArrowBackIosIcon
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <ArrowForwardIosIcon
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <div className="hotelTitleItem">
              <h1 className="hotelTitle">{data.name}</h1>
              <button className="hotelReserve" onClick={handleClick}>
                Reserve or Book Now!
              </button>
            </div>
            <div className="hotelLocation">
              <LocationOnIcon />
              <span className="hotelAdd">{data.distance}</span>
            </div>
            <span className="hotelAddress">
              Excellent location – {data.address}
            </span>
            <span className="hotelOffer">
              Book a stay over Rs {data.cheapestPrice} at this property and get
              a free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    className="hotelImg"
                    src={photo}
                    alt=""
                    onClick={() => handleOpen(i)}
                  />
                </div>
              ))}
            </div>
            <div className="hotelBottom">
              <div className="hotelBottomLeft">
                <h1 className="hotelBottomTitle">{data.title} </h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelBottomRight">
                <h1 className="bottomRightTitle">
                  Perfect for a {days}-night stay!
                </h1>
                <span className="bottomRightDesc">
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <span className="hotelPrice">
                  <b>Rs.{data.cheapestPrice * days * options.rooms} </b>({days}{" "}
                  nights)
                </span>
                <button className="hotelReserve" onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModel && <Reserve setOpen={setOpenModel} hotelId={id} />}
    </div>
  );
};

export default Hotel;
