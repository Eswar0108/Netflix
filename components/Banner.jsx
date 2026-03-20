import Image from 'next/image';

export default function Banner({ movie, onMoreInfo, onAddToList, isInMyList }) {
  return (
    <section className="relative min-h-[82vh] overflow-hidden bg-black px-4 pb-20 pt-16 sm:px-8">
      <div className="absolute inset-0">
        {movie.backdropUrl ? (
          <Image
            src={movie.backdropUrl}
            alt={movie.title}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-800" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/35 to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-[72vh] max-w-3xl flex-col justify-end gap-6 pt-24">
        <span className="text-sm font-black uppercase tracking-[0.55em] text-zinc-100">Netflix Featured</span>
        <h1 className="text-shadow-hero text-5xl font-black leading-none tracking-tight sm:text-7xl">{movie.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-zinc-100">
          <span className="font-black text-green-400">{movie.rating} Rating</span>
          <span>{movie.releaseDate}</span>
          <span className="border border-white/30 px-2 py-0.5">HD</span>
        </div>
        <p className="max-w-2xl text-base leading-7 text-zinc-200 sm:text-lg">{movie.overview}</p>
        <div className="flex flex-wrap gap-4 pt-2">
          <button className="rounded bg-white px-8 py-3 text-base font-extrabold text-black transition hover:bg-zinc-200">▶ Play</button>
          <button
            onClick={() => onMoreInfo(movie)}
            className="rounded bg-zinc-500/80 px-8 py-3 text-base font-extrabold text-white transition hover:bg-zinc-500"
          >
            More Info
          </button>
          <button
            onClick={() => onAddToList(movie)}
            className="rounded border border-white/30 bg-black/35 px-6 py-3 text-base font-extrabold text-white transition hover:bg-black/55"
          >
            {isInMyList ? '✓ In My List' : '+ My List'}
          </button>
        </div>
      </div>
    </section>
  );
}
