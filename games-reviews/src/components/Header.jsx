import React from "react";
import { Link } from "react-router-dom";
import gameLogo from "../assets/gameLogo.png";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <header className="header">
      <Link to="/">
        <img
          className="header-content"
          src={gameLogo}
          alt="Game logo, rubix icon from Freepic"
        />
      </Link>
      <div id="user-icon" className="header-content">
        {user.username ? user.username : "Sign in"}
      </div>
    </header>
  );
}
