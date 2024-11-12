import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetailInfo from "../components/MovieDetailInfo";
import { getMovieDetail } from "../API/tmdbAPI";

export default function MovieDetail() {
  const [movie, setMovie] = useState({});
  const params = useParams();

  const movieId = params.id;

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const movieData = await getMovieDetail(movieId);
        setMovie(movieData);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    loadMovie();
  }, [movieId]);

  return <MovieDetailInfo movie={movie} />;
}
