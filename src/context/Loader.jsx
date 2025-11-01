import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ isVisible = true }) {
  return (
    <AnimatePresence>
      {isVisible && ( 
        <motion.div
          key="loader"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.6, ease: 'easeInOut' },
          }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#1f0036] via-black to-[#120e24] flex items-center justify-center overflow-hidden"
        >
          {/* Background glow or orbs */}
          <div className="absolute w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-30 top-1/4 left-1/4 animate-pulse" />
            <div className="absolute w-64 h-64 bg-indigo-500 rounded-full blur-2xl opacity-30 bottom-1/4 right-1/4 animate-ping" />
            <div className="absolute w-48 h-48 bg-pink-500 rounded-full blur-2xl opacity-40 top-1/3 right-1/3 animate-spin-slow" />
          </div>

          {/* Center content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative z-10 text-center"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 drop-shadow-md py-2">
              Entering Junyl's Portfolio
            </h1>
            <p className="mt-2 text-sm text-gray-300">
              Please wait a moment...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
