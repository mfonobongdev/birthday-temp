import "./style.scss";

const AuthLayout = ({ children, pageTitle, extra }) => {
  return (
    <div className={`layout ${extra ? "extra" : ""}`}>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      {pageTitle && <p className="pageTitle">{pageTitle}</p>}
      {children}
    </div>
  );
};

export default AuthLayout;
