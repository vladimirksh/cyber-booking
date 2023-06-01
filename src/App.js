import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hotel from "./pages/Hotel/Hotel";
import SearchResults from "./pages/SearchResults/SearchResults";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/searchresults" element={<SearchResults />} />
      <Route path="/searchresults/:id" element={<Hotel />} />
    </Routes>
  );
}

export default App;
