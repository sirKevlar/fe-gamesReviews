import React from "react";
import gameLogo from "../assets/gameLogo.png";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <header className="header">
      <img
        className="header-content"
        src={gameLogo}
        alt="Game logo, rubix image from Freepic"
      />
      <div id="user-icon" className="header-content">
        {user.username ? user.username : "Sign in"}
      </div>
    </header>
  );
}
