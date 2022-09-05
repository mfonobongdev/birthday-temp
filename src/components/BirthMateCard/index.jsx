// import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import friends from "../../assets/images/friends.png";
import guru2 from "../../assets/images/guru2.png";
import CardLayout from "../layout/CardLayout";
import { ReactComponent as Cancel } from "../../assets/icons/cancelBtn.svg";
import "./style.scss";
const BirthMateCard = ({ className }) => {
  const [closeModal, setcloseModal] = useState(false);
  return (
    <CardLayout
      style={{
        margin: `${closeModal ? "0" : "0 0 1.2rem 0"}`,
        padding: `0`,
      }}
    >
      <div
        className={`birthMateCard ${className ? className : ""} ${
          closeModal ? "closeModal" : ""
        }`}
      >
        <div className="top">
          <div className="left">
            <img src={friends} alt="friends" className="avatar" />
          </div>
          <div className="right">
            <h4>
              Christine Johnson your birthday month partner is in July
              Celebrants
            </h4>
            <div className="images">
              <img src={guru2} alt="users" />
              <img src={guru2} alt="users" />
              <img src={guru2} alt="users" />
              <p className="clr-primary">
                5+ <span>Others</span>{" "}
              </p>
            </div>
          </div>
          <button
            onClick={() => setcloseModal(!closeModal)}
            className="noBg closeBtn"
          >
            <Cancel />
          </button>
        </div>
        <button className="btn">JOIN GROUP</button>
      </div>
    </CardLayout>
  );
};

export default BirthMateCard;
