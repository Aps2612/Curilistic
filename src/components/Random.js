import { databases } from "../appwrite/appwrite";
import { useState } from "react";
import { ID } from "appwrite";
import AddBoard from "./AddBoard";

const CreateWorkspace = () => {
  const [name, setName] = useState("");
  const [boards, setBoards] = useState([]);

  const handleCreateWorkspace = async (e) => {
    e.preventDefault();

    try {
      const workspace = {
        name: name,
        boards: boards
      };

      const response = await databases.createDocument(
        '64378d88005c0b12130b',
        "6439a9cde8566e0158d8",
        ID.unique(),
        workspace,
      );

      console.log(response);
      setName("");
      setBoards([]);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleBoardCreated = (board) => {
    setBoards((prevBoards) => [...prevBoards, board]);
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
      </form>

      <AddBoard onBoardCreated={handleBoardCreated} />
      {boards.map((board) => (
        <div key={board.$id}>
          <h2>{board.title}</h2>
        </div>
      ))}
    </>
  );
};

export default CreateWorkspace;
