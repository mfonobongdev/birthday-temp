/* eslint-disable no-fallthrough */
import SocialLayout from "../../components/SocialLayout";
import location from "../../assets/icons/location.svg";
import pen from "../../assets/icons/pen.svg";
import userp from "../../assets/images/profile.png";
import "./style.scss";
import {useState, useEffect} from "react";
import down from "../../assets/icons/down.svg";
import pish from "../../assets/images/pish.png";
import pencil from "../../assets/icons/pencil.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import MultiTabs from "../../components/MultiTabs";
import {users, posts} from "../data";
import PostCard from "../../components/PostCard";
import SuggestedCard from "../../components/SuggestedCard/SuggestedCard";
import FooterCard from "../../components/FooterCard";
import PostModal from "../../components/PostModal";
import PostModalMobile from "../../components/PostModal/PostModalMobile";
import EditProfile from "../../components/EditProfile";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Birthday feed");
  const [dnone, setDnone] = useState(true);
  const [filter, setFilter] = useState("All");
  const [showPostModal, setshowPostModal] = useState(false);
  const [postIndexToShow, setpostIndexToShow] = useState(0);
  const [hideCtrl, sethideCtrl] = useState("prev");
  const [toggle, setToggle] = useState(true);
  const [showEditProfile, setshowEditProfile] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    if (postIndexToShow === 0) sethideCtrl("prev");
    else if (postIndexToShow === posts.length - 1) sethideCtrl("next");
    else sethideCtrl("");
  }, [postIndexToShow]);

  const year = [
    "2001",
    "2002",
    "2001",
    "2002",
    "2001",
    "2002",
    "2001",
    "2002",
    "2001",
    "2002",
    "2001",
    "2002",
    "2001",
    "2002",
    "2001",
    "2002",
  ];
  const handleActive = type => {
    console.log(type);
    setActiveTab(type);
  };

  return (
    <>
      <SocialLayout>
        <div className="profileDiv">
          <div className="bgImg">
            <button className="zodiac btn">Scorpio</button>
          </div>
          <div className="userContainer">
            <div className="aboutUser">
              <img src={userp} alt="user" className="userImage" />
              <div className="first">
                <div className="flexer">
                  <div className="aboutUserText">
                    <p className="username">Alechenu Peter</p>
                    <p className="userDate">28th of July </p>
                    <div className="location">
                      <img src={location} alt="location" />
                      <p>
                        <span>Location,</span> <span>Nigeria</span>
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setshowEditProfile(!showEditProfile)}
                    className="btn edit"
                  >
                    Edit Profile
                    <img src={pen} alt="pen" />
                  </button>
                </div>

                <p className="userDesc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam, error!
                </p>
              </div>
            </div>
            <div className="userDescMobile">
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                error!
              </p>
              <div className="takeAction">
                <button
                  onClick={() => setshowEditProfile(!showEditProfile)}
                  className="btn edit"
                >
                  Edit Profile
                </button>
                <button className="btn new">New Post</button>
              </div>
            </div>

            <div className="userNav">
              <MultiTabs
                activeTabArr={["Birthday feed", "Birthday Archive", "Wishlist"]}
                handleActive={handleActive}
                activeTab={activeTab}
              />
              <div className="filterDiv">
                {activeTab === "Birthday feed" && (
                  <>
                    <div
                      onClick={() => {
                        setDnone(!dnone);
                      }}
                      className="arrow"
                    >
                      <p>{filter}</p>
                      <img src={down} alt="down svg" />
                    </div>

                    <div className={`dropFilt ${dnone ? "" : "show"}`}>
                      <ul>
                        {year.map(item => {
                          return (
                            <li
                              onClick={() => {
                                setFilter(item);
                                setDnone(!dnone);
                              }}
                            >
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </>
                )}
                {activeTab === "Birthday Archive" && (
                  <div className="toggleBox">
                    <p>Publicly visible</p>
                    <label class="switch">
                      <input
                        checked={toggle}
                        onClick={handleToggle}
                        type="checkbox"
                      />
                      <span class="slider round"></span>
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {activeTab === "Birthday feed" && (
          <div className="feedDisplay fade">
            <main className="homepage">
              <div className="left">
                {posts.map((post, i) => (
                  <PostCard
                    key={post.id}
                    togglePostModal={() => {
                      setshowPostModal(!showPostModal);
                      setpostIndexToShow(i);
                    }}
                    post={post}
                  />
                ))}
              </div>
              <div className="right">
                <SuggestedCard users={users} />
                <FooterCard />
              </div>
            </main>
          </div>
        )}
        {activeTab === "Birthday Archive" && (
          <div className="archiveDisplay fade">
            <div className="gallery">
              {year.map(item => {
                return (
                  <div
                    style={{backgroundImage: `url(${pish})`}}
                    className="eachPicture"
                  ></div>
                );
              })}
            </div>
          </div>
        )}
        {activeTab === "Wishlist" && (
          <div className="wishDisplay fade">
            <div className="listContainer">
              <div className="eachList">
                <p className="wish">Apple Phone</p>
                <div className="actions">
                  <button className="btn">
                    <img src={pencil} alt="pencil" />
                  </button>
                  <button className="btn">
                    <img src={deleteIcon} alt="delete" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </SocialLayout>
      {showPostModal && (
        <>
          <PostModal
            toggleModal={() => setshowPostModal(!showPostModal)}
            post={posts[postIndexToShow]}
            goNext={() => {
              let index =
                postIndexToShow < posts.length - 1
                  ? postIndexToShow + 1
                  : postIndexToShow;
              setpostIndexToShow(index);
            }}
            goPrev={() => {
              let index =
                postIndexToShow > 0 ? postIndexToShow - 1 : postIndexToShow;
              setpostIndexToShow(index);
              console.log(index);
            }}
            hideCtrl={hideCtrl}
          />
        </>
      )}
      <PostModalMobile
        showPostModal={showPostModal}
        post={posts[postIndexToShow]}
        toggleModal={() => setshowPostModal(!showPostModal)}
      />
      <EditProfile
        showModal={showEditProfile}
        toggleModal={() => setshowEditProfile(!showEditProfile)}
      />
    </>
  );
};

export default Profile;
