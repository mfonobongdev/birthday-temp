import "./style.scss";
import guru from "../../assets/images/guru.png";

const MateCard = ({ name, date }) => {
  return (
    <div className="mateCard">
      <img src={guru} alt="guru" />
      <div className="mateText">
        <p className="mateName">{name}</p>
        <p className="mateDate">{date}</p>
      </div>
    </div>
  );
};

export default MateCard;
