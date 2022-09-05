import classes from "./cardLayout.module.scss";

const CardLayout = ({children, style = {margin: "1.2rem 0"}}) => {
  return (
    <div style={{...style}} className={classes.card}>
      {children}
    </div>
  );
};

export default CardLayout;
