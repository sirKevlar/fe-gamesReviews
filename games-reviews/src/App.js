import "./App.css";
import Header from "./components/Header";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import RequireLogin from "./components/RequireLogin";
import Main from "./pages/Main";

function App() {
  const { user, setUser, isLoggedIn, logout } = useContext(UserContext);

  return (
    <div className="App">
      <Header />
      <div className="under-header">
        <RequireLogin>
          {isLoggedIn ? (
            <div>
              <button className="logout" onClick={logout}>
                LOGOUT
              </button>
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
