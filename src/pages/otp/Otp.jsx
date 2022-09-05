import "./styles.scss";
import SubmitBtn from "../../components/submitBtn/SubmitBtn";
import {useState} from "react";
import AuthLayout from "../../components/layout/layout";
import FormHead from "../../components/formHead";
import OtpInput from "react-otp-input";

const Otp = () => {
  const [otpVal, setOtpVal] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = vals => {
    console.log(vals);
    setIsLoading(false);
  };

  return (
    <AuthLayout pageTitle={"Birthday Mates"}>
      <div className="formContainer">
        <form action="" onSubmit={onSubmit}>
          <FormHead
            title={"Reset Password"}
            subtitle={"A code would be sent to your email address"}
          />

          <OtpInput
            className="otp-wrap"
            value={otpVal}
            onChange={val => setOtpVal(val)}
            name="otp"
          />
          <SubmitBtn
            extra={"extra"}
            disabled={false}
            isLoading={isLoading}
            btnText="CONTINUE"
          />
        </form>
      </div>
    </AuthLayout>
  );
};

export default Otp;
