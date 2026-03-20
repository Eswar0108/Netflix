'use client';

export default function Navbar({ searchValue, onSearchChange }) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-black via-black/80 to-transparent px-4 py-4 sm:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-8">
          <div className="text-3xl font-black tracking-[0.35em] text-[#E50914]">NETFLIX</div>
          <nav className="hidden gap-5 text-sm text-zinc-200 md:flex">
            <a href="#" className="font-semibold text-white">Home</a>
            <a href="#rows">TV Shows</a>
            <a href="#rows">Movies</a>
            <a href="#rows">New & Popular</a>
            <a href="#rows">My List</a>
          </nav>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2 border border-white/20 bg-black/50 px-3 py-2 text-sm text-zinc-200">
            <span aria-hidden="true">⌕</span>
            <input
              value={searchValue}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search movies"
              className="w-40 bg-transparent outline-none placeholder:text-zinc-400 sm:w-56"
            />
          </div>
          <div className="grid h-9 w-9 place-items-center rounded bg-red-600 text-sm font-bold">N</div>
        </div>
      </div>
    </header>
  );
}
