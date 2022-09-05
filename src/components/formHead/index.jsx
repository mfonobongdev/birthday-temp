import "./style.scss";
const FormHead = ({ title, subtitle }) => {
  return (
    <div className="formHead">
      <p className="formTitle">{title}</p>
      <p className="formSubTitle">{subtitle}</p>
    </div>
  );
};

export default FormHead;
