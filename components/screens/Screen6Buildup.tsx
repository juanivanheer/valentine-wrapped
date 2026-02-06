"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ScreenProps {
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function Screen6Buildup({ onNext, onPrev }: ScreenProps) {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="h-full flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
      {/* Estrellas brillantes de fondo */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="absolute text-yellow-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
          }}
        >
          ✨
        </motion.div>
      ))}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
        className="mb-8 z-10"
      >
        <span className="text-9xl">🎁</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-4xl font-bold text-gray-800 mb-6 z-10"
      >
        Y ahora...
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
        className="text-2xl text-gray-700 mb-8 max-w-md z-10"
      >
        Todo esto ha sido la presentación de algo especial que tengo para vos 👀
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="z-10"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowHint(true)}
          className="bg-white/80 text-gray-800 px-8 py-4 rounded-full font-semibold text-lg shadow-xl mb-6"
        >
          Presiona para pistas!!
        </motion.button>

        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8"
          >
            <p className="text-xl text-gray-800 mb-2">Pista:</p>
            <p className="text-lg text-gray-700">
              ✈️ Un viaje 
              <br />
              🥞 Comida rica
              <br />
              🎵 Música en vivo
            </p>
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: showHint ? 1 : 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-700 mb-8 italic"
        >
          ¿Lista para descubrirlo?
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
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
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(236, 72, 153, 0.7)",
              "0 0 0 20px rgba(236, 72, 153, 0)",
              "0 0 0 0 rgba(236, 72, 153, 0)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        >
          ¡Ver la sorpresa! 🎉
        </motion.button>
      </motion.div>
    </div>
  );
}
