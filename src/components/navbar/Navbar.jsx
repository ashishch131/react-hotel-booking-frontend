import { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to={"/"}>
          <span className="logo">Hotel Booking</span>
        </Link>
        {user ? user.username : 
        <div className="navItems">
          <button className="navbutton">Register</button>
          <button className="navbutton">Login</button>
        </div>
}
      </div>
    </div>
  );
};

export default Navbar;
