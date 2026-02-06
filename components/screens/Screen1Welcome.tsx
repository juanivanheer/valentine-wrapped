'use client'

import { motion } from 'framer-motion'

interface ScreenProps {
  onNext: () => void
  onPrev: () => void
  isFirst: boolean
  isLast: boolean
}

export default function Screen1Welcome({ onNext }: ScreenProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 text-center">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.2
        }}
        className="mb-8"
      >
        <span className="text-8xl">💕</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-4xl font-bold text-gray-800 mb-6"
      >
        Feliz San Valentin ❤️
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-lg text-gray-700 mb-8 max-w-sm"
      >
        Estos años estuvieron llenos de momentos increíbles con vos.
        Desliza para descubrir algo especial.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
      >
        Comenzar ✨
      </motion.button>
    </div>
  )
}
