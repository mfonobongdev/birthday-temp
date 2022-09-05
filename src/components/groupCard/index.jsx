import "./style.scss";
import guru2 from "../../assets/images/guru2.png";

const GroupCard = ({ name, member }) => {
  return (
    <div className="groupCard">
      <div className="groupText">
        <p className="groupName">{name}</p>
        <div className="bottom">
          <p className="members">{member} members</p>
          <div className="images">
            <img src={guru2} alt="users" />
            <img src={guru2} alt="users" />
            <img src={guru2} alt="users" />
            <p>5+</p>
          </div>
        </div>
      </div>
      <button className="btn join">Join Group</button>
    </div>
  );
};

export default GroupCard;
