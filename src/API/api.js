const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3/movie";
const POPULAR_PATH = `/popular?api_key=${API_KEY}`;
// const UPCOMING_PATH = `/now_playing?api_key=${API_KEY}`;

export async function getPopularMovies() {
  const response = await fetch(`${BASE_URL}${POPULAR_PATH}&language=ko&page=1`);
  const data = await response.json();
  console.log(data);

  return data.results;
}
