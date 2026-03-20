'use client';

import Image from 'next/image';

export default function Navbar({ searchValue, onSearchChange, onPlaySomething }) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-black via-black/85 to-transparent px-4 py-4 sm:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-6 lg:gap-8">
          <div className="text-3xl font-black tracking-[0.35em] text-[#E50914]">NETFLIX</div>
          <nav className="hidden gap-5 text-sm font-semibold text-zinc-200 md:flex">
            <a href="#" className="font-black text-white">Home</a>
            <a href="#rows">TV Shows</a>
            <a href="#rows">Movies</a>
            <a href="#rows">New & Popular</a>
            <a href="#rows">My List</a>
          </nav>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onPlaySomething}
            className="hidden rounded bg-white px-4 py-2 text-sm font-black text-black transition hover:bg-zinc-200 md:inline-flex"
          >
            Play Something
          </button>
          <div className="hidden text-sm font-semibold text-zinc-300 md:block">Children</div>
          <div className="flex items-center gap-2 border border-white/20 bg-black/55 px-3 py-2 text-sm text-zinc-200">
            <span aria-hidden="true">⌕</span>
            <input
              value={searchValue}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search movies"
              className="w-40 bg-transparent font-medium outline-none placeholder:text-zinc-400 sm:w-56"
            />
          </div>
          <button className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-zinc-900/80 text-sm text-white">
            🔔
          </button>
          <Image src="/profile-avatar.svg" alt="Profile avatar" width={36} height={36} className="rounded" />
        </div>
      </div>
    </header>
  );
}
