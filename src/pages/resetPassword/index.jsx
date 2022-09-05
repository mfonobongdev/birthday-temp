import {useForm} from "react-hook-form";
import EnvelopeIcon from "../../assets/icons/envelope";
import Input from "../../components/inputField";
import "./style.scss";
import SubmitBtn from "../../components/submitBtn/SubmitBtn";
import {useState} from "react";
import AuthLayout from "../../components/layout/layout";
import {Link} from "react-router-dom";
import FormHead from "../../components/formHead";

const ResetPassword = () => {
  const {register, formState, handleSubmit} = useForm();
  const [isLoadng, setIsLoading] = useState(false);

  const onSubmit = vals => {
    console.log(vals);
    setIsLoading(false);
  };

  return (
    <AuthLayout pageTitle={"Birthday Mates"}>
      <div className="formContainer">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <FormHead
            title={"Reset Password"}
            subtitle={"A code would be sent to your email address"}
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

          <SubmitBtn
            extra={"extra"}
            disabled={false}
            isLoading={isLoadng}
            btnText="CONTINUE"
          />

          <div className="push">
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
