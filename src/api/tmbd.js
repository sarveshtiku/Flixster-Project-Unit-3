export const API_KEY = import.meta.env.VITE_API_KEY;
export const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchNowPlaying(page = 1) {
  const res = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&page=${page}`);
  return res.json();
}
export async function searchMovies(query) {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  return res.json();
}
export async function fetchMovieDetails(id) {
  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
  );
  return res.json();
}
