import React, { useState } from "react";

const AuthContext = React.createContext({
  

  token: "",
  email:"",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  

  const initialToken = localStorage.getItem("token");

  const [token, setToken] = useState(initialToken);
  const intialEmail = localStorage.getItem('email');
  const [email, setEmail] = useState(intialEmail);

  const userIsLoggedIn = !!token;

  const loginHandler = (token,email) => {
    setToken(token);
    localStorage.setItem('token', token);
    setEmail(email);
    localStorage.setItem('email',email.replace('@','').replace('.',''));
};

const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('email');
};

 

  
  const contextVal = {


    token: token,
    email:email,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextVal}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;