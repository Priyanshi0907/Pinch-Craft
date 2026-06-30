import React from 'react';
import { motion } from 'framer-motion';

interface CursorProps {
  x: number;
  y: number;
  pinchDetected: boolean;
}

export const Cursor: React.FC<CursorProps> = ({ x, y, pinchDetected }) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-[100] overflow-hidden">
      <motion.div
        className="absolute w-8 h-8 rounded-full border-2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{
          left: `${x * 100}%`,
          top: `${y * 100}%`,
        }}
        animate={{
          scale: pinchDetected ? 0.75 : 1,
          borderColor: pinchDetected ? '#10B981' : '#00f0ff', // Emerald-green for pinch, neon-yellow for hover
          boxShadow: pinchDetected
            ? '0 0 20px #10B981, inset 0 0 10px #10B981, 0 0 40px rgba(16, 185, 129, 0.4)'
            : '0 0 20px #00f0ff, inset 0 0 10px #00f0ff, 0 0 40px rgba(0, 240, 255, 0.4)',
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 28 }}
      >
        {/* Core tracking dot */}
        <motion.div
          className="w-2.5 h-2.5 rounded-full"
          animate={{
            backgroundColor: pinchDetected ? '#10B981' : '#00f0ff',
            scale: pinchDetected ? 1.35 : 1,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 22 }}
        />
        
        {/* Radar-like expansion wave ripple when pinch is held */}
        {pinchDetected && (
          <motion.div
            className="absolute inset-0 rounded-full border border-[#10B981]"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 2.3, opacity: 0 }}
            transition={{ duration: 0.6, repeat: Infinity, ease: 'easeOut' }}
          />
        )}
      </motion.div>
    </div>
  );
};