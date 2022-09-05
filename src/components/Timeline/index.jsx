import BullIcon from "../../assets/icons/BullIcon";
import "./style.scss";
const Timeline = ({year, achievement}) => {
  return (
    <div className="timeline">
      <div className="year">
        <p className="clr-primary">{year}</p>
        <BullIcon className="fill-primary" />
      </div>
      <p>{achievement}</p>
    </div>
  );
};

export default Timeline;
