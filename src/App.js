import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AppwriteProvider } from "react-appwrite";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import ShowCards from "./components/ShowCards";
import CreateWorkspace from "./components/CreateWorkspace;";
import AddBoard from "./components/AddBoard";
import AddList from "./components/AddList";
import AddCard from "./components/AddCard";
// import Workspace from "./components/WorkSpace";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<SignUp />}/>
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="workspace" element={< CreateWorkspace/>} />
      <Route path="boards" element={< AddBoard/>} />
      <Route path="lists" element={< AddList/>} />
      <Route path="cards" element={< AddCard/>} />
      <Route path="showcards" element={< ShowCards/>} />
      

      </Routes>
    </BrowserRouter>
  );
}

export default App;
