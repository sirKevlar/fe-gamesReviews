import "./App.css";
import Header from "./components/Header";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import RequireLogin from "./components/RequireLogin";
import Main from "./pages/Main";
import logoutIcon from "./assets/logout (1).png";

function App() {
  const { isLoggedIn, logout } = useContext(UserContext);
  const [reviews, setReviews] = useState([]);

  return (
    <div className="App">
      <Header setReviews={setReviews} id="test" />
      <div className="under-header">
        <RequireLogin>
          {isLoggedIn ? (
            <div>
              <Link to="/">
                <button className="logout" onClick={logout}>
                  <img
                    className="logout-icon"
                    src={logoutIcon}
                    alt="logout icon"
                  />
                </button>
              </Link>
              <Main reviews={reviews} setReviews={setReviews} />
            </div>
          ) : (
            <p>Do nothing</p>
            // <button
            //   onClick={() => {
            //     setUser(user);
            //   }}
            // >
            //   LOG IN
            // </button>
            // THIS LOGIC IS UNREACHABLE THANK TO FORM HANDLING LOGIN
          )}
        </RequireLogin>
      </div>
    </div>
  );
}

export default App;
