import { useState } from "react";
import movieDetailData from "../data/movieDetailData.json";
import { BASE_URL } from "../App";

export default function MovieDetail() {
  const [movie, setMovie] = useState(movieDetailData);

  console.log(movie);
  return (
    <>
      <h1>MovieDetail 컴포넌트</h1>
      <img src={`${BASE_URL}${movie.backdrop_path}`} />
      <p>{movie.title}</p>
      <p>{movie.vote_average}</p>
      <p>
        {movie.genres && movie.genres.map((genre) => genre.name).join(", ")}
      </p>
      <p>{movie.overview}</p>
    </>
  );
}
