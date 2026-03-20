'use client';

import { useEffect, useMemo, useState } from 'react';
import Banner from '@/components/Banner';
import MovieModal from '@/components/MovieModal';
import MovieRow from '@/components/MovieRow';
import Navbar from '@/components/Navbar';

const WATCHLIST_KEY = 'netflix-clone-watchlist';

export default function HomeScreen({ featured, rows }) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [watchlistIds, setWatchlistIds] = useState([]);
  const [manualFeatured, setManualFeatured] = useState(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(WATCHLIST_KEY);
      if (stored) {
        setWatchlistIds(JSON.parse(stored));
      }
    } catch {
      setWatchlistIds([]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlistIds));
  }, [watchlistIds]);

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

    return searchedRows;
  }, [rows, activeFilter, searchValue, watchlistMovies]);

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

  const playSomething = () => {
    if (!allMovies.length) {
      return;
    }
    const randomMovie = allMovies[Math.floor(Math.random() * allMovies.length)];
    setManualFeatured(randomMovie);
    setSelectedMovie(randomMovie);
  };

  return (
    <main className="min-h-screen bg-[#141414] text-white">
      <Navbar searchValue={searchValue} onSearchChange={setSearchValue} onPlaySomething={playSomething} />
      <Banner
        movie={featuredMovie}
        onMoreInfo={setSelectedMovie}
        onAddToList={toggleMyList}
        isInMyList={watchlistIds.includes(featuredMovie.id)}
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
            <MovieRow key={row.id} title={row.title} movies={row.movies} onSelectMovie={setSelectedMovie} />
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
      />
    </main>
  );
}
