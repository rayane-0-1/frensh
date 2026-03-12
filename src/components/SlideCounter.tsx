import { motion } from 'framer-motion';

interface SlideCounterProps {
  current: number;
  total: number;
}

export default function SlideCounter({ current, total }: SlideCounterProps) {
  return (
    <motion.div 
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
        <span className="text-white/80 font-inter text-sm">
          <span className="text-amber-400 font-semibold">{current}</span>
          <span className="mx-2">/</span>
          <span>{total}</span>
        </span>
      </div>
    </motion.div>
  );
}
