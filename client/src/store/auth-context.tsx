"use client";

import React, { useState } from "react";
// import customToast from "../components/common/CustomToast";

export interface IContextType {
  token: string | null;
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

type Props = {
  children?: React.ReactNode;
};

const AuthContext = React.createContext<IContextType>({
  token: null,
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }: Props) => {
  let initialToken;
  if (typeof window !== "undefined") {
    initialToken = localStorage.getItem("token");
  }

  const [token, setToken] = useState<string | null>(
    !!initialToken ? JSON.parse(initialToken) : null
  );

  const userIsLoggedIn = !!token;
  const loginHandler = (token: string) => {
    setToken(token);
    localStorage.setItem("token", JSON.stringify(token));
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
