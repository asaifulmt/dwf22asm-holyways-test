import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
  isLogin: localStorage.getItem('token') ? true : false
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
