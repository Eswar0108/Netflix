import Image from 'next/image';

export default function MovieModal({ movie, onClose }) {
  if (!movie) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4" onClick={onClose}>
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-xl bg-zinc-950 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/70 text-xl text-white"
        >
          ✕
        </button>

        <div className="relative h-64 w-full sm:h-80">
          {movie.backdropUrl ? (
            <Image src={movie.backdropUrl} alt={movie.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          ) : (
            <div className="h-full w-full bg-zinc-800" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        </div>

        <div className="space-y-4 p-6 sm:p-8">
          <h3 className="text-3xl font-bold text-white">{movie.title}</h3>
          <div className="flex flex-wrap gap-3 text-sm text-zinc-300">
            <span className="font-semibold text-green-400">{movie.rating} Rating</span>
            <span>{movie.releaseDate}</span>
            <span className="capitalize">{movie.mediaType}</span>
          </div>
          <p className="text-base leading-7 text-zinc-200">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
