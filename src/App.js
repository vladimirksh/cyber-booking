import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Searchresults from "./pages/Searchresults/Searchresults";
import Hotel from "./pages/Hotel/Hotel";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/searchresults" element={<Searchresults />} />
      <Route path="/searchresults/:id" element={<Hotel />} />
    </Routes>
  );
}

export default App;
