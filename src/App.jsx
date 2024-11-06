import movieListData from "./data/movieListData.json";
import MovieCard from "./components/MovieCard";

const BASE_URL = "https://image.tmdb.org/t/p/w500";

function App() {
  const json = movieListData;
  const movies = json.results;

  // console.log(movies);

  return (
    <ul>
      {movies.map((movie, index) => (
        <li key={index}>
          <MovieCard
            poster={`${BASE_URL}${movie.backdrop_path}`}
            title={movie.title}
            rating={movie.rating}
          />
        </li>
      ))}
    </ul>
  );
}

export default App;
