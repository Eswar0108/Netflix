'use client';

import Image from 'next/image';

const navItems = [
  { id: 'all', label: 'Home' },
  { id: 'trending', label: 'Trending' },
  { id: 'top-rated', label: 'Top Rated' },
  { id: 'action', label: 'Action' },
  { id: 'my-list', label: 'My List' }
];

export default function Navbar({ activeFilter, searchValue, onSearchChange, onPlaySomething, onSelectFilter }) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-black via-black/85 to-transparent px-4 py-4 sm:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-8">
          <button
            type="button"
            onClick={() => onSelectFilter('all')}
            className="w-fit text-3xl font-black tracking-[0.35em] text-[#E50914]"
            aria-label="Go to home row selection"
          >
            NETFLIX
          </button>
          <nav
            className="hide-scrollbar flex gap-3 overflow-x-auto pb-1 text-sm font-semibold text-zinc-200"
            aria-label="Browse categories"
          >
            {navItems.map((item) => {
              const isActive = activeFilter === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectFilter(item.id)}
                  className={`whitespace-nowrap rounded-full border px-3 py-1.5 transition ${
                    isActive
                      ? 'border-white bg-white text-black'
                      : 'border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onPlaySomething}
            className="hidden rounded bg-white px-4 py-2 text-sm font-black text-black transition hover:bg-zinc-200 md:inline-flex"
          >
            Play Something
          </button>
          <div className="hidden text-sm font-semibold text-zinc-300 md:block">Children</div>
          <label className="flex items-center gap-2 border border-white/20 bg-black/55 px-3 py-2 text-sm text-zinc-200">
            <span aria-hidden="true">⌕</span>
            <span className="sr-only">Search titles</span>
            <input
              value={searchValue}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search movies"
              aria-label="Search movies"
              className="w-32 bg-transparent font-medium outline-none placeholder:text-zinc-400 sm:w-56"
            />
          </label>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-zinc-900/80 text-sm text-white"
            aria-label="Notifications"
          >
            🔔
          </button>
          <Image src="/profile-avatar.svg" alt="Profile avatar" width={36} height={36} className="rounded" />
        </div>
      </div>
    </header>
  );
}
