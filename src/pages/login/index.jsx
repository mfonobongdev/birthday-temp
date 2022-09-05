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
const Login = () => {
  const { register, formState, handleSubmit } = useForm();
  const [isLoadng, setIsLoading] = useState(false);

  const onSubmit = (vals) => {
    console.log(vals);
    setIsLoading(false);
  };

  return (
    <AuthLayout pageTitle={"Birthday Mates"}>
      <div className="formContainer">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <FormHead
            title={"Welcome Back,"}
            subtitle={"Log in to your account"}
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

          <SubmitBtn disabled={false} isLoading={isLoadng} btnText="LOG IN" />
          <Link style={{ width: "100%" }} to="/signup">
            {" "}
            <SubmitBtn
              disabled={false}
              loginMob={true}
              isLoading={isLoadng}
              btnText="Don’t have an account?"
            />
          </Link>

          <div className="push">
            <Link to="/reset-password">Reset password?</Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
