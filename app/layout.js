import './globals.css';

export const metadata = {
  title: 'Netflix Clone',
  description: 'A Netflix-inspired clone built with Next.js App Router, Tailwind CSS, axios, and TMDB data.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
