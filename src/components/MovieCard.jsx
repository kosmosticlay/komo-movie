import { Link } from "react-router-dom";

export default function MovieCard({ id, poster, title, vote_average }) {
  console.log(poster, title, vote_average);
  return (
    <li className="w-56 border-4 border-black h-80 rounded-xl">
      <Link to={"/details"} className="">
        <img className="w-full overflow-hidden h-4/5 rounded-xl" src={poster} />

        <h2>{title}</h2>
        <p>평점: {vote_average}</p>
      </Link>
    </li>
  );
}
