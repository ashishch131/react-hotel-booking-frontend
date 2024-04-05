import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItems from "../../components/searchItems/SearchItems";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:5000/api/hotels?city=${destination}&min=${min || 0}&max=${
      max || 9999
    }`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="list">
        <div className="listContainer">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItems">
              <label className="lsItemText">Destination</label>
              <input
                className="lsInput"
                placeholder={destination}
                onChange={(e) => setDestination(e.target.value)}
                type="text"
              />
            </div>
            <div className="lsItems">
              <label className="lsItemText">Check-in date</label>
              <span
                className="lsDateInput"
                onClick={() => setOpenDate(!openDate)}
              >
                {`${format(dates[0].startDate, "dd/MM/yy")} to ${format(
                  dates[0].endDate,
                  "dd/MM/yy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItems">
              <label className="lsItemText">Options</label>
              <div className="lsOptionItems">
                <span className="lsOptionText">
                  Min Price <small>(per night)</small>
                </span>
                <input
                  type="number"
                  className="lsOptionInput"
                  onChange={(e) => setMin(e.target.value)}
                />
              </div>
              <div className="lsOptionItems">
                <span className="lsOptionText">
                  Max Price <small>(per night)</small>
                </span>
                <input
                  type="number"
                  className="lsOptionInput"
                  onChange={(e) => setMax(e.target.value)}
                />
              </div>
              <div className="lsOptionItems">
                <span className="lsOptionText">Adult</span>
                <input
                  min={1}
                  type="number"
                  placeholder={options.adults}
                  className="lsOptionInput"
                />
              </div>
              <div className="lsOptionItems">
                <span className="lsOptionText">Children</span>
                <input
                  min={0}
                  type="number"
                  placeholder={options.children}
                  className="lsOptionInput"
                />
              </div>
              <div className="lsOptionItems">
                <span className="lsOptionText">Room</span>
                <input
                  min={1}
                  type="number"
                  placeholder={options.rooms}
                  className="lsOptionInput"
                />
              </div>
            </div>
            <button className="lsButton" onClick={handleClick}>
              Search
            </button>
          </div>

          <div className="listResult">
            {loading
              ? "Loading..."
              : data.map((item) => <SearchItems item={item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
