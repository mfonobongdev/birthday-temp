/* eslint-disable no-fallthrough */
import SocialLayout from "../../components/SocialLayout";
import "./style.scss";
import { useState } from "react";
import down2 from "../../assets/icons/down2.svg";
import icon from "../../assets/images/icon.jpg";
import MateCard from "../../components/mateCard";
import GroupCard from "../../components/groupCard";
import einst from "../../assets/images/einst.png";
import einst2 from "../../assets/images/eints2.png";
import Timeline from "../../components/Timeline";
import MultiTabs from "../../components/MultiTabs";
import MasonryGrid from "../../components/MasonryGrid";
import post1 from "../../assets/images/post1.png";
import post2 from "../../assets/images/post2.png";
import post3 from "../../assets/images/post3.png";
import post4 from "../../assets/images/post4.png";
import post5 from "../../assets/images/post5.png";
const achievements = [
  {
    year: 1921,
    achievement: "World Nobel Prize Winner in Physics",
  },
  {
    year: "1925",
    achievement: "Copley Medal",
  },
  {
    year: "1929",
    achievement: "Max Planck Medal",
  },
  {
    year: "1935",
    achievement: "Franklin Medal",
  },
];

const Explore = () => {
  const [dnone, setDnone] = useState(true);
  const [filter, setFilter] = useState("Location");
  const [aboutIcon, setAboutIcon] = useState(false);

  const [activeTab, setActiveTab] = useState("Connect");
  const handleActive = (type) => {
    console.log(type);
    setActiveTab(type);
  };

  const year = [
    "Location",
    "Month mates",
    "Birthday mates",
    "Location",
    "Month mates",
    "Birthday mates",
  ];
  const images = [
    post1,
    post2,
    post3,
    post4,
    post5,
    post1,
    post2,
    post3,
    post4,
    post5,
  ];
  return (
    <SocialLayout>
      <div className="exploreDiv">
        <MultiTabs
          activeTabArr={["Connect", "Post"]}
          handleActive={handleActive}
          activeTab={activeTab}
        />

        <div className="contain">
          {/* show different tabs */}
          {activeTab === "Connect" && (
            <>
              {!aboutIcon && (
                <>
                  <div className="birthIcons">
                    <p className="title">Birthday Icons</p>
                    <div className="iconDiv">
                      {year.map((item) => {
                        return (
                          <div
                            onClick={() => {
                              setAboutIcon(true);
                            }}
                            className="eachIcon"
                          >
                            <img src={icon} alt="iconic" className="iconImag" />
                            <p className="iconName">Albert Einstein</p>
                            <p className="iconDate">12/08/1943</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mateGroup">
                    <div className="mate">
                      <div className="topPart">
                        <p className="title">Birthday Mates</p>
                        <div className="filterDiv">
                          <div
                            onClick={() => {
                              setDnone(!dnone);
                            }}
                            className="arrow"
                          >
                            <p>By: {filter}</p>
                            <img src={down2} alt="down svg" />
                          </div>

                          <div className={`dropFilt ${dnone ? "" : "show"}`}>
                            <ul>
                              {year.map((item) => {
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
                        </div>
                      </div>
                      <div className="mateDiv">
                        <MateCard name={"Guy Hawkins"} date={"28/07/1996"} />
                        <MateCard name={"Guy Hawkins"} date={"28/07/1996"} />
                        <MateCard name={"Guy Hawkins"} date={"28/07/1996"} />
                        <MateCard
                          name={"Guy Hawkins"}
                          date={"28/07/1996"}
                        />{" "}
                        <MateCard name={"Guy Hawkins"} date={"28/07/1996"} />
                        <MateCard
                          name={"Guy Hawkins"}
                          date={"28/07/1996"}
                        />{" "}
                        <MateCard name={"Guy Hawkins"} date={"28/07/1996"} />
                        <MateCard
                          name={"Guy Hawkins"}
                          date={"28/07/1996"}
                        />{" "}
                        <MateCard name={"Guy Hawkins"} date={"28/07/1996"} />
                        <MateCard name={"Guy Hawkins"} date={"28/07/1996"} />
                      </div>
                    </div>
                    <div className="group">
                      <div className="topPart">
                        <p className="title">Groups</p>
                      </div>
                      <div className="groupDiv">
                        <GroupCard name={"Leo Rules"} member={"23,000"} />
                        <GroupCard name={"Leo Rules"} member={"23,000"} />
                        <GroupCard name={"Leo Rules"} member={"23,000"} />
                      </div>
                    </div>
                  </div>
                </>
              )}
              {aboutIcon && (
                <div className="aboutIcon">
                  <div className="shareDiv">
                    <p className="shareDet">
                      You share the same birthday as Albert Einstein
                    </p>
                    <img src={einst} alt="" className="shareImage" />
                    <p className="shareName">Albert Einstein</p>
                    <p className="shareDate">12/08/1943</p>
                    <p className="shareRange">1923-1965</p>
                  </div>
                  <div className="history">
                    <p className="hist">History</p>
                    <p className="historyDetails">
                      Albert Einstein was a German-born theoretical physicist,
                      widely acknowledged to be one of the greatest physicists
                      of all time. Einstein is known for developing the theory
                      of relativity, but he also made important contributions to
                      the development of the theory of quantum mechanics. Albert
                      Einstein was a German-born theoretical physicist, widely
                      acknowledged to be one of the greatest physicists of all
                      time. Einstein is known for developing the theory of
                      relativity, but he also made important contributions to
                      the development of the theory.
                    </p>
                    <p className="img">Images</p>
                    <div className="imageBox">
                      <img src={einst2} alt="person" />
                      <img src={einst2} alt="person" />
                      <img src={einst2} alt="person" />
                      <img src={einst2} alt="person" />
                      <img src={einst2} alt="person" />
                    </div>
                    <p className="achieve">Achievements</p>
                    <div className="timeline-wrap">
                      {achievements.map((el) => (
                        <Timeline
                          key={el.year}
                          year={el.year}
                          achievement={el.achievement}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
          {activeTab === "Post" && (
            <div>
              <MasonryGrid images={images} />
            </div>
          )}
        </div>
      </div>
    </SocialLayout>
  );
};

export default Explore;
