"use client";

import { motion } from "framer-motion";

interface ScreenProps {
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function Screen5Love2({ onNext, onPrev }: ScreenProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: [0, 10, -10, 10, 0] }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-8"
      >
        <span className="text-8xl">🌟</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="text-4xl font-bold text-gray-800 mb-8"
      >
        Nuestros momentos juntos
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="space-y-6 max-w-md"
      >
        {[
          { emoji: "☕", text: "Los desayunos compartidos" },
          { emoji: "🎬", text: "Cada serie que vimos juntos" },
          { emoji: "🎵", text: "Bailar sin razón en el living" },
          { emoji: "🤗", text: "Tus abrazos que lo curan todo" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + i * 0.15 }}
            whileHover={{ scale: 1.05, x: 10 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 shadow-lg"
          >
            <span className="text-4xl">{item.emoji}</span>
            <p className="text-lg text-gray-800 font-medium text-left">
              {item.text}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        className="mt-8 text-lg text-gray-700 italic"
      >
        Cada momento con vos es un recuerdo que guardaré por siempre...
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="mt-8 flex gap-4"
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          Siguiente →
        </motion.button>
      </motion.div>
    </div>
  );
}
