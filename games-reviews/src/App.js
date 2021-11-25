import "./App.css";
import Header from "./components/Header";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import RequireLogin from "./components/RequireLogin";
import Main from "./pages/Main";
import logoutIcon from "./assets/logout (1).png";

function App() {
  const { user, setUser, isLoggedIn, logout } = useContext(UserContext);

  return (
    <div className="App">
      <Header id="test" />
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
              <Main />
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
