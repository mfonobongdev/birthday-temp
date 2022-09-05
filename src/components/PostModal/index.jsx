import PostCardHeader from "../PostCard/PostCardHeader";
import "./style.scss";
import ImgSlider from "../ImgSider";
import Comment from "./Comment";
import PostFooter from "../PostCard/PostFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const PostModal = ({
  post: {
    name,
    time,
    date,
    userDp,
    images,
    postText,
    numOfComments,
    comments,
    id,
  },
  toggleModal,
  goNext,
  goPrev,
  hideCtrl,
}) => {
  return (
    <div
      onClick={(e) => e.target === e.currentTarget && toggleModal()}
      className={`bt-modal`}
    >
      <div className="bt-modal-content">
        <button
          onClick={toggleModal}
          className="btn round-btn ctrl ctrl-cancel"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        {hideCtrl !== "prev" && (
          <button
            onClick={goPrev}
            className="btn round-btn bg-whiteClr ctrl ctrl-left"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}
        {hideCtrl !== "next" && (
          <button
            onClick={goNext}
            className="btn round-btn bg-whiteClr ctrl ctrl-right"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
        <div className="left">
          <ImgSlider images={images} />
        </div>
        <div className="right">
          <div>
            <PostCardHeader
              name={name}
              time={time}
              userDp={userDp}
              date={date}
            />
            <p style={{ lineHeight: "18px" }}>{postText}</p>
            <h4>Comments ({numOfComments})</h4>
          </div>
          <div className="comments">
            {comments.map((el) => (
              <Comment
                key={el.id}
                name={el.name}
                time={el.time}
                post={el.post}
                avatar={el.avatar}
                isFirstLevelComment={true}
              >
                {el.childComments.map((child) => (
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
          <PostFooter width="100%" postId={id} />
        </div>
      </div>
    </div>
  );
};

export default PostModal;
