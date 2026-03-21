'use client';

import { useMemo, useState } from 'react';
import Banner from '@/components/Banner';
import MovieModal from '@/components/MovieModal';
import MovieRow from '@/components/MovieRow';
import Navbar from '@/components/Navbar';

export default function HomeScreen({ featured, rows }) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredRows = useMemo(() => {
    const needle = searchValue.trim().toLowerCase();

    if (!needle) {
      return rows;
    }

    return rows
      .map((row) => ({
        ...row,
        movies: row.movies.filter((movie) => movie.title.toLowerCase().includes(needle))
      }))
      .filter((row) => row.movies.length > 0);
  }, [rows, searchValue]);

  const featuredMovie = useMemo(() => {
    const firstMatch = filteredRows.find((row) => row.movies[0])?.movies[0];
    return firstMatch || featured;
  }, [featured, filteredRows]);

  return (
    <main className="min-h-screen bg-[#141414] text-white">
      <Navbar searchValue={searchValue} onSearchChange={setSearchValue} />
      <Banner movie={featuredMovie} onMoreInfo={setSelectedMovie} />

      <div id="rows" className="space-y-10 px-4 pb-16 sm:px-8">
        {filteredRows.length ? (
          filteredRows.map((row) => (
            <MovieRow key={row.id} title={row.title} movies={row.movies} onSelectMovie={setSelectedMovie} />
          ))
        ) : (
          <div className="rounded-lg border border-white/10 bg-zinc-900/60 p-8 text-zinc-300">
            No movies matched “{searchValue}”. Try a different search.
          </div>
        )}
      </div>

      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </main>
  );
}
