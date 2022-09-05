import {Link} from "react-router-dom";
import CardLayout from "../layout/CardLayout";
import "./style.scss";
const FooterCard = () => {
  return (
    <CardLayout>
      <div className="footerCard">
        <div className="links">
          <Link to="/">About</Link>
          <Link to="/help">Help</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/">Terms and conditions</Link>
        </div>
        <div className="copyright">
          <p>Birthday Mates</p>
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </CardLayout>
  );
};

export default FooterCard;
