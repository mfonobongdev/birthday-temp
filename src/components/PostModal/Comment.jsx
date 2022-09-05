import moment from "moment";
import {useState} from "react";
import {useForm} from "react-hook-form";
import BullIcon from "../../assets/icons/BullIcon";
import CommentIcon from "../../assets/icons/CommentIcon";
import Input from "../inputField";

const Comment = ({avatar, post, isFirstLevelComment, name, time, children}) => {
  const {register, formState, handleSubmit} = useForm();

  const onSubmit = vals => {
    console.log(vals);
  };
  const [showCommentBox, setshowCommentBox] = useState(false);
  return (
    <div className="comment">
      <img className="avatar" src={avatar} alt={name} />
      <div className="post-text">
        <p style={{display: "flex", alignItems: "center"}}>
          {name}
          <BullIcon className="fill-inputBg" />
          <span
            style={{fontSize: "0.9em", opacity: "0.6"}}
            className="clr-blackClr"
          >
            {moment(time).fromNow()}
          </span>
        </p>
        <p className="postComment">{post}</p>
        {isFirstLevelComment && (
          <>
            <div className="actions">
              <button
                onClick={() => setshowCommentBox(!showCommentBox)}
                className="noBg"
              >
                Reply
              </button>
              <button className="noBg">Like</button>
            </div>
            {showCommentBox && (
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
            )}
          </>
        )}
        {children}
      </div>
    </div>
  );
};

export default Comment;
