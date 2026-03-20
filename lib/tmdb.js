import axios from 'axios';
import { demoFeatured, demoRows } from '@/lib/mock-data';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 10000
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
  }
}

async function fetchMovies(endpoint, params = {}) {
  const apiKey = process.env.TMDB_API_KEY;
  const accessToken = process.env.TMDB_ACCESS_TOKEN;

  if (!apiKey && !accessToken) {
    return [];
  }

  try {
    const response = await api.get(endpoint, {
      params: {
        language: 'en-US',
        ...params,
        ...(apiKey ? { api_key: apiKey } : {})
      },
      headers: accessToken
        ? {
            Authorization: `Bearer ${accessToken}`
          }
        : undefined
    });

    return (response.data.results || []).map(normalizeMovie);
  } catch (error) {
    console.error(`TMDB request failed for ${endpoint}:`, error?.response?.status || error.message);
    return [];
  }
}

export async function getHomePageData() {
  const [trending, topRated, action, comedy] = await Promise.all([
    fetchMovies('/trending/movie/week'),
    fetchMovies('/movie/top_rated'),
    fetchMovies('/discover/movie', { with_genres: 28 }),
    fetchMovies('/discover/movie', { with_genres: 35 })
  ]);

  const rows = [
    { id: 'trending', title: 'Trending Now', movies: trending },
    { id: 'top-rated', title: 'Top Rated', movies: topRated },
    { id: 'action', title: 'Action Movies', movies: action },
    { id: 'comedy', title: 'Comedy Movies', movies: comedy }
  ];

  const hasLiveMovies = rows.some((row) => row.movies.length > 0);

  if (!hasLiveMovies) {
    return {
      featured: demoFeatured,
      rows: demoRows
    };
  }

  const featured = trending[0] || topRated[0] || action[0] || comedy[0] || demoFeatured;

  return {
    featured,
    rows
  };
}
