'use client';

import { useState, useEffect } from 'react';
import { Play, Pause, Music } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with local MP3 file
    const audioElement = new Audio('/music/background-music.mp3');
    audioElement.loop = true;
    setAudio(audioElement);

    // Cleanup on unmount
    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.src = '';
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(error => console.log("Audio play failed:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary/30 transition-colors duration-300 shadow-lg border border-primary/20"
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
      title={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? (
        <Pause className="w-6 h-6" />
      ) : (
        <Music className="w-6 h-6" />
      )}
    </button>
  );
}
