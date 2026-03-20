'use client';

import { useEffect, useMemo, useState } from 'react';
import Banner from '@/components/Banner';
import MovieModal from '@/components/MovieModal';
import MovieRow from '@/components/MovieRow';
import Navbar from '@/components/Navbar';

const WATCHLIST_KEY = 'netflix-clone-watchlist';
const CONTINUE_KEY = 'netflix-clone-progress';

export default function HomeScreen({ featured, rows }) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [watchlistIds, setWatchlistIds] = useState([]);
  const [manualFeatured, setManualFeatured] = useState(null);
  const [progressMap, setProgressMap] = useState({});

  useEffect(() => {
    try {
      const storedWatchlist = window.localStorage.getItem(WATCHLIST_KEY);
      const storedProgress = window.localStorage.getItem(CONTINUE_KEY);
      if (storedWatchlist) {
        setWatchlistIds(JSON.parse(storedWatchlist));
      }
      if (storedProgress) {
        setProgressMap(JSON.parse(storedProgress));
      }
    } catch {
      setWatchlistIds([]);
      setProgressMap({});
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlistIds));
  }, [watchlistIds]);

  useEffect(() => {
    window.localStorage.setItem(CONTINUE_KEY, JSON.stringify(progressMap));
  }, [progressMap]);

  const allMovies = useMemo(() => {
    const seen = new Map();
    rows.flatMap((row) => row.movies).forEach((movie) => {
      if (!seen.has(movie.id)) {
        seen.set(movie.id, movie);
      }
    });
    return [...seen.values()];
  }, [rows]);

  const watchlistMovies = useMemo(
    () => allMovies.filter((movie) => watchlistIds.includes(movie.id)),
    [allMovies, watchlistIds]
  );

  const continueWatchingMovies = useMemo(
    () => allMovies.filter((movie) => progressMap[movie.id]).sort((a, b) => progressMap[b.id] - progressMap[a.id]),
    [allMovies, progressMap]
  );

  const recommendedMovies = useMemo(
    () => allMovies.filter((movie) => !watchlistIds.includes(movie.id)).sort((a, b) => Number(b.rating) - Number(a.rating)).slice(0, 8),
    [allMovies, watchlistIds]
  );

  const filterTabs = useMemo(
    () => [
      { id: 'all', label: 'All' },
      ...rows.map((row) => ({ id: row.id, label: row.title })),
      { id: 'my-list', label: `My List (${watchlistMovies.length})` }
    ],
    [rows, watchlistMovies.length]
  );

  const filteredRows = useMemo(() => {
    const needle = searchValue.trim().toLowerCase();

    const baseRows = activeFilter === 'my-list'
      ? [{ id: 'my-list', title: 'My List', movies: watchlistMovies }]
      : activeFilter === 'all'
        ? rows
        : rows.filter((row) => row.id === activeFilter);

    const searchedRows = baseRows
      .map((row) => ({
        ...row,
        movies: row.movies.filter((movie) => movie.title.toLowerCase().includes(needle))
      }))
      .filter((row) => row.movies.length > 0);

    if (activeFilter === 'all' && watchlistMovies.length) {
      const myListMatches = watchlistMovies.filter((movie) => movie.title.toLowerCase().includes(needle));
      if (myListMatches.length) {
        searchedRows.push({ id: 'my-list', title: 'My List', movies: myListMatches });
      }
    }

    if (activeFilter === 'all' && continueWatchingMovies.length) {
      const continueMatches = continueWatchingMovies.filter((movie) => movie.title.toLowerCase().includes(needle));
      if (continueMatches.length) {
        searchedRows.unshift({ id: 'continue', title: 'Continue Watching', movies: continueMatches });
      }
    }

    if (activeFilter === 'all' && recommendedMovies.length) {
      const recommendedMatches = recommendedMovies.filter((movie) => movie.title.toLowerCase().includes(needle));
      if (recommendedMatches.length) {
        searchedRows.push({ id: 'recommended', title: 'Recommended For You', movies: recommendedMatches });
      }
    }

    return searchedRows;
  }, [rows, activeFilter, searchValue, watchlistMovies, continueWatchingMovies, recommendedMovies]);

  const featuredMovie = useMemo(() => {
    if (manualFeatured) {
      return manualFeatured;
    }
    const firstMatch = filteredRows.find((row) => row.movies[0])?.movies[0];
    return firstMatch || featured;
  }, [featured, filteredRows, manualFeatured]);

  const toggleMyList = (movie) => {
    setWatchlistIds((current) => (
      current.includes(movie.id)
        ? current.filter((id) => id !== movie.id)
        : [...current, movie.id]
    ));
  };

  const playMovie = (movie) => {
    setManualFeatured(movie);
    setProgressMap((current) => ({
      ...current,
      [movie.id]: Math.min((current[movie.id] || 0) + 18, 95)
    }));
  };

  const playSomething = () => {
    if (!allMovies.length) {
      return;
    }
    const randomMovie = allMovies[Math.floor(Math.random() * allMovies.length)];
    setManualFeatured(randomMovie);
    setSelectedMovie(randomMovie);
    playMovie(randomMovie);
  };

  return (
    <main className="min-h-screen bg-[#141414] text-white">
      <Navbar searchValue={searchValue} onSearchChange={setSearchValue} onPlaySomething={playSomething} />
      <Banner
        movie={featuredMovie}
        onMoreInfo={setSelectedMovie}
        onAddToList={toggleMyList}
        isInMyList={watchlistIds.includes(featuredMovie.id)}
        onPlayMovie={playMovie}
      />

      <div className="flex flex-wrap gap-3 px-4 pb-6 sm:px-8">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
              activeFilter === tab.id
                ? 'border-white bg-white text-black'
                : 'border-white/15 bg-zinc-900/80 text-white hover:bg-zinc-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div id="rows" className="space-y-10 px-4 pb-16 sm:px-8">
        {filteredRows.length ? (
          filteredRows.map((row) => (
            <MovieRow
              key={row.id}
              title={row.title}
              movies={row.movies}
              onSelectMovie={setSelectedMovie}
              progressMap={progressMap}
            />
          ))
        ) : (
          <div className="rounded-lg border border-white/10 bg-zinc-900/60 p-8 text-zinc-300">
            No movies matched “{searchValue}”. Try a different search or switch categories.
          </div>
        )}
      </div>

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
        onToggleMyList={toggleMyList}
        onSetFeatured={setManualFeatured}
        isInMyList={selectedMovie ? watchlistIds.includes(selectedMovie.id) : false}
        onPlayMovie={playMovie}
      />
    </main>
  );
}
