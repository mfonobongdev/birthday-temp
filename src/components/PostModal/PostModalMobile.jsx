import PostCard from "../PostCard";
import "./style.scss";
import Comment from "./Comment";
import BackIcon from "../../assets/icons/BackIcon";

const PostModalMobile = ({post, toggleModal, showPostModal}) => {
  return (
    <div className={`postModal--mobile ${showPostModal ? "slideUp" : ""} `}>
      <button onClick={toggleModal} className="btn round-btn noBg ctrl-cancel">
        <BackIcon />
      </button>
      <PostCard style={{margin: "0"}} post={post} />
      <div className="comments">
        <h4>Comments ({post.numOfComments})</h4>
        {post.comments.map(el => (
          <Comment
            key={el.id}
            name={el.name}
            time={el.time}
            post={el.post}
            avatar={el.avatar}
            isFirstLevelComment={true}
          >
            {el.childComments.map(child => (
              <Comment
                key={child.id}
                avatar={el.avatar}
                name={child.name}
                time={child.time}
                post={child.post}
              />
            ))}
          </Comment>
        ))}
      </div>
    </div>
  );
};

export default PostModalMobile;
