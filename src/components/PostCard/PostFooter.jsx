import {useForm} from "react-hook-form";
import Celebrate from "../../assets/icons/Celebrate";
import CommentIcon from "../../assets/icons/CommentIcon";
import ShareIcon from "../../assets/icons/ShareIcon";
import Input from "../inputField";
import classes from "./postactions.module.scss";

const PostFooter = ({width = "85%", togglePostModal}) => {
  const {register, formState, handleSubmit} = useForm();

  const onSubmit = vals => {
    console.log(vals);
  };
  return (
    <div className="cardFooter">
      <div style={{width: width}} className={`${classes.actions}`}>
        <button className={`${classes.action} noBg`}>
          <Celebrate opacity={1} />
          <p>Celebrate</p>
        </button>
        {togglePostModal && (
          <button
            onClick={togglePostModal}
            className={`${classes.action} noBg`}
          >
            <CommentIcon />
            <p>Comment</p>
          </button>
        )}
        <button className={`${classes.action} noBg`}>
          <ShareIcon />
          <p>Share</p>
        </button>
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Input
          className="commentInput"
          type="text"
          name="comment"
          id="comment"
          placeholder="Add a comment..."
          register={register}
          errors={formState.errors}
          IconPlaceholder={<CommentIcon />}
        />
      </form>
    </div>
  );
};

export default PostFooter;
