import AuthLayout from "../../../components/layout/layout";
import see from "../../../assets/icons/see.svg";
import "./style.scss";
import Nav2 from "../../../components/Nav/Nav2";
import EachFaq from "./eachFaq";
import Input from "../../../components/inputField";
import {useForm} from "react-hook-form";
import {useState} from "react";
import SubmitBtn from "../../../components/submitBtn/SubmitBtn";
// import {Link} from "react-router-dom";
import Footer from "../../../components/footer";

const Help = () => {
  const list = [1, 2, 3, 4, 5];
  const {register, formState, handleSubmit} = useForm();
  const [isLoadng, setIsLoading] = useState(false);
  const onSubmit = vals => {
    console.log(vals);
    setIsLoading(false);
  };

  return (
    <div className="privacy-pg">
      <AuthLayout extra={true}>
        <section className="topSection">
          <Nav2 />
          <div className="text">
            <h4>HELP DESK</h4>
            <p>
              If your complaint isn’t part of the FAQ, send us a message and we
              would get back to you as soon as possible.
            </p>
          </div>
        </section>
      </AuthLayout>
      <div className="faqSide">
        <h4 className="faqTitle">FAQ</h4>

        <div className="accordion">
          {list.map(item => {
            return (
              <EachFaq
                key={item}
                question={"Can I make a post on my desktop"}
                answer={
                  "No, you can’t make a post on a desktop or laptop. Posts can only be made from your mobile phone "
                }
              />
            );
          })}
        </div>

        <div className="seeMore">
          <p>See More</p>
          <img src={see} alt="see" />
        </div>

        <div className="helpForm">
          <h4 className="faqTitle">SEND US A MESSAGE</h4>
          <div className="faqForm">
            <form onClick={handleSubmit(onSubmit)} action="">
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                placeholder="Message here..."
              ></textarea>
              <Input
                type="email"
                name="email"
                placeholder="Your email address"
                id="email"
                register={register}
                errors={formState.errors}
                errMsg="invalid email input"
              />
              <SubmitBtn
                disabled={false}
                isLoading={isLoadng}
                btnText="CONTINUE"
              />
            </form>
          </div>
        </div>
        <p className="get">We would get back to you as soon as possible</p>
        <Footer />
      </div>
    </div>
  );
};

export default Help;
