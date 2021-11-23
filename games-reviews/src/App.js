import "./App.css";
import Header from "./components/Header";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import RequireLogin from "./components/RequireLogin";

function App() {
  const { user, setUser, isLoggedIn, logout } = useContext(UserContext);

  return (
    <div className="App">
      <Header />
      <RequireLogin>
        {isLoggedIn ? (
          <button onClick={logout}>LOGOUT</button>
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
  );
}

export default App;
