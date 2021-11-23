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
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    usersFromApi.forEach((user) => {
      if (user.username === username) {
        setUser({ username });
      } else {
        setUsername("INVALID USER");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>ENTER USERNAME TO ACCESS SITE</h2>
      <label>
        Username:
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </label>
    </form>
  );
};

export default Login;
