import React, { useState } from "react";

const AuthContext = React.createContext({
  

  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
 
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

 

 

  const cartcontextVal = {
   

    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={cartcontextVal}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;