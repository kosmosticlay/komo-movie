import { useEffect, useState } from "react";
import { getPopularMovies } from "../API/api";
import MovieCardList from "../components/MovieCardList";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const moviesData = await getPopularMovies();
        setPopularMovies(moviesData);
      } catch (error) {
        console.error("Failed to fetch popular movies:", error);
      }
    };

    loadMovies();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center">Home 컴포넌트</h1>
      <MovieCardList showPagination={true} movies={popularMovies} />
    </>
  );
}
