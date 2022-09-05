/* eslint-disable no-fallthrough */
import SocialLayout from "../../components/SocialLayout";
import "./style.scss";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentSlash} from "@fortawesome/free-solid-svg-icons";
import NoComment from "../../components/NoComment/NoComment";
import ChatBox from "../../components/chatBox/indes";
import FriendBox from "../../components/friendBox";
import MultiTabs from "../../components/MultiTabs";
const Chat = () => {
  const [selected, setSelected] = useState(false);
  const [groupSelected, setGroupSelected] = useState(false);

  const handleSelected = () => {
    setSelected(true);
  };
  const handleGroupSelected = () => {
    setGroupSelected(true);
  };

  const msgList = [1, 2, 3];
  const friends = [1, 2, 3];
  const [activeTab, setActiveTab] = useState("People (12)");
  const handleActive = type => {
    console.log(type);
    setActiveTab(type);
  };
  return (
    <SocialLayout>
      <div className="chatDiv">
        <MultiTabs
          activeTabArr={["People (12)", "Group (4)"]}
          handleActive={handleActive}
          activeTab={activeTab}
        />

        <div className="contain">
          {activeTab.includes("People") && (
            <div className="people">
              <div className="left">
                {friends.length ? (
                  friends.map(item => {
                    return (
                      <FriendBox
                        name={"Guy Howkins"}
                        lastMsg={"Good afternoon. I’m so excited I c"}
                        amount={"3"}
                        extra={true}
                        time={"2:13pm"}
                        handleSelected={handleSelected}
                      />
                    );
                  })
                ) : (
                  <NoComment msg="No Friends...">
                    <FontAwesomeIcon icon={faCommentSlash} />
                  </NoComment>
                )}
              </div>
              <div className={`right ${selected ? "trans" : ""}`}>
                {selected ? (
                  <ChatBox setSelected={setSelected} msgList={msgList} />
                ) : (
                  <NoComment msg="No Chat Selected...">
                    <FontAwesomeIcon icon={faCommentSlash} />
                  </NoComment>
                )}
              </div>
            </div>
          )}

          {activeTab.includes("Group") && (
            <div className="people group">
              <div className="left">
                {friends.length ? (
                  friends.map(item => {
                    return (
                      <FriendBox
                        name={"Guy Howkins"}
                        lastMsg={"Good afternoon. I’m so excited I c"}
                        amount={"99+"}
                        extra={true}
                        time={"2:13pm"}
                        handleSelected={handleGroupSelected}
                      />
                    );
                  })
                ) : (
                  <NoComment msg="No Friends...">
                    <FontAwesomeIcon icon={faCommentSlash} />
                  </NoComment>
                )}
              </div>
              <div className={`right ${groupSelected ? "trans" : ""}`}>
                {groupSelected ? (
                  <ChatBox setSelected={setGroupSelected} msgList={msgList} />
                ) : (
                  <NoComment msg="No Chat Selected...">
                    <FontAwesomeIcon icon={faCommentSlash} />
                  </NoComment>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </SocialLayout>
  );
};

export default Chat;
