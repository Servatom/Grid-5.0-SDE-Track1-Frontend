"use client";

import AuthContext from "@/store/auth-context";
import { useContext, useEffect } from "react";

const Logout = () => {
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    if (authCtx.isLoggedIn) {
      window.location.href = "/";
    } else {
      authCtx.logout();
      window.location.href = "/";
    }
  }, [authCtx]);
  return <div></div>;
};
