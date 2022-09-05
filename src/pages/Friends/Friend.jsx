import {useState} from "react";
import {Link} from "react-router-dom";

const Friend = ({user: {name, date, avatar}}) => {
  const [isFollowing, setisFollowing] = useState(true);

  return (
    <div className="user">
      <img src={avatar} alt={name} className="avatar" />
      <div className="right">
        <Link to="/" className="info">
          <h4>{name}</h4>
          <p className="clr-primary">{date}</p>
        </Link>
        <button
          onClick={() => setisFollowing(!isFollowing)}
          className={`follow-btn ${isFollowing ? "" : "active"}`}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default Friend;
