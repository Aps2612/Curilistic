// AddList.jsx
import { useState } from "react";
import { databases, listCollectionId } from "../appwrite/appwrite";
import {ID} from 'appwrite';

const AddCard = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const addList = async (e) => {
    e.preventDefault();

    try {
      await databases.createDocument(
        '64378d88005c0b12130b',
        '6439c14c14fac3665398',
        ID.unique(),
        {
          title: title,
          url:url
          // boardId: boardId,
        }
      
      );
      console.log("Card created successfully");
      setTitle("");
      setUrl("")
    } catch (error) {
      console.log("Error adding list: ", error);
    }
  };

  return (
    <form onSubmit={addList}>
      <input
        type="text"
        placeholder="Add Card Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Add Url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit">Add Card</button>
    </form>
  );
};

export default AddCard;
