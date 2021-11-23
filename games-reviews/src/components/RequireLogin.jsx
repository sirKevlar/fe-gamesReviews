import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Login from "./Login";

export default function RequireLogin({ children }) {
  const { isLoggedIn } = useContext(UserContext);

  return isLoggedIn ? children : <Login />;
}
