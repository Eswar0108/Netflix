import HomeScreen from '@/components/HomeScreen';
import { getHomePageData } from '@/lib/tmdb';

export const revalidate = 3600;

export default async function HomePage() {
  const { featured, rows } = await getHomePageData();

  return <HomeScreen featured={featured} rows={rows} />;
}
