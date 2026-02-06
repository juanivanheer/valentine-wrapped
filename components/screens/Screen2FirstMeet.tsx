"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ScreenProps {
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function Screen2FirstMeet({ onNext, onPrev }: ScreenProps) {
  return (
    <div className="h-full flex flex-col items-center justify-around p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Cuando nos conocimos
        </h2>
        <p className="text-sm text-gray-600">El principio de algo mágico</p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring" }}
        className="w-full max-w-sm aspect-square bg-white/50 rounded-3xl shadow-xl overflow-hidden flex items-center justify-center relative"
      >
        {
          <Image
            src="/images/first-meet.jpg"
            alt="Cuando nos conocimos"
            fill
            className="object-cover"
          />
        }
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center"
      >
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Recuerdo perfectamente ese día. Tu sonrisa iluminó todo y supe que
          algo especial estaba comenzando...
        </p>

        <div className="flex gap-4 justify-center">
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
        </div>
      </motion.div>
    </div>
  );
}
