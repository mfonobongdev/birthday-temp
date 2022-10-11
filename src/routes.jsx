import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/index";
import ScrollToTop from "./components/ScrollToTop/index";
import ResetPassword from "./pages/resetPassword";
import NewPassword from "./pages/newPassword";
import SignUp from "./pages/signup/signup";
import MoreInfo from "./pages/signup/info";
import UploadDP from "./pages/UploadProfileImg";
import HomePage from "./pages/HomePage/homepage";
import Otp from "./pages/otp/Otp";
import Profile from "./pages/Profile/profile";
import Explore from "./pages/explore/explore";
import Chat from "./pages/chat/chat";
import Home from "./pages/Website/Home";
import Help from "./pages/Website/Help/help";
import Privacy from "./pages/Website/privacy/privacy";
import BirthdayPicker from "./pages/BirthdayPicker";
import Friends from "./pages/Friends";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider";

function AllRoutes() {
  const { isThemeDark } = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <div className={`App ${isThemeDark ? "dark-mode" : ""}`}>
        <ScrollToTop />
        <Routes>
          {/*<Route path="/" element={<HomePage />} />*/}
          <Route path="/" element={<SignUp />} />

          <Route path="/upload" element={<UploadDP />} />
          <Route path="login" element={<Login />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="new-password" element={<NewPassword />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signup/info" element={<MoreInfo />} />
          <Route path="signup/upload" element={<UploadDP />} />
          <Route path="signup/birthday" element={<BirthdayPicker />} />
          <Route path="otp" element={<Otp />} />

          {/*<Route path="profile" element={<Profile />} />*/}

          {/*<Route path="explore" element={<Explore />} />*/}

          {/*<Route path="chat" element={<Chat />} />*/}
          <Route path="home" element={<Home />} />
          <Route path="help" element={<Help />} />
          <Route path="privacy" element={<Privacy />} />
          {/*<Route path="friends" element={<Friends />} />*/}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AllRoutes;
