import "./style.scss";
import NavBar from "../Nav";

const SocialLayout = ({children}) => {
  return (
    <>
      <div className={`socialLayout `}>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="overlay"></div>
        <div className="innerWrap">
          <NavBar />
          <div className="inner">{children}</div>
        </div>
      </div>
    </>
  );
};

export default SocialLayout;
