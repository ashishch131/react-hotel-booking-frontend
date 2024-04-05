import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./reserve.css";
import CloseIcon from "@mui/icons-material/Close";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, hotelId }) => {
  const navigate = useNavigate();
  const { dates } = useContext(SearchContext);
  const [selected, setSelected] = useState([]);
  const { data, loading, error } = useFetch(
    `http://localhost:5000/api/hotels/room/${hotelId}`
  );

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelected(
      checked ? [...selected, value] : selected.filter((item) => item !== value)
    );
  };

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleClick = async () => {
    try {
      await Promise.all(
        selected.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) {}
  };

  return (
    <div className="reserve">
      <div className="reserveContainer">
        <div className="btnClose" onClick={() => setOpen(false)}>
          <CloseIcon className="closeIcon" />
        </div>
        <span className="InfoTitle">Select your rooms:</span>
        {data.map((item) => (
          <div className="roomInfo">
            <div className="roomInfoLeft">
              <span className="roomTitle">{item.title} </span>
              <span className="roomDesc">{item.desc}</span>
              <span className="roomPrice">Rs.{item.price} </span>
              <span className="maxPeople">
                Max people: <b>{item.maxPeople} </b>
              </span>
            </div>
            <div className="roomInfoRight">
              {item.roomNumbers.map((roomNumber) => (
                <div className="room">
                  <label className="roomNumber">{roomNumber.number} </label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button className="roomReserve" onClick={handleClick}>
          Reserve now
        </button>
      </div>
    </div>
  );
};

export default Reserve;
