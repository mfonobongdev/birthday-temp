import "./style.scss";
import search from "../../assets/icons/search.svg";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import profile from "../../assets/icons/profile.png";
import ChatIcon from "../../assets/icons/chat";
import CompassIcon from "../../assets/icons/compass";
import HouseIcon from "../../assets/icons/house";
import { useContext, useState } from "react";
import cancel from "../../assets/icons/cancel.svg";
import HouseIcon2 from "../../assets/icons/house2";
import CompassIcon2 from "../../assets/icons/compass2";
import ChatIcon2 from "../../assets/icons/chat2";
import ProfileIcon2 from "../../assets/icons/profile2";
import locationIcon from "../../assets/icons/location.svg";
import { ThemeContext } from "../../context/ThemeProvider";
import AlarmIcon from "../../assets/icons/AlarmIcon";
import Hamburger from "../../assets/icons/Hamburger";
import FriendsIcon from "../../assets/icons/FriendsIcon";
import TvIcon from "../../assets/icons/TvIcon";
import ShareIcon from "../../assets/icons/ShareIcon";
import SettingIcon from "../../assets/icons/SettingIcon";
import MoonIcon from "../../assets/icons/MoonIcon";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import LogOutIcon from "../../assets/icons/LogOutIcon";

const NavBar = () => {
  const { isThemeDark, themeDispatch } = useContext(ThemeContext);

  const [dnone, setDnone] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };
  const location = useLocation();
  return (
    <div className="fixedNav">
      <nav>
        <div className="innerNav">
          <div className="left">
            <p>Birthday Mates</p>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Search"
                name="search"
                id="seach"
              />
              <button className="btn">
                <img src={search} alt="search icon" />
              </button>
            </div>
          </div>
          <div className="right">
            <div className="navIcons">
              <Link
                className={`${location.pathname === "/" ? "active" : ""}`}
                to="/"
              >
                <HouseIcon />
              </Link>

              <Link
                className={`${
                  location.pathname === "/explore" ? "active" : ""
                }`}
                to="/explore"
              >
                <CompassIcon />
              </Link>

              <Link
                className={`${location.pathname === "/chat" ? "active" : ""}`}
                to="/chat"
              >
                <ChatIcon />
              </Link>
            </div>
            <div className="profileIcon">
              <div
                onClick={() => {
                  setDnone(!dnone);
                }}
                className="innerProfile"
              >
                <img className="profImg" src={profile} alt="profile" />
                <div className="profileText">
                  <p className="userName">Alechenu Peter</p>
                  <div className="location">
                    <img src={locationIcon} alt="location" />
                    <p>
                      <span>Location,</span> <span>Nigeria</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className={`dropNav ${dnone ? "show" : ""}`}>
                <ul>
                  <li>
                    <Link to="/profile">
                      <ProfileIcon />
                      <p>Profile</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/friends">
                      <FriendsIcon />
                      <p>Friends</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <SettingIcon />
                      <p>Settings</p>
                    </Link>
                  </li>
                  <div className="line"></div>
                  <li>
                    <Link to="/">
                      <LogOutIcon />
                      <p>Log out</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* mobile navbar */}
        <div className="mobileNav">
          <div className="navigations">
            <button onClick={handleModal} className="btn">
              <Hamburger />
            </button>

            <p>Birthday Mates</p>
            <button className="btn">
              <AlarmIcon />
            </button>
          </div>

          {/* modal side */}

          <div
            onClick={(e) => {
              e.preventDefault();
              if (e.target === e.currentTarget) setOpenModal(!openModal);
            }}
            className={`${openModal ? "open" : "close"} modal`}
          >
            <span className="cancel" onClick={handleModal}>
              <img src={cancel} alt="close" />
            </span>
            <div className="modal-content">
              <div className="profileDiv">
                <img src={profile} alt="profile" />
                <p className="userName">Ben Azuka</p>
              </div>
              <div className="line1"></div>
              <ul>
                <li>
                  <Link to="/friends">
                    <FriendsIcon />
                    <p>Friends</p>
                  </Link>
                </li>
                <li>
                  <Link to="/profile">
                    <TvIcon />
                    <p>Go Live</p>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <SettingIcon />
                    <p>Settings</p>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <ShareIcon />
                    <p>Share App</p>
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      themeDispatch({
                        type: "changeTheme",
                        value: !isThemeDark,
                      });
                    }}
                  >
                    <MoonIcon />
                    <p>{isThemeDark ? "Light Mode" : "Dark Mode"}</p>
                  </button>
                </li>
              </ul>

              <div className="bottom">
                <div className="line2"></div>
                <button className="btn">
                  <LogOutIcon />
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* footer navbar */}
        <div className="footerNav">
          <div className="curveBox">
            <div className="flexContainer">
              <div
                className={`eachNav ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link to="/">
                  <HouseIcon2 />
                  <p>Home</p>
                </Link>
              </div>
              <div
                className={`eachNav ${
                  location.pathname === "/explore" ? "active" : ""
                }`}
              >
                <Link to="/explore">
                  <CompassIcon2 />
                  <p>Explore</p>
                </Link>
              </div>
              <div
                className={`eachNav ${
                  location.pathname === "/chat" ? "active" : ""
                }`}
              >
                <Link to="/chat">
                  <ChatIcon2 />
                  <p>Chat</p>
                </Link>
              </div>
              <div
                className={`eachNav ${
                  location.pathname === "/profile" ? "active" : ""
                }`}
              >
                <Link to="/profile">
                  <ProfileIcon2 />
                  <p>Profile</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
