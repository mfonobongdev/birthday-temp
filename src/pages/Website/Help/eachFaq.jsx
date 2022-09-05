import "./style.scss";
import faq from "../../../assets/icons/faq.svg";
import {useState} from "react";
const EachFaq = ({question, answer}) => {
  const [active, setActive] = useState(false);
  return (
    <div className={`contentBx ${active ? "active" : ""}`}>
      <div
        onClick={() => {
          setActive(!active);
        }}
        className="label"
      >
        <p>{question}?</p>
        <img src={faq} alt="arrow" className="faqArr" />
      </div>
      <div className="content">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default EachFaq;
