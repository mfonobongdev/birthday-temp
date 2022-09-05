import { hideToast, removeToast, toastMessage } from "./slice/ToasterSlice";
import store from "./store";
import { logOut } from "./slice/AuthSlice";
import { generateId } from "../utils/utils";

// export const getToken = () => store.getState().auth.token;

// show toaster function
export const showToast = (text, messageType, duration = 3000) => {
  const id = generateId();
  store.dispatch(
    toastMessage({
      text,
      messageType: messageType || "success",
      id,
    })
  );

  setTimeout(() => {
    closeToast(id);
  }, duration);
};

// close toaster
export const closeToast = (id) => {
  store.dispatch(hideToast(id));

  setTimeout(() => {
    store.dispatch(removeToast(id));
  }, 700);
};

export const logOutHandler = () => {
  store.dispatch(logOut({ redirect: false }));
};
