export default function Loading() {
  return (
    <main className="min-h-screen bg-[#141414] px-4 py-10 sm:px-8">
      <div className="mb-10 h-12 w-56 animate-pulse rounded bg-zinc-800" />
      <div className="mb-12 h-[60vh] animate-pulse rounded-2xl bg-zinc-900" />
      <div className="space-y-10">
        {Array.from({ length: 4 }).map((_, rowIndex) => (
          <section key={rowIndex} className="space-y-4">
            <div className="h-8 w-48 animate-pulse rounded bg-zinc-800" />
            <div className="flex gap-4 overflow-hidden">
              {Array.from({ length: 5 }).map((__, cardIndex) => (
                <div key={cardIndex} className="h-[330px] min-w-[220px] animate-pulse rounded-md bg-zinc-900" />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
