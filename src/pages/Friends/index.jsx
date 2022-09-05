import Friend from "./Friend";
import {users} from "../data";
import "./style.scss";
import SocialLayout from "../../components/SocialLayout";

const Friends = () => {
  return (
    <SocialLayout>
      <div className="friends">
        <div className="inner">
          <h2>Friends</h2>
          <p>Your friends are those you follow</p>
          <div className="friends-wrap">
            {users.map(user => (
              <Friend key={user.id} user={user} />
            ))}
          </div>
        </div>
      </div>
    </SocialLayout>
  );
};

export default Friends;
