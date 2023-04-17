import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const AddWorkSpace = () => {
    navigate("/workspace");
  };
  const AddBoards = () => {
    navigate("/boards");
  };
  const AddLists = () => {
    navigate("/lists");
  };
  const AddCards = () => {
    navigate("/cards");
  };
  const ShowCards = () => {
    navigate("/showcards");
  };

  return (
    <div className="bg-green flex flex-col justify-center items-center space-y-14">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        onClick={AddWorkSpace}
      >
        Add Workspace
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        onClick={AddBoards}
      >
        Add Boards
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        onClick={AddLists}
      >
        Add List
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        onClick={AddCards}
      >
        Add Card
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        onClick={ShowCards}
      >
        Show Cards
      </button>
    </div>
  );
};

export default Profile;