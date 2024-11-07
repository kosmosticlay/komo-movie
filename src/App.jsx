import { Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import Home from "./pages/Home";

export const BASE_URL = "https://image.tmdb.org/t/p/w500";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
