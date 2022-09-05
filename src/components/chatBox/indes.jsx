import guru from "../../assets/images/guru.png";
import Input from "../../components/inputField";
import { useForm } from "react-hook-form";
import SendIcon from "../../assets/icons/SendIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentSlash, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import NoComment from "../../components/NoComment/NoComment";
import groupImg from "../../assets/images/groupImg.png";
import mem from "../../assets/images/mem.png";
import eachMedia from "../../assets/images/eachMedia.png";
import "./style.scss";
import { useState } from "react";
import BackIcon from "../../assets/icons/BackIcon";

const ChatBox = ({ setSelected, msgList }) => {
  const [about, setAbout] = useState(false);
  const [active, setActive] = useState("member");
  const handleActive = (type) => {
    setActive(type);
  };
  const { register, formState, handleSubmit, reset } = useForm({
    reValidateMode: "onChange",
    mode: "onSubmit",
    shouldUnregister: true,
  });
  const onSubmit = (values) => {
    reset({ message: "" });
  };
  return (
    <div className="coverRight">
      <div className="aboutChat">
        <div className="images">
          <button
            onClick={() => {
              setSelected(false);
            }}
            className="noBg"
          >
            <BackIcon />
          </button>

          <img src={guru} alt="user" />
        </div>
        <div className="textSide">
          <div className="nameSide">
            <p className="name">Jeffery Justin</p>
            <p className="last">Last seen 2min ago</p>
          </div>
          <FontAwesomeIcon
            onClick={() => {
              setAbout(true);
            }}
            icon={faEllipsisV}
          />
        </div>
      </div>
      <div className="chatBoxMessages">
        {msgList.length ? (
          msgList.map((item) => {
            return (
              <div className={`message ${item === 2 ? "mess-right" : ""}`}>
                <p>ayoo</p>
                <span>12:00</span>
              </div>
            );
          })
        ) : (
          <NoComment msg="No Mesage yet...">
            <FontAwesomeIcon icon={faCommentSlash} />
          </NoComment>
        )}
      </div>
      <div className="sendDiv">
        <div className="inputBox">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              name="message"
              placeholder="Type a Message..."
              id="message"
              register={register}
              errors={formState.errors}
            />

            <button className="btn round-btn bg-primary">
              <SendIcon fill="white" />
            </button>
          </form>
        </div>
      </div>

      <div className={`aboutGroup ${about ? "translate" : ""}`}>
        <div className="cover">
          <button
            onClick={() => {
              setAbout(false);
            }}
            className="noBg"
          >
            <BackIcon />
          </button>

          <div className="imageBox">
            <img src={groupImg} alt="group" />
          </div>
          <div className="info">
            <p className="date">28th July Mates</p>
            <p className="member">128 Members</p>
          </div>

          <div className="desc">
            <p className="topic">Description</p>
            <p className="groupDesc">
              A group for all February birthday mates to relate cheerfully with
              one another and celebrate together. Feel free to speak up and
              relate!!
            </p>
          </div>

          <div className="mute">
            <p>Mute messages</p>
            <div className="toggleBox"></div>
          </div>

          <div className="filterImg">
            <button
              onClick={() => {
                handleActive("member");
              }}
              className={`btn member ${active === "member" ? "active" : ""}`}
            >
              Members
            </button>
            <button
              onClick={() => {
                handleActive("media");
              }}
              className={`btn member ${active === "media" ? "active" : ""}`}
            >
              Media
            </button>
          </div>
          {active === "member" ? (
            <div className={"memberList"}>
              <div className="eachMember">
                <img src={mem} alt="memberList" className="memberImg" />
                <p>Devon Lane</p>
              </div>
              <div className="eachMember">
                <img src={mem} alt="memberList" className="memberImg" />
                <p>Devon Lane</p>
              </div>
            </div>
          ) : null}
          {active === "media" ? (
            <div className={"media"}>
              <img src={eachMedia} alt="eachPicture" />
              <img src={eachMedia} alt="eachPicture" />
              <img src={eachMedia} alt="eachPicture" />
              <img src={eachMedia} alt="eachPicture" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
