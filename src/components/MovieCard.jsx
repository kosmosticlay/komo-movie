import { Link } from "react-router-dom";

export default function MovieCard({ id, poster, title, rating }) {
  // console.log(poster, title, rating);
  return (
    <li className="h-64 mx-2 overflow-hidden bg-gray-200 rounded-xl">
      <Link
        to={`/details/${id}`}
        className="flex flex-col items-center overflow-hidden "
      >
        <img className="w-full h-4/5" src={poster} />

        <h2 className="movie-title">{title}</h2>
        <p className="movie-rating">평점: {rating}</p>
      </Link>
    </li>
  );
}
