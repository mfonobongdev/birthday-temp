import {faEllipsisH} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import BullIcon from "../../assets/icons/BullIcon";
import classes from "./postcardhead.module.scss";

const PostCardHeader = ({name, date, userDp, time}) => {
  return (
    <header className={classes.cardHeader}>
      <div className={classes.left}>
        <img src={userDp} alt={name + " dp"} className={"avatar"} />
        <div className={classes.info}>
          <div>
            <h3>{name}</h3>
            <p
              style={{marginTop: 4, fontSize: "0.9em"}}
              className={"clr-primary"}
            >
              {date}
            </p>
          </div>
          <BullIcon className="fill-primary" />
          <p>{time}</p>
        </div>
      </div>
      <button className={"noBg"}>
        <FontAwesomeIcon icon={faEllipsisH} />
      </button>
    </header>
  );
};

export default PostCardHeader;
