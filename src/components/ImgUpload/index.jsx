import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCamera} from "@fortawesome/free-solid-svg-icons";
import classes from "./styles.module.scss";

const UploadFile = ({id, errors, name, fileReg, imgUrl}) => {
  const [isSelected, setisSelected] = useState(false);
  const [picSrc, setPicSrc] = useState("");

  const FileChangeHandler = e => {
    if (e.target.files && e.target.files[0]) {
      setPicSrc(URL.createObjectURL(e.target.files[0]));
      setisSelected(true);
    } else setisSelected(false);
  };

  return (
    <div className={classes.uploadFile}>
      <input
        type="file"
        onClick={() => setisSelected(false)}
        onChange={e => {
          FileChangeHandler(e);
          fileReg.onChange(e);
        }}
        name={name}
        id={id}
        hidden
        ref={fileReg.ref}
        accept="image/png, image/gif, image/jpeg"
      />
      <label
        className={`${errors[name] && "is-invalid"} ${
          isSelected && "pic-selected"
        }`}
        htmlFor={id}
      >
        {isSelected === false && imgUrl && (
          <img
            className={classes.imgSlt}
            src={imgUrl}
            alt="profile pic selected"
          />
        )}
        {isSelected && (
          <>
            <img
              className={classes.imgSlt}
              src={picSrc}
              alt="profile pic selected"
            />
          </>
        )}
        <p className={`${classes.editIcon} round-btn btn bg-grey`}>
          <FontAwesomeIcon icon={faCamera} />
        </p>
      </label>
      {errors[name] && <div className="input-err-msg">Invalid input</div>}
    </div>
  );
};
export default UploadFile;
