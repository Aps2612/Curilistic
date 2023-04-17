import { useState } from "react";
import { Client, Account, ID} from "appwrite";

const client = new Client();

const account = new Account(client);

client
    .setEndpoint('https://localhost/v1') // Your API Endpoint
    .setProject('64378c0e2d556b26a378') // Your project ID
;




function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = async (e) => {  
    e.preventDefault()
    try {
      const response = await account.create(ID.unique(),email, password, name);
      console.log(response);
      setEmail("");
      setPassword("");
      setName("");
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <form onSubmit={handleSignUp}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
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
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;
