import { Link } from "react-router-dom";

export default function MovieCard({ id, poster, title, rating }) {
  return (
    <li className="w-56 h-80 border-4 border-black rounded-xl">
      <Link to={"/details"} className="">
        <img className="w-full h-4/5 overflow-hidden rounded-xl" src={poster} />

        <h2 className="movie-title">{title}</h2>
        <p className="movie-rating">평점: {rating}</p>
      </Link>
    </li>
  );
}
