'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function MovieModal({ movie, onClose, onToggleMyList, onSetFeatured, isInMyList, onPlayMovie }) {
  useEffect(() => {
    if (!movie) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [movie, onClose]);

  if (!movie) {
    return null;
  }

  const handlePlay = () => {
    onPlayMovie(movie);
    onClose();
  };

  const handleSetFeatured = () => {
    onSetFeatured(movie);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-zinc-950 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="movie-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/70 text-xl text-white"
          aria-label="Close movie details"
        >
          ✕
        </button>

        <div className="grid max-h-[85vh] overflow-y-auto md:grid-cols-[1.2fr_0.8fr]">
          <div className="relative h-72 w-full md:h-full md:min-h-[430px]">
            {movie.backdropUrl ? (
              <Image src={movie.backdropUrl} alt={movie.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 700px" />
            ) : (
              <div className="h-full w-full bg-zinc-800" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 space-y-3 p-6">
              <h3 id="movie-modal-title" className="text-3xl font-bold text-white sm:text-4xl">{movie.title}</h3>
              <div className="flex flex-wrap gap-3 text-sm text-zinc-200">
                <span className="font-semibold text-green-400">{movie.rating} Rating</span>
                <span>{movie.releaseDate}</span>
                <span className="capitalize">{movie.mediaType}</span>
              </div>
            </div>
          </div>

          <div className="space-y-5 p-6 sm:p-8">
            {movie.posterUrl ? (
              <div className="relative mx-auto hidden aspect-[2/3] w-40 overflow-hidden rounded-lg md:block">
                <Image src={movie.posterUrl} alt={`${movie.title} poster`} fill className="object-cover" sizes="160px" />
              </div>
            ) : null}
            <p className="text-base leading-7 text-zinc-200">{movie.overview}</p>
            <div className="space-y-2 text-sm text-zinc-300">
              <p><span className="font-semibold text-white">Title:</span> {movie.title}</p>
              <p><span className="font-semibold text-white">Release:</span> {movie.releaseDate}</p>
              <p><span className="font-semibold text-white">TMDB score:</span> {movie.rating}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handlePlay}
                className="rounded bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
              >
                ▶ Play
              </button>
              <button
                type="button"
                onClick={() => onToggleMyList(movie)}
                className="rounded bg-zinc-800 px-5 py-3 font-semibold text-white transition hover:bg-zinc-700"
              >
                {isInMyList ? '✓ In My List' : '+ My List'}
              </button>
              <button
                type="button"
                onClick={handleSetFeatured}
                className="rounded border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-zinc-900"
              >
                Set as Featured
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
