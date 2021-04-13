const APIKEY = "a409e4fb6fc1046e53df601d78fcb68b";
export const URL = "https://api.themoviedb.org/3";
const requets = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_etworks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovie: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovie: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovie: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovie: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumantries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};

export default requets;
