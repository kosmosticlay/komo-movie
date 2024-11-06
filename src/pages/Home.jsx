import { useState } from "react";
import MovieCard from "../components/MovieCard";
import movieListData from "../data/movieListData.json";
import { BASE_URL } from "../App";

export default function Home() {
  const json = movieListData;
  const data = json.results;
  const [movies, setMovies] = useState(data);

  //console.log(movies);
  return (
    <>
      <h1 className="text-center text-3xl font-bold">Home 컴포넌트</h1>
      <ul className="flex flex-wrap gap-10 justify-center">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            poster={`${BASE_URL}${movie.backdrop_path}`}
            title={movie.title}
            rating={movie.rating}
          />
        ))}
      </ul>
    </>
  );
}
