import {Link} from "react-router-dom";
import CardLayout from "../layout/CardLayout";
import "./style.scss";

const SuggestedCard = ({users}) => {
  return (
    <CardLayout style={{margin: "0 0 1.2rem 0"}}>
      <div className="suggestedCard">
        <h3>Suggested for you</h3>
        <div className="cardBody">
          {users.map(({name, date, avatar, id}) => (
            <Link to="/" key={id} className="user">
              <img src={avatar} alt={name} className="avatar" />
              <div className="info">
                <h4>{name}</h4>
                <p className="clr-primary">{date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </CardLayout>
  );
};

export default SuggestedCard;
