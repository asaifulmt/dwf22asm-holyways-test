import { createContext, useReducer } from "react";
import { setAuthToken } from "../config/api";

export const UserContext = createContext();

const token = localStorage.getItem('token')

const initialState = {
  isLogin: token ? true : false
}

if (token) {
  setAuthToken(token)
}

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      if (payload) localStorage.setItem('token', payload.token)
      return {
        ...state,
        isLogin: true,
      };
    case "LOGOUT":
      localStorage.removeItem('token')
      return {
        ...state,
        isLogin: false
      };
    default:
      throw new Error();
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
