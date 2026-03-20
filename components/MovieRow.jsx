import Image from 'next/image';

export default function MovieRow({ title, movies, onSelectMovie }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <div className="hide-scrollbar flex gap-4 overflow-x-auto pb-4">
        {movies.map((movie) => (
          <button
            key={`${title}-${movie.id}`}
            onClick={() => onSelectMovie(movie)}
            className="group relative min-w-[220px] overflow-hidden rounded-md bg-zinc-900 text-left transition duration-300 hover:scale-105 hover:shadow-[0_18px_40px_rgba(0,0,0,0.6)]"
          >
            <div className="relative h-[330px] w-[220px] overflow-hidden">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="line-clamp-2 text-lg font-bold text-white">{movie.title}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
