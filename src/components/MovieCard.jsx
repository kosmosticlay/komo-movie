import { Link } from "react-router-dom";

export default function MovieCard({ id, poster, title, rating }) {
  return (
    <Link to={"/details"} className="movie-card">
      <img src={poster} />
      <h2 className="movie-title">{title}</h2>
      <p className="movie-rating">평점: {rating}</p>
    </Link>
  );
}
