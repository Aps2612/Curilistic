import { useEffect, useState } from "react";
import { databases } from "../appwrite/appwrite";

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await databases.listDocuments(
          "64378d88005c0b12130b",
          "6439c14c14fac3665398"
        );
        const data = response.documents;
        setCards(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            All Cards:
          </div>
          <ul className="mt-4 space-y-4">
            {cards.map((card) => (
              <li
                key={card.$id}
                className="flex flex-col bg-gray-100 p-4 rounded-lg"
              >
                <div className="flex-grow">
                  <div className="text-lg font-medium text-gray-900">
                    {card.title}
                  </div>
                  <div className="mt-2 text-gray-500">
                    <p className="text-sm text-gray-500">URL: {card.url}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardList;