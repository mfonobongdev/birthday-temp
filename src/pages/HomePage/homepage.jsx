import PostCard from "../../components/PostCard";
import SocialLayout from "../../components/SocialLayout";
import SuggestedCard from "../../components/SuggestedCard/SuggestedCard";
import "./style.scss";
import FooterCard from "../../components/FooterCard";
import PostModal from "../../components/PostModal";
import {useEffect, useState} from "react";
import PostModalMobile from "../../components/PostModal/PostModalMobile";
import {users, posts} from "../data";
import BirthMateCard from "../../components/BirthMateCard";

const HomePage = () => {
  const [showPostModal, setshowPostModal] = useState(false);
  const [postIndexToShow, setpostIndexToShow] = useState(0);
  const [hideCtrl, sethideCtrl] = useState("prev");
  useEffect(() => {
    if (postIndexToShow === 0) sethideCtrl("prev");
    else if (postIndexToShow === posts.length - 1) sethideCtrl("next");
    else sethideCtrl("");
  }, [postIndexToShow]);
  return (
    <>
      <SocialLayout>
        <main className="homepage allPosts">
          <div className="left">
            {posts.map((post, i) => (
              <div key={post.id}>
                {i === 3 && <BirthMateCard className="mobile_birthmate" />}
                <PostCard
                  togglePostModal={() => {
                    setshowPostModal(!showPostModal);
                    setpostIndexToShow(i);
                  }}
                  post={post}
                />
              </div>
            ))}
          </div>
          <div className="right">
            <BirthMateCard />
            <SuggestedCard users={users} />
            <FooterCard />
          </div>
        </main>
      </SocialLayout>
      {showPostModal && (
        <>
          <PostModal
            toggleModal={() => setshowPostModal(!showPostModal)}
            post={posts[postIndexToShow]}
            goNext={() => {
              let index =
                postIndexToShow < posts.length - 1
                  ? postIndexToShow + 1
                  : postIndexToShow;
              setpostIndexToShow(index);
            }}
            goPrev={() => {
              let index =
                postIndexToShow > 0 ? postIndexToShow - 1 : postIndexToShow;
              setpostIndexToShow(index);
              console.log(index);
            }}
            hideCtrl={hideCtrl}
          />
        </>
      )}
      <PostModalMobile
        showPostModal={showPostModal}
        post={posts[postIndexToShow]}
        toggleModal={() => setshowPostModal(!showPostModal)}
      />
    </>
  );
};

export default HomePage;
