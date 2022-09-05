import { useForm } from "react-hook-form";
import Input from "../../components/inputField";
import "./style.scss";
import SubmitBtn from "../../components/submitBtn/SubmitBtn";
import { useState } from "react";
import AuthLayout from "../../components/layout/layout";
import PasswordIcon from "../../assets/icons/password";
import FormHead from "../../components/formHead";
const NewPassword = () => {
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
          <FormHead title={"Reset Password"} subtitle={"Enter new password"} />

          <Input
            type="password"
            name="new_password"
            placeholder="New Password"
            id="password"
            register={register}
            errors={formState.errors}
            errMsg="invalid password"
            IconPlaceholder={<PasswordIcon />}
          />

          <Input
            type="password"
            name="password"
            placeholder="Confirm Password"
            id="new_password"
            register={register}
            errors={formState.errors}
            errMsg="invalid password"
            IconPlaceholder={<PasswordIcon />}
          />

          <SubmitBtn
            extra={"extra"}
            disabled={false}
            isLoading={isLoadng}
            btnText="CONTINUE"
          />
        </form>
      </div>
    </AuthLayout>
  );
};

export default NewPassword;
