import { databases } from "../appwrite/appwrite";
import { useState } from "react";
import { ID } from "appwrite";
import { useNavigate } from "react-router-dom";

const CreateWorkspace = ({ onWorkspaceCreated }) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleCreateWorkspace = async (e) => {
    e.preventDefault();

    try {
      const workspace = {
        name: name,
        boards: []
      };

      const response = await databases.createDocument(
        '64378d88005c0b12130b',
        "6439a9cde8566e0158d8",
        ID.unique(),
        workspace,
      );

    //   onWorkspaceCreated(response.$id, workspace);
     console.log(response)
      setName("");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
    <form onSubmit={handleCreateWorkspace}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Create Workspace</button>
      <br></br>
      
    </form>
   
    </>
  );
};

export default CreateWorkspace;
