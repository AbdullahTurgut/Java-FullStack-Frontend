import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./user/AddUser";
import EditUser from "./user/EditUser";
import ViewUser from "./user/ViewUser";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addUser" element={<AddUser />} />
          <Route exact path="/editUser/:id" element={<EditUser />} />
          <Route exact path="/viewUser/:id" element={<ViewUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
