import {useState} from "react";
import {useForm} from "react-hook-form";
import "./style.scss";
import SubmitBtn from "../../components/submitBtn/SubmitBtn";
import UploadFile from "../ImgUpload/";
import Input from "../inputField";
import userDp from "../../assets/images/userDp.png";
import BackIcon from "../../assets/icons/BackIcon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

const EditProfile = ({toggleModal, showModal}) => {
  const {
    register,
    formState: {errors, isValid, isDirty},
    handleSubmit,
  } = useForm({
    mode: "all",
    shouldUnregister: true,
    reValidateMode: "onChange",
  });
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = vals => {
    console.log(vals);
    setIsLoading(true);
  };
  console.log(isValid, isDirty, errors);
  const imageRef = register("logo", {required: true});

  return (
    <div
      className={`bt-modal edit-modal ${showModal ? "slideUp" : ""}`}
      onClick={e => e.target === e.currentTarget && toggleModal()}
    >
      <div className="bt-modal-content">
        <div className="actions">
          <button onClick={toggleModal} className="noBg">
            <BackIcon />
          </button>
          <button onClick={toggleModal} className="noBg cancel">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="upload-wrap">
              <UploadFile
                text="Upload Your Picture"
                name="imageUrl"
                id="imageUrl"
                errors={errors}
                fileReg={imageRef}
                register={register}
                imgUrl={userDp}
                errMsg="invalid file input"
              />
              <br />
              <p className="clr-primary">Change Profile Image</p>
            </div>
            <Input
              type="text"
              name="userName"
              placeholder="Alechenu Peter"
              id="username"
              label="User name"
              register={register}
              errors={errors}
              errMsg="invalid input"
            />
            <Input
              type="text"
              name="bio"
              placeholder="Just a young boy chasing his dreams and facing  challenges every day"
              id="bio"
              label="Bio"
              register={register}
              errors={errors}
              errMsg="invalid input"
            />
            <Input
              type="text"
              name="location"
              placeholder="Lagos, Nigeria"
              id="location"
              label="Location"
              register={register}
              errors={errors}
              errMsg="invalid input"
            />
          </div>
          <br />
          {/* <br /> */}
          <SubmitBtn disabled={false} isLoading={isLoading} btnText="SUBMIT" />
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
