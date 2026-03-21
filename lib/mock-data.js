const demoMovies = [
  {
    id: 'demo-1',
    title: 'Midnight City',
    overview: 'A rogue courier races through a neon megacity to expose the conspiracy that controls every screen in town.',
    releaseDate: '2026-01-12',
    rating: '8.8',
    mediaType: 'movie',
    posterUrl: '/mock/midnight-city-poster.svg',
    backdropUrl: '/mock/midnight-city-backdrop.svg'
  },
  {
    id: 'demo-2',
    title: 'Orbit House',
    overview: 'A luxury hotel in orbit turns into a pressure-cooker thriller when a sabotage plot cuts it off from Earth.',
    releaseDate: '2025-11-02',
    rating: '8.5',
    mediaType: 'movie',
    posterUrl: '/mock/orbit-house-poster.svg',
    backdropUrl: '/mock/orbit-house-backdrop.svg'
  },
  {
    id: 'demo-3',
    title: 'Shadow File',
    overview: 'An analyst decodes a stolen archive that can rewrite political history if it falls into the wrong hands.',
    releaseDate: '2024-08-19',
    rating: '8.2',
    mediaType: 'movie',
    posterUrl: '/mock/shadow-file-poster.svg',
    backdropUrl: '/mock/shadow-file-backdrop.svg'
  },
  {
    id: 'demo-4',
    title: 'Red Line',
    overview: 'A suspended detective returns for one final ride on the night train that never reaches its last stop.',
    releaseDate: '2026-02-01',
    rating: '8.6',
    mediaType: 'movie',
    posterUrl: '/mock/red-line-poster.svg',
    backdropUrl: '/mock/red-line-backdrop.svg'
  },
  {
    id: 'demo-5',
    title: 'Velvet Night',
    overview: 'In a glamorous city of secrets, a nightclub singer is drawn into a web of spies, money, and revenge.',
    releaseDate: '2025-05-14',
    rating: '7.9',
    mediaType: 'movie',
    posterUrl: '/mock/velvet-night-poster.svg',
    backdropUrl: '/mock/velvet-night-backdrop.svg'
  },
  {
    id: 'demo-6',
    title: 'Solar Run',
    overview: 'A burned-out pilot is pulled back into service for a desperate chase across a sun-scorched frontier.',
    releaseDate: '2024-09-07',
    rating: '8.1',
    mediaType: 'movie',
    posterUrl: '/mock/solar-run-poster.svg',
    backdropUrl: '/mock/solar-run-backdrop.svg'
  },
  {
    id: 'demo-7',
    title: 'Atlas Zero',
    overview: 'A cartographer discovers an unlisted continent and becomes the target of everyone who wants it erased.',
    releaseDate: '2026-03-10',
    rating: '8.4',
    mediaType: 'movie',
    posterUrl: '/mock/atlas-zero-poster.svg',
    backdropUrl: '/mock/atlas-zero-backdrop.svg'
  },
  {
    id: 'demo-8',
    title: 'Silent Code',
    overview: 'A cryptographer must solve a dead language hidden in global telecom traffic before midnight.',
    releaseDate: '2025-01-28',
    rating: '8.0',
    mediaType: 'movie',
    posterUrl: '/mock/silent-code-poster.svg',
    backdropUrl: '/mock/silent-code-backdrop.svg'
  }
];

export const demoRows = [
  { id: 'trending', title: 'Trending Now', movies: demoMovies.slice(0, 6) },
  { id: 'top-rated', title: 'Top Rated', movies: [...demoMovies].sort((a, b) => Number(b.rating) - Number(a.rating)) },
  { id: 'action', title: 'Action Movies', movies: [demoMovies[0], demoMovies[3], demoMovies[5], demoMovies[6]] },
  { id: 'comedy', title: 'Comedy Movies', movies: [demoMovies[1], demoMovies[4], demoMovies[7], demoMovies[2]] }
];

export const demoFeatured = demoMovies[0];
