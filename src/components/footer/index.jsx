import "./style.scss";
import copy from "../../assets/icons/copy.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="topSide">
        <div className="eachSide">
          <p className="title">Privacy</p>

          <Link to="">Privacy policy</Link>
          <Link to="">Privacy Statement</Link>
        </div>
        <div className="eachSide">
          <p className="title">About</p>
          <Link to="">Privacy policy</Link>
        </div>
        <div className="eachSide">
          <p className="title">Contact Us</p>
          <a href="tel:">2304 -234 - 2342</a>
          <a href="mailto:">birthdaymates@helpdesk.com</a>
        </div>
      </div>
      <p className="last">
        Birthday Mates <img src={copy} alt="copy" /> 2021 All rights reserved{" "}
      </p>
    </footer>
  );
};

export default Footer;
