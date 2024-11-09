import { Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import Home from "./pages/Home";
import NavBar from "./components/layout/NavBar";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import Search from "./pages/Search";

export const BASE_URL = "https://image.tmdb.org/t/p/w500";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<MovieDetail />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
