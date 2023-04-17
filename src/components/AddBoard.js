// AddBoard.jsx
import { useState } from "react";
import { databases } from "../appwrite/appwrite";
import {ID} from 'appwrite'

const AddBoard = () => {
  const [title, setTitle] = useState("");

  const addBoard = async (e) => {
    e.preventDefault();

    try {
      await databases.createDocument(
        '64378d88005c0b12130b',
        '6439bfcd5a1f48aa4958',
          ID.unique(),
        {
          title: title,
        },
      );
      console.log("Board created successfully");
      setTitle("");
    } catch (error) {
      console.log("Error adding board: ", error);
    }
  };

  return (
    <form onSubmit={addBoard}>
      <input
        type="text"
        placeholder="Add Board Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">Add Board</button>
    </form>
  );
};

export default AddBoard;
