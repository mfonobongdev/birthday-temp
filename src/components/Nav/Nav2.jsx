import {Link} from "react-router-dom";
import {useState} from "react";
import {useLocation} from "react-router";

import "./nav2.scss";
import Hamburger from "../../assets/icons/Hamburger";
const Nav2 = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

  return (
    <div className="nav2">
      <div className="nav2__inner">
        <h1>Birthday Mates </h1>
        <button onClick={() => setShowNav(!showNav)} className="btn noBg">
          <Hamburger />
        </button>
        <ul className={`nav__list ${showNav ? "showNav" : ""}`}>
          <li
            className={`nav__link ${
              location.pathname === "/home" ? "active" : ""
            }`}
          >
            <Link to="/home">Home</Link>
          </li>
          <li
            className={`nav__link ${
              location.pathname === "/login" ? "active" : ""
            }`}
          >
            <Link to="/login">Login</Link>
          </li>
          <li
            className={`nav__link ${
              location.pathname === "/help" ? "active" : ""
            }`}
          >
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav2;
