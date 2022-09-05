import {useForm} from "react-hook-form";
import EnvelopeIcon from "../../assets/icons/envelope";
import Input from "../../components/inputField";
import "./style.scss";
import SubmitBtn from "../../components/submitBtn/SubmitBtn";
import {useState} from "react";
import AuthLayout from "../../components/layout/layout";
import {Link} from "react-router-dom";
import FormHead from "../../components/formHead";
const SignUp = () => {
  const {register, formState, handleSubmit} = useForm();
  const [isLoadng, setIsLoading] = useState(false);
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const onSubmit = vals => {
    console.log(vals);
  };

  return (
    <AuthLayout pageTitle={"Birthday Mates"}>
      <div className="formContainer">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <FormHead title={"Upload Profile Picture"} />

          <div className="upload">
            <div className="preview"></div>
            <div className="Click">
              <label htmlFor="file">
                <img src="" alt="" />
              </label>
              <input type="file" name="file" id="file" hidden />
            </div>
          </div>

          <SubmitBtn disabled={false} isLoading={isLoadng} btnText="CONTINUE" />

          <div className="push">
            <Link to="/login">Have an account already??</Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
