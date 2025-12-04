'use client';

import dynamic from 'next/dynamic';

// Import MusicPlayer with SSR disabled
const MusicPlayer = dynamic(
  () => import('@/components/MusicPlayer'),
  { ssr: false }
);

export default function MusicPlayerWrapper() {
  return <MusicPlayer />;
}
