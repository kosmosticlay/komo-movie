import { useState } from "react";
import MovieCard from "../components/MovieCard";
import movieListData from "../data/movieListData.json";
import { BASE_URL } from "../App";

export default function Home() {
  const data = movieListData.results;
  const [movies, setMovies] = useState(data);

  //console.log(movies);
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Home 컴포넌트</h1>
      <ul className="flex flex-wrap justify-center gap-10">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            poster={`${BASE_URL}${movie.backdrop_path}`}
            title={movie.title}
            vote_average={movie.vote_average}
          />
        ))}
      </ul>
    </>
  );
}
