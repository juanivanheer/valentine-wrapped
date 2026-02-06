"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface AudioPlayerProps {
  onRegisterStart?: (startFn: () => void) => void;
  onRegisterChangeTrack?: (changeFn: (track: string) => void) => void;
}

export default function AudioPlayer({
  onRegisterStart,
  onRegisterChangeTrack,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(
    "/audio/bruno-mars.mp3",
  );

  const startAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        setShowButton(false);
      })
      .catch((error) => {
        console.log("No se pudo reproducir:", error);
        setShowButton(true);
      });
  };

  const changeTrack = (newTrack: string) => {
    const audio = audioRef.current;
    if (!audio) return;

    // Detener la música actual
    audio.pause();
    audio.currentTime = 0;

    // Cambiar la fuente
    setCurrentTrack(newTrack);

    // Esperar un momento para que se cargue el nuevo track
    setTimeout(() => {
      audio.load();
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("No se pudo reproducir el nuevo track:", error);
          setShowButton(true);
        });
    }, 100);
  };

  useEffect(() => {
    // Registrar las funciones
    if (onRegisterStart) {
      onRegisterStart(startAudio);
    }
    if (onRegisterChangeTrack) {
      onRegisterChangeTrack(changeTrack);
    }
  }, [onRegisterStart, onRegisterChangeTrack]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      startAudio();
    }
  };

  return (
    <>
      {/* Audio element */}
      <audio ref={audioRef} loop preload="auto">
        <source src={currentTrack} type="audio/mpeg" />
        <p>Tu navegador no soporta audio HTML5.</p>
      </audio>

      {/* Botón de reproducción manual si autoplay falla */}
      {showButton && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={togglePlay}
          className="fixed bottom-8 right-8 z-50 bg-white rounded-full p-4 shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </motion.button>
      )}
    </>
  );
}
