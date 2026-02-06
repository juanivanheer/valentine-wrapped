"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Screen1Welcome from "@/components/screens/Screen1Welcome";
import Screen2FirstMeet from "@/components/screens/Screen2FirstMeet";
import Screen3Present from "@/components/screens/Screen3Present";
import Screen4Love1 from "@/components/screens/Screen4Love1";
import Screen5Love2 from "@/components/screens/Screen5Love2";
import Screen6Buildup from "@/components/screens/Screen6Buildup";
import Screen7Reveal from "@/components/screens/Screen7Reveal";
import AudioPlayer from "@/components/AudioPlayer";

const screens = [
  Screen1Welcome,
  Screen2FirstMeet,
  Screen3Present,
  Screen4Love1,
  Screen5Love2,
  Screen6Buildup,
  Screen7Reveal,
];

const pastelColors = [
  "#F8F0C5", // pink
  "#F9F7F9", // lavender
  "#D9D5F4", // peach
  "#F7E9E9", // mint
  "#F0C7D6", // blue
  "#E5AEC6", // coral
];

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [direction, setDirection] = useState(1);
  const [bgColor, setBgColor] = useState(pastelColors[0]);
  const audioStartRef = useRef<(() => void) | null>(null);
  const audioChangeTrackRef = useRef<((track: string) => void) | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = document.createElement("video");
    video.preload = "auto";
    video.src = "/images/bruno-mars.webm";
    video.load();
    videoRef.current = video;

    return () => {
      if (videoRef.current) {
        videoRef.current.src = "";
        videoRef.current.load();
      }
    };
  }, []);

  const nextScreen = () => {
    if (currentScreen < screens.length - 1) {
      setDirection(1);
      setCurrentScreen(currentScreen + 1);
      setBgColor(pastelColors[currentScreen + 1]);
    }
  };

  const prevScreen = () => {
    if (currentScreen > 0) {
      setDirection(-1);
      setCurrentScreen(currentScreen - 1);
      setBgColor(pastelColors[currentScreen - 1]);
    }
  };

  const resetToStart = () => {
    setDirection(-1);
    setCurrentScreen(0);
    setBgColor(pastelColors[0]);
    if (audioChangeTrackRef.current) {
      audioChangeTrackRef.current("/audio/coldplay.mp3");
    }
  };

  const handleStart = () => {
    if (audioStartRef.current) {
      audioStartRef.current();
    }
    nextScreen();
  };

  const handleRevealSurprise = () => {
    if (audioChangeTrackRef.current) {
      audioChangeTrackRef.current("/audio/surprise.mp3");
    }
    nextScreen();
  };

  const CurrentScreenComponent = screens[currentScreen];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const getTransition = () => {
    // Transición lenta de 3 segundos solo cuando vamos ADELANTE de pantalla 6 a 7
    if (currentScreen === 5 && direction === 1) {
      return {
        x: { type: "spring", stiffness: 50, damping: 20 },
        opacity: { duration: 3 },
      };
    }
    // Transición normal para todas las demás situaciones
    return {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    };
  };

  return (
    <main
      className="min-h-screen w-full overflow-hidden transition-colors duration-1000 flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <AudioPlayer
        onRegisterStart={(startFn) => (audioStartRef.current = startFn)}
        onRegisterChangeTrack={(changeFn) =>
          (audioChangeTrackRef.current = changeFn)
        }
      />

      <div className="w-full max-w-md h-screen relative">
        <AnimatePresence initial={true} custom={direction} mode="wait">
          <motion.div
            key={currentScreen}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={getTransition()}
            className="absolute w-full h-full"
          >
            <CurrentScreenComponent
              onNext={
                currentScreen === 0
                  ? handleStart
                  : currentScreen === 5
                    ? handleRevealSurprise
                    : nextScreen
              }
              onPrev={prevScreen}
              onReset={resetToStart}
              isFirst={currentScreen === 0}
              isLast={currentScreen === screens.length - 1}
              preloadedVideoRef={currentScreen === 6 ? videoRef : undefined} // Añadir esta prop
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
