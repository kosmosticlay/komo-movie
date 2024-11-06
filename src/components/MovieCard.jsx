import { Link } from "react-router-dom";

export default function MovieCard({ id, poster, title, rating }) {
  return (
    <li className="mx-2 h-64 rounded-xl overflow-hidden bg-gray-200">
      <Link
        to={"/details"}
        className="flex flex-col items-center overflow-hidden "
      >
        <img className="w-full h-4/5" src={poster} />

        <h2 className="movie-title">{title}</h2>
        <p className="movie-rating">평점: {rating}</p>
      </Link>
    </li>
  );
}
