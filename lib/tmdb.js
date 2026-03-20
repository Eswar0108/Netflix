import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

const IMAGE_BASE = 'https://image.tmdb.org/t/p/original';
const POSTER_BASE = 'https://image.tmdb.org/t/p/w500';

function buildImage(path, base = POSTER_BASE) {
  return path ? `${base}${path}` : null;
}

function normalizeMovie(movie) {
  return {
    id: movie.id,
    title: movie.title || movie.name || 'Untitled',
    overview: movie.overview || 'No overview available.',
    releaseDate: movie.release_date || movie.first_air_date || 'Unknown',
    rating: movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A',
    backdropUrl: buildImage(movie.backdrop_path, IMAGE_BASE),
    posterUrl: buildImage(movie.poster_path),
    mediaType: movie.media_type || 'movie'
  };
}

async function fetchMovies(endpoint, params = {}) {
  const apiKey = process.env.TMDB_API_KEY;

  if (!apiKey) {
    return [];
  }

  const response = await api.get(endpoint, {
    params: {
      api_key: apiKey,
      language: 'en-US',
      ...params
    }
  });

  return (response.data.results || []).map(normalizeMovie);
}

export async function getHomePageData() {
  const [trending, topRated, action, comedy] = await Promise.all([
    fetchMovies('/trending/movie/week'),
    fetchMovies('/movie/top_rated'),
    fetchMovies('/discover/movie', { with_genres: 28 }),
    fetchMovies('/discover/movie', { with_genres: 35 })
  ]);

  const allMovies = [trending, topRated, action, comedy].flat();
  const featured = trending[0] || topRated[0] || action[0] || comedy[0] || {
    id: 0,
    title: 'Add your TMDB API key',
    overview: 'Set TMDB_API_KEY in your environment to load live data from TMDB.',
    releaseDate: '—',
    rating: 'N/A',
    backdropUrl: null,
    posterUrl: null,
    mediaType: 'movie'
  };

  return {
    featured,
    rows: [
      { id: 'trending', title: 'Trending Now', movies: trending },
      { id: 'top-rated', title: 'Top Rated', movies: topRated },
      { id: 'action', title: 'Action Movies', movies: action },
      { id: 'comedy', title: 'Comedy Movies', movies: comedy }
    ],
    allMovies
  };
}
