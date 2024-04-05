import HotelIcon from "@mui/icons-material/Hotel";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import NightShelterIcon from "@mui/icons-material/NightShelter";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import TourIcon from "@mui/icons-material/Tour";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BoyIcon from "@mui/icons-material/Boy";
import React, { useContext, useState } from "react";
import "./header.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ type }) => {
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);

  const [openOption, setOpenOption] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const handleOption = (name, opretion) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: opretion === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headercontainer"
        }
      >
        <div className="headerList">
          <div className="headerListItems active">
            <HotelIcon className="itemIcon" />
            <span className="itemText">Stays</span>
          </div>
          <div className="headerListItems">
            <FlightTakeoffIcon className="itemIcon" />
            <span className="itemText">Flights</span>
          </div>
          <div className="headerListItems">
            <DirectionsCarFilledIcon className="itemIcon" />
            <span className="itemText">Flights</span>
          </div>
          <div className="headerListItems">
            <NightShelterIcon className="itemIcon" />
            <span className="itemText">Attractions</span>
          </div>
          <div className="headerListItems">
            <AirportShuttleIcon className="itemIcon" />
            <span className="itemText">Airport Taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Hotel booking account
            </p>
            {!user && (
              <button className="headerButton">Sign In / Register</button>
            )}

            <div className="headerSearch">
              <div className="headerSearchItems">
                <TourIcon className="headerSearchIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItems">
                <CalendarMonthIcon className="headerSearchIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => setOpenDate(!openDate)}
                >
                  {`${format(dates[0].startDate, "dd/MM/yy")}`} to{" "}
                  {`${format(dates[0].endDate, "dd/MM/yy")}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    minDate={new Date()}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItems">
                <BoyIcon className="headerSearchIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => setOpenOption(!openOption)}
                >
                  {`${options.adults} Adult . ${options.children} Children . ${options.rooms} Room`}{" "}
                </span>
                {openOption && (
                  <div className="options">
                    <div className="optionItems">
                      <span className="optionCounterText">Adult</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adults", "d")}
                          disabled={options.adults <= 1}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adults}{" "}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adults", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItems">
                      <span className="optionCounterText">Children</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                          disabled={options.children <= 1}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}{" "}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItems">
                      <span className="optionCounterText">Room</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("rooms", "d")}
                          disabled={options.rooms <= 1}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.rooms}{" "}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("rooms", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="headerSearchItems">
                <button className="headerSearchButton" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
