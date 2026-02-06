"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface ScreenProps {
  onNext: () => void;
  onPrev: () => void;
  onReset: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function Screen7Reveal({ onPrev, onReset }: ScreenProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const confettiTimer = setTimeout(() => setShowConfetti(true), 3500);
    const backgroundTimer = setTimeout(() => setShowBackground(true), 6000);

    return () => {
      clearTimeout(confettiTimer);
      clearTimeout(backgroundTimer);
    };
  }, []);

  useEffect(() => {
    if (showBackground && videoRef.current) {
      videoRef.current.play();
    }
  }, [showBackground]);

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {showBackground && (
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/images/bruno-mars.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white/90" />
        </motion.div>
      )}

      {showConfetti && (
        <>
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -100, x: Math.random() * 400 - 200, rotate: 0 }}
              animate={{
                y: window.innerHeight + 100,
                x: Math.random() * 400 - 200 + (Math.random() - 0.5) * 200,
                rotate: Math.random() * 720,
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 0.5,
                repeat: Infinity,
                repeatDelay: Math.random() * 2,
              }}
              className="absolute w-3 h-3 rounded-full z-20"
              style={{
                backgroundColor: [
                  "#FFB6C1",
                  "#E6E6FA",
                  "#FFDAB9",
                  "#98FF98",
                  "#87CEEB",
                ][Math.floor(Math.random() * 5)],
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </>
      )}

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 3.3, type: "spring", duration: 1 }}
        className="mb-4 z-10"
      >
        <span className="text-7xl">🎉</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.6 }}
        className="text-4xl font-bold text-gray-800 mb-4 z-10"
      >
        ¡NOS VAMOS A MADRID!
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.9 }}
        className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 max-w-md shadow-2xl z-10 mb-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 4.2, type: "spring" }}
          className="mb-4"
        >
          <span className="text-6xl">🎤✈️</span>
        </motion.div>

        <div className="space-y-3 text-base text-gray-800">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 4.4 }}
          >
            <p className="font-bold text-xl mb-1">Bruno Mars en concierto</p>
            <p className="text-gray-700">Madrid, España 🇪🇸</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 4.6 }}
            className="border-t border-gray-300 pt-3"
          >
            <p className="font-semibold text-lg mb-1">📅 Fechas</p>
            <p className="text-gray-700">9 - 13 de Julio 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 4.8 }}
            className="border-t border-gray-300 pt-3"
          >
            <p className="font-semibold text-lg mb-1">✨ Todo incluido</p>
            <p className="text-gray-700 text-sm">
              ✅ Entradas al concierto
              <br />
              ✅ Airbnb reservado
              <br />✅ 4 días en Madrid
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 5 }}
            className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-3 mt-3"
          >
            <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              ¡Todo está pago!
            </p>
            <p className="text-gray-700 mt-1 text-sm">
              Solo tenés que preparar la carry on 🧳💕
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 5.2 }}
        className="text-lg text-gray-800 max-w-md z-10 mb-4 font-medium"
      >
        Porque te mereces el mundo entero,
        <br />y este es solo el comienzo... 💕
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 5.4 }}
        className="flex gap-4 z-10"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrev}
          className="bg-white/70 text-gray-800 px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          ← Volver
        </motion.button>
        {onReset && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onReset}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            🔄 Ver de nuevo
          </motion.button>
        )}
      </motion.div>
    </div>
  );
}
