import group from "../../assets/images/group.png";
import "./style.scss";
const FriendBox = ({ handleSelected, name, lastMsg, amount, extra, time }) => {
  return (
    <div onClick={handleSelected} className={`messageBox`}>
      <img src={group} alt="user" />
      <div className="textSide">
        <div className="top">
          <p className="name">{name}</p>
          <p className={`amount ${extra ? "amountExtra" : ""}`}>{amount}</p>
        </div>
        <div className="bottom">
          <p className="lastMsg">{lastMsg}...</p>
          <p className="time">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default FriendBox;
