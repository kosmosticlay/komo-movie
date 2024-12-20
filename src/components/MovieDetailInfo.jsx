import { BASE_URL } from "../App";

export default function MovieDetailInfo({ movie }) {
  console.log(movie);
  return (
    <div className="flex flex-col w-full h-screen text-white">
      <h1 className="text-3xl font-bold text-center">{movie.title}</h1>
      <main className="flex h-screen gap-10 m-10 ">
        <img
          className="w-1/2 h-full"
          src={`${BASE_URL}${movie.backdrop_path}`}
        />
        <section className="w-1/2 ">
          <span>{movie.title}</span>
          <span>{movie.vote_average}</span>
          <p>
            {movie.genres && movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>{movie.overview}</p>
        </section>
      </main>
    </div>
  );
}
