// AddList.jsx
import { useState } from "react";
import { databases, listCollectionId } from "../appwrite/appwrite";
import {ID} from 'appwrite';

const AddList = ({ boardId = '6439bfcd5a1f48aa4958'}) => {
  const [title, setTitle] = useState("");

  const addList = async (e) => {
    e.preventDefault();

    try {
      await databases.createDocument(
        '64378d88005c0b12130b',
        listCollectionId,
        ID.unique(),
        {
          title: title,
          // boardId: boardId,
        },
      
      );
      console.log("List created successfully");
      setTitle("");
    } catch (error) {
      console.log("Error adding list: ", error);
    }
  };

  return (
    <form onSubmit={addList}>
      <input
        type="text"
        placeholder="Add List Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">Add List</button>
    </form>
  );
};

export default AddList;
