import Image from 'next/image';

export default function Banner({ movie, onMoreInfo }) {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-black px-4 pb-16 pt-20 sm:px-8">
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
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-[60vh] max-w-2xl flex-col justify-end gap-5 pt-24">
        <span className="text-sm font-semibold uppercase tracking-[0.45em] text-zinc-200">Featured Movie</span>
        <h1 className="text-shadow-hero text-4xl font-extrabold sm:text-6xl">{movie.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-200">
          <span className="font-semibold text-green-400">{movie.rating} Rating</span>
          <span>{movie.releaseDate}</span>
          <span className="border border-white/30 px-2 py-0.5">HD</span>
        </div>
        <p className="max-w-xl text-base leading-7 text-zinc-200 sm:text-lg">{movie.overview}</p>
        <div className="flex flex-wrap gap-4">
          <button className="rounded bg-white px-8 py-3 font-semibold text-black transition hover:bg-zinc-200">▶ Play</button>
          <button
            onClick={() => onMoreInfo(movie)}
            className="rounded bg-zinc-500/80 px-8 py-3 font-semibold text-white transition hover:bg-zinc-500"
          >
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}
