import {createContext, useReducer} from "react";

export const ThemeContext = createContext();

const initialUser = JSON.parse(localStorage.getItem("theme")) || false;

const reducer = (state, action) => {
  switch (action.type) {
    case "changeTheme":
      window.localStorage.setItem("theme", JSON.stringify(action.value));
      return action.value;
    case "clearTheme":
      window.localStorage.removeItem("theme");
      return "";
    default:
      return state;
  }
};

const ThemeProvider = ({children}) => {
  const [isThemeDark, themeDispatch] = useReducer(reducer, initialUser);
  return (
    <ThemeContext.Provider value={{isThemeDark, themeDispatch}}>
      {children && children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
