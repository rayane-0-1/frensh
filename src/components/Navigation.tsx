import { motion } from 'framer-motion';

interface NavigationProps {
  slides: Array<{ id: string; title: string }>;
  currentSlide: number;
  onNavigate: (index: number) => void;
}

export default function Navigation({ slides, currentSlide, onNavigate }: NavigationProps) {
  return (
    <motion.nav 
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <div className="flex flex-col space-y-3">
        {slides.map((slide, index) => (
          <motion.button
            key={slide.id}
            onClick={() => onNavigate(index)}
            className="group relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div 
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-amber-400 border-amber-400 shadow-lg shadow-amber-400/50' 
                  : 'bg-transparent border-white/40 hover:border-white/80'
              }`}
            />
            
            {/* Tooltip */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-black/80 backdrop-blur-sm text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap border border-white/20">
                {slide.title}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}
