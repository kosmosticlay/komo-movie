const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const ACCESS_TOKEN = import.meta.env.ACCESS_TOKEN;

const BASE_URL = "https://api.themoviedb.org/3/movie";
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie";
const API_KEY_TEXT = `?api_key=${API_KEY}`;
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
      PATH = `popular${API_KEY_TEXT}`;
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

export async function searchMovies(searchKey) {
  const response = await fetch(
    `${SEARCH_URL}${API_KEY_TEXT}&query=${searchKey}&language=ko&page=1`,
    GET_OPTIONS
  );
  const data = await response.json();
  return data;
}
