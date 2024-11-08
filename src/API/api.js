const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const ACCESS_TOKEN = import.meta.env.ACCESS_TOKEN;

const BASE_URL = "https://api.themoviedb.org/3/movie";
const API_KEY_TEXT = `?api_key=${API_KEY}`;
const POPULAR_PATH = `popular${API_KEY_TEXT}`;
// const UPCOMING_PATH = `/now_playing?api_key=${API_KEY}`;

const GET_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

export async function getMovies(type) {
  let PATH;

  switch (type) {
    case "popular":
      PATH = POPULAR_PATH;
  }

  const response = await fetch(
    `${BASE_URL}/${PATH}&language=ko&page=1`,
    GET_OPTIONS
  );
  const data = await response.json();

  return data.results;
}

export async function getMovieDetail(id) {
  const response = await fetch(`${BASE_URL}/${id}${API_KEY_TEXT}`, GET_OPTIONS);
  const data = await response.json();

  return data;
}
