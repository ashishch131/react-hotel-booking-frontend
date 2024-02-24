import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItems from "../../components/searchItems/SearchItems";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [option, setOption] = useState(location.state.option);
  const [openDate, setOpenDate] = useState(false);
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
                type="text"
              />
            </div>
            <div className="lsItems">
              <label className="lsItemText">Check-in date</label>
              <span
                className="lsDateInput"
                onClick={() => setOpenDate(!openDate)}
              >
                {`${format(date[0].startDate, "dd/MM/yy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItems">
              <label className="lsItemText">Options</label>
              <div className="lsOptionItems">
                <span className="lsOptionText">
                  Min Price <small>(per night)</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItems">
                <span className="lsOptionText">
                  Max Price <small>(per night)</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItems">
                <span className="lsOptionText">Adult</span>
                <input
                  min={1}
                  type="number"
                  placeholder={option.adult}
                  className="lsOptionInput"
                />
              </div>
              <div className="lsOptionItems">
                <span className="lsOptionText">Children</span>
                <input
                  min={0}
                  type="number"
                  placeholder={option.children}
                  className="lsOptionInput"
                />
              </div>
              <div className="lsOptionItems">
                <span className="lsOptionText">Room</span>
                <input
                  min={1}
                  type="number"
                  placeholder={option.room}
                  className="lsOptionInput"
                />
              </div>
            </div>
            <button className="lsButton">Search</button>
          </div>

          <div className="listResult">
            <SearchItems />
            <SearchItems />
            <SearchItems />
            <SearchItems />
            <SearchItems/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
