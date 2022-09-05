import { useForm } from "react-hook-form";
import EnvelopeIcon from "../../assets/icons/envelope";
import Input from "../../components/inputField";
import "./style.scss";
import SubmitBtn from "../../components/submitBtn/SubmitBtn";
import { useState } from "react";
import AuthLayout from "../../components/layout/layout";
import PasswordIcon from "../../assets/icons/password";
import LoginWith from "../../components/loginWith/LoginWith";
import FacebookIcon from "../../assets/icons/facebook";
import GoogleIcon from "../../assets/icons/google";
import { Link } from "react-router-dom";
import FormHead from "../../components/formHead";
import UserIcon from "../../assets/icons/user";
// import { useNavigate } from "react-router";
import { useSignupMutation } from "../../services/api";
import { showToast } from "../../store/store.hooks";
const SignUp = () => {
  const { register, formState, handleSubmit } = useForm();
  const [toggle, setToggle] = useState(false);
  const [signup, { isLoading }] = useSignupMutation();
  // const navigate = useNavigate();
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const onSubmit = async (values) => {
    console.log(values);
    const payload = {
      ...values,
      isAnOrganization: toggle,
    };

    try {
      // call login trigger from rtk query
      const response = await signup(payload).unwrap();
      console.log(response);
    } catch (err) {
      console.log(err);

      if (err.status === "FETCH_ERROR")
        showToast("Something went wrong", "error");
      else showToast(err.data.message, "error");
    }
  };

  return (
    <AuthLayout pageTitle={"Birthday Mates"}>
      <div className="formContainer">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <FormHead
            title={"Let’s get started"}
            subtitle={"Create your account"}
          />

          <Input
            type="text"
            name="fullName"
            placeholder="Name"
            id="name"
            register={register}
            errors={formState.errors}
            errMsg="invalid email input"
            IconPlaceholder={<UserIcon />}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            register={register}
            errors={formState.errors}
            errMsg="invalid email input"
            IconPlaceholder={<EnvelopeIcon />}
          />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            register={register}
            errors={formState.errors}
            errMsg="invalid password"
            IconPlaceholder={<PasswordIcon />}
          />
          <div className="toggleSide">
            <p>Are you an organisation</p>

            <div className="toggle">
              <label className="switch">
                <input
                  checked={toggle}
                  onClick={handleToggle}
                  type="checkbox"
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>

          <div className="separate">
            <div className="coverLine">
              <div className="line1"></div>
              <p>OR</p>
              <div className="line2"></div>
            </div>
          </div>

          <div className="loginWith">
            <LoginWith image={<FacebookIcon />} />
            <LoginWith image={<GoogleIcon />} />
          </div>

          <SubmitBtn
            disabled={false}
            isLoading={isLoading}
            btnText="CONTINUE"
          />

          <div className="push">
            <Link to="/login">Have an account already??</Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
