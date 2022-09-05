import Celebrate from "../../assets/icons/Celebrate";
import classes from "./styles.module.scss";
import CardLayout from "../layout/CardLayout";
import PostCardHeader from "./PostCardHeader";
import ImgSlider from "../ImgSider";
import PostFooter from "./PostFooter";
import {useState} from "react";

const PostCard = ({
  post: {name, date, time, postText, images, numOfComments, userDp, id},
  togglePostModal,
  style = {margin: "1.2rem 0"},
}) => {
  const [shouldWordBreak, setshouldWordBreak] = useState(true);
  const splitStr = str => {
    if (shouldWordBreak && str.length > 120)
      return str.substring(0, 120) + "...";
    else return str;
  };
  return (
    <CardLayout style={style}>
      <div className={classes.postCard}>
        <PostCardHeader name={name} time={time} userDp={userDp} date={date} />

        <div className={classes.body}>
          <p style={{lineHeight: "18px"}} className={classes.msg}>
            {splitStr(postText)}
            <button
              onClick={() => setshouldWordBreak(!shouldWordBreak)}
              className={"noBg"}
            >
              <b>{shouldWordBreak ? "See More" : "See Less"}</b>
            </button>
          </p>
          <ImgSlider togglePostModal={togglePostModal} images={images} />
          <div className={classes.feedbacks}>
            <div className={classes.likes}>
              <Celebrate opacity={0.6} />
              <p> Johnson and 68 others</p>
            </div>
            <p>{numOfComments} comments</p>
          </div>
        </div>
        <PostFooter togglePostModal={togglePostModal} postId={id} />
      </div>
    </CardLayout>
  );
};

export default PostCard;
