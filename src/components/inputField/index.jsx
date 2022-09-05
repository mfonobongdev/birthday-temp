import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import InputErrorMsg from "./InputErrorMsg";
import "./style.scss";

const trapSpacesForRequiredFields = (value, notRequired) => {
  if (notRequired !== true) {
    return !!value.trim();
  }
};

const Input = ({
  type,
  id,
  name,
  placeholder,
  errors,
  register,
  isDisabled,
  errMsg,
  IconPlaceholder,
  className,
  notRequired,
  isTel,
  label,
  extraClass,
  inputExtraClass,
  codeOptions,
  handleCode,
}) => {
  const [isTypePassword, setisTypePassword] = useState(true);

  return (
    <div className={`form-group  ${extraClass} ${className}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <div
        className={`input-icon-wrap ${
          IconPlaceholder ? "icon-placeholder" : ""
        } ${errors[name] ? "is-invalid" : ""}`}
      >
        {isTel ? (
          <select
            className="extraSelect"
            onChange={e => {
              handleCode(e.target.value);
            }}
            name=""
            id=""
          >
            {codeOptions.map(item => {
              return (
                <option key={item.code} value={item.dial_code}>
                  {item.dial_code}
                </option>
              );
            })}
          </select>
        ) : (
          IconPlaceholder && (
            <button disabled className="icon icon-left">
              {IconPlaceholder}
            </button>
          )
        )}
        {type === "password" ? (
          <>
            <input
              autoComplete="off"
              name={name}
              disabled={isDisabled}
              type={isTypePassword ? "password" : "text"}
              id={id}
              {...register(name, {
                required: notRequired ? false : true,
              })}
              placeholder={placeholder}
            />
            <button
              disabled={isDisabled}
              onClick={() => setisTypePassword(prev => !prev)}
              type="button"
              className="icon"
            >
              {isTypePassword === true ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </button>
          </>
        ) : (
          <>
            <input
              autoComplete="off"
              disabled={isDisabled}
              type={type}
              id={id}
              className={inputExtraClass}
              {...register(name, {
                required: notRequired ? false : true,
                validate: value =>
                  trapSpacesForRequiredFields(value, notRequired),
              })}
              name={name}
              placeholder={placeholder}
            />
          </>
        )}
      </div>

      {errMsg && errors[name] && <InputErrorMsg errMsg={errMsg} />}
    </div>
  );
};

export default Input;
