'use client'

import { motion } from 'framer-motion'

interface ScreenProps {
  onNext: () => void
  onPrev: () => void
  isFirst: boolean
  isLast: boolean
}

const hearts = ['💖', '💝', '💗', '💓', '💕']

export default function Screen4Love1({ onNext, onPrev }: ScreenProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
      {hearts.map((heart, i) => (
        <motion.div
          key={i}
          initial={{ y: '100vh', x: Math.random() * 300 - 150, opacity: 0 }}
          animate={{ 
            y: '-100vh', 
            x: Math.random() * 300 - 150,
            opacity: [0, 1, 1, 0],
            rotate: 360
          }}
          transition={{ 
            duration: 3 + Math.random() * 2,
            delay: i * 0.3,
            repeat: Infinity,
            repeatDelay: 1
          }}
          className="absolute text-4xl"
          style={{ left: `${20 + i * 15}%` }}
        >
          {heart}
        </motion.div>
      ))}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-8 z-10"
      >
        <span className="text-8xl">✨</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-4xl font-bold text-gray-800 mb-6 z-10"
      >
        Lo que más amo de ti
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 max-w-md shadow-xl z-10"
      >
        <p className="text-xl text-gray-800 leading-relaxed mb-4">
          Tu risa es mi canción favorita. Tu mirada, mi hogar.
          Tu amor, mi fuerza.
        </p>
        <p className="text-lg text-gray-700 italic">
          Sos mi persona favorita en todo el universo 💫
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-8 flex gap-4 z-10"
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
  )
}
