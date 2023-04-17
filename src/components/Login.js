import { useState } from "react";
import { account } from "../appwrite/appwrite"
import { useNavigate } from "react-router-dom";


function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await account.createEmailSession(email, password);
      console.log("Success"); // Success
      navigate("/profile")
    } catch (error) {
      console.log(error); // Failure
  }
  };

  return (
    <form>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit" onClick = {handleLogin}>
        Login
      </button>
    </form>
  );
}


export default Login;
