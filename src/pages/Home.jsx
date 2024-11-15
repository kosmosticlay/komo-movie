import MovieCardList from "../components/MovieCardList";
import { getMovies } from "../API/tmdbAPI";

import { useEffect, useState } from "react";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const moviesData = await getMovies("popular");
        setPopularMovies(moviesData);
      } catch (error) {
        console.error("Failed to fetch popular movies:", error);
      }
    };

    loadMovies();
  }, []);

  console.log(popularMovies);

  return (
    <main className="w-full pt-20 bg-blue-200 md:p-0 h-[2000px] ">
      <h1 className="text-3xl font-bold text-center text-white">
        Home 컴포넌트
      </h1>
      <MovieCardList showPagination={true} movies={popularMovies} />
    </main>
  );
}
