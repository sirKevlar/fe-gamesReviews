import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Api call to check login details here
    setUser({ username });
  };

  return (
    <form onSubmit={handleSubmit}>
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
