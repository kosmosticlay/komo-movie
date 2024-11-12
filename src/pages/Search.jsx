import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchMovies } from "../API/tmdbAPI";
import MovieCardList from "../components/MovieCardList";

export default function Search() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const loadMovies = async () => {
      if (!query) {
        setSearchedMovies([]);
        return;
      }

      try {
        const moviesData = await searchMovies(query);
        setSearchedMovies(moviesData.results);
        console.log(moviesData);
      } catch (error) {
        console.error("Failed to search movies:", error);
      }
    };

    loadMovies();
  }, [query]);

  return (
    <main className="flex flex-col gap-10 pt-20 md:p-0">
      <h1 className="text-3xl font-bold text-center text-white">
        Search 컴포넌트
      </h1>
      {query ? (
        <p className="text-xl font-bold text-center text-white">
          검색어:{query}
        </p>
      ) : (
        <p className="text-xl font-bold text-center text-white">
          검색어를 입력하세요!
        </p>
      )}
      {query && <MovieCardList showPagination={true} movies={searchedMovies} />}
    </main>
  );
}
