import React from "react";
import { Link } from "react-router-dom";
import gameLogo from "../assets/gameLogo.png";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { getReviews } from "../utils/apiCall";

export default function Header({ setReviews }) {
  const { user } = useContext(UserContext);

  return (
    <header className="header">
      <Link to="/">
        <img
          onClick={() => {
            getReviews().then((reviewsFromApi) => {
              setReviews(reviewsFromApi);
            });
          }}
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
