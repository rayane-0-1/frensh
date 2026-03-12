import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export default function HeroSlide() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const authorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.6'
    )
    .fromTo(authorRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    );
  }, []);

  return (
    <section className="bg-[#1B2638] elative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(139,69,19,0.15),transparent_70%)]"
          animate={{ 
            background: [
              'radial-gradient(circle at 30% 70%, rgba(139,69,19,0.15), transparent 70%)',
              'radial-gradient(circle at 70% 30%, rgba(139,69,19,0.1), transparent 70%)',
              'radial-gradient(circle at 30% 70%, rgba(139,69,19,0.15), transparent 70%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8" />
        </motion.div>

        <h1 
          ref={titleRef}
          className="font-playfair text-6xl md:text-8xl font-bold mb-8 leading-tight"
        >
          <span className="block text-white">La littérature</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
            engagée
          </span>
        </h1>

        <p 
          ref={subtitleRef}
          className="font-inter text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Son expression dans <em className="text-amber-400 font-playfair">"Le Dernier Jour d'un Condamné"</em> de Victor Hugo
        </p>

        <div ref={authorRef} className="space-y-4">
          <div className="w-16 h-px bg-white/40 mx-auto" />
          <p className="font-inter text-lg text-white/60">
            Une analyse de l'œuvre engagée de Victor Hugo
          </p>
          <p className="font-inter text-sm text-white/40">
            XIXe siècle • Littérature française • Humanisme
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
