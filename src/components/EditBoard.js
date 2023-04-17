import { useState } from "react";
import { databases } from "../appwrite/appwrite";

const EditBoard = ({ boardId, boardTitle, onUpdate }) => {
  const [title, setTitle] = useState(boardTitle);

  const updateBoard = async (e) => {
    e.preventDefault();

    try {
      await databases.updateDocument("board-collection-id", boardId, {
        title: title,
      });
      console.log("Board updated successfully");
      onUpdate(title);
    } catch (error) {
      console.log("Error updating board: ", error);
    }
  };

  return (
    <form onSubmit={updateBoard}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">Update Board</button>
    </form>
  );
};

export default EditBoard;