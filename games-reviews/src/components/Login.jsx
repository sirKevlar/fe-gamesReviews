import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { getUsers } from "../utils/apiCall";

const Login = () => {
  const [usersFromApi, setUsersFromApi] = useState([]);
  const [username, setUsername] = useState("");
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then((users) => {
      setUsersFromApi(users);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const matchingUser = usersFromApi.find((user) => {
      return user.username === username;
    });

    if (matchingUser) {
      setUser(matchingUser);
    } else {
      setUsername("INVALID USER");
    }
  };

  return (
    <main className="login-page">
      <form onSubmit={handleSubmit}>
        <h2 id="user-heading">PLEASE ENTER USERNAME</h2>
        <label>
          Username:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </label>
      </form>
    </main>
  );
};

export default Login;
