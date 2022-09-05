import {useForm} from "react-hook-form";
import "./style.scss";
import SubmitBtn from "../../components/submitBtn/SubmitBtn";
import {useState} from "react";
import AuthLayout from "../../components/layout/layout";
import {Link} from "react-router-dom";
import UploadFile from "../../components/ImgUpload/";
const UploadDP = () => {
  const {
    register,
    formState: {errors, isValid, isDirty},
    handleSubmit,
  } = useForm({
    mode: "all",
    shouldUnregister: true,
    reValidateMode: "onChange",
  });
  const [isLoadng, setIsLoading] = useState(false);

  const onSubmit = vals => {
    console.log(vals);
    setIsLoading(true);
  };
  console.log(isValid, isDirty, errors);
  const imageUrl = register("logo", {required: true});

  return (
    <AuthLayout pageTitle={"Birthday Mates"}>
      <div className="formContainer uploadDp">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="clr-primary">Upload Profile Picture</h2>
          <UploadFile
            text="Upload Your Picture"
            name="imageUrl"
            id="imageUrl"
            errors={errors}
            fileReg={imageUrl}
            register={register}
            //   imgUrl={product && product.imageUrl}
            errMsg="invalid file input"
          />

          <div>
            <SubmitBtn
              disabled={false}
              isLoading={isLoadng}
              btnText="CONTINUE"
            />

            <div className="push">
              <Link to="/signup">Have an account already?</Link>
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default UploadDP;
