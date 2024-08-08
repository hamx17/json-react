import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar";
import AddDetails from "./Components/AddDetails";
import Read from "./Components/Read";
import SearchById from "./Components/SearchById";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
       <AddDetails/>
       <SearchById/>
       <Read/>
      </BrowserRouter>
    </div>
  );
}
export default App;