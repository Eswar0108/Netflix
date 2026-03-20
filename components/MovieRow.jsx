'use client';

import { useRef } from 'react';
import Image from 'next/image';

function releaseYear(date) {
  return date && date !== 'Unknown' ? String(date).slice(0, 4) : '—';
}

export default function MovieRow({ title, movies, onSelectMovie, progressMap = {} }) {
  const rowRef = useRef(null);

  const scrollRow = (direction) => {
    if (!rowRef.current) {
      return;
    }

    rowRef.current.scrollBy({
      left: direction * 900,
      behavior: 'smooth'
    });
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">{title}</h2>
        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={() => scrollRow(-1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-zinc-900/90 text-white transition hover:bg-zinc-800"
            aria-label={`Scroll ${title} left`}
          >
            ‹
          </button>
          <button
            onClick={() => scrollRow(1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-zinc-900/90 text-white transition hover:bg-zinc-800"
            aria-label={`Scroll ${title} right`}
          >
            ›
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-20 bg-gradient-to-r from-[#111] to-transparent md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-20 bg-gradient-to-l from-[#111] to-transparent md:block" />

        <div ref={rowRef} className="hide-scrollbar flex gap-4 overflow-x-auto pb-6 scroll-smooth">
          {movies.map((movie) => {
            const progress = progressMap[movie.id] ?? null;

            return (
              <button
                key={`${title}-${movie.id}`}
                onClick={() => onSelectMovie(movie)}
                className="poster-card-hover group relative min-w-[220px] overflow-hidden rounded-md bg-zinc-900 text-left"
              >
                <div className="relative h-[330px] w-[220px] overflow-hidden rounded-md">
                  {movie.posterUrl ? (
                    <Image
                      src={movie.posterUrl}
                      alt={movie.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-110"
                      sizes="220px"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-zinc-800 px-4 text-center text-sm text-zinc-400">
                      No image available
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent opacity-95" />
                  <div className="absolute inset-x-0 bottom-0 space-y-2 p-4">
                    <p className="line-clamp-2 text-lg font-extrabold text-white">{movie.title}</p>
                    <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
                      <span className="font-black text-green-400">{movie.rating}</span>
                      <span>{releaseYear(movie.releaseDate)}</span>
                      <span className="rounded border border-white/25 px-1.5 py-0.5">HD</span>
                    </div>
                    {progress !== null ? (
                      <div className="space-y-1">
                        <div className="h-1.5 w-full overflow-hidden rounded bg-white/20">
                          <div className="h-full bg-red-600" style={{ width: `${progress}%` }} />
                        </div>
                        <p className="text-[11px] font-semibold text-zinc-200">Resume at {progress}%</p>
                      </div>
                    ) : null}
                    <div className="translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white">
                        Click for details
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
