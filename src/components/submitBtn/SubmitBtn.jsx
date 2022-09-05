import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

const SubmitBtn = ({
  isLoading,
  btnText,
  style,
  disabled,
  extra,
  loginMob,
}) => {
  return (
    <button
      style={style}
      type="submit"
      className={`btn submitBtn ${loginMob ? "trans" : ""} ${
        extra ? "extra" : ""
      }`}
      disabled={disabled || isLoading}
    >
      {isLoading ? <FontAwesomeIcon icon={faSpinner} pulse spin /> : btnText}
    </button>
  );
};

export default SubmitBtn;
