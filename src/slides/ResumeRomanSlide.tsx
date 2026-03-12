import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ResumeRomanSlide() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timelineItems = timelineRef.current?.querySelectorAll('.story-phase');
    
    if (timelineItems) {
      gsap.set(timelineItems, { scale: 0.8, opacity: 0 });
      
      ScrollTrigger.create({
        trigger: timelineRef.current,
        start: 'top 70%',
        onEnter: () => {
          gsap.to(timelineItems, {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: 'back.out(1.7)'
          });
        }
      });
    }
  }, []);

  const storyPhases = [
    {
      phase: "Condamnation",
      time: "6 semaines avant",
      description: "Le narrateur se souvient du verdict de mort prononcé contre lui",
      emotion: "Choc et incrédulité"
    },
    {
      phase: "Prison",
      time: "Dernières semaines",
      description: "Réflexions sur sa vie, ses regrets, sa famille qu'il ne reverra plus",
      emotion: "Mélancolie et nostalgie"
    },
    {
      phase: "Transfert",
      time: "Dernier jour",
      description: "Transport vers la Conciergerie, préparatifs de l'exécution",
      emotion: "Angoisse croissante"
    },
    {
      phase: "Dernières heures",
      time: "Avant l'exécution",
      description: "Confrontation avec la réalité de la mort imminente",
      emotion: "Terreur absolue"
    }
  ];

  return (
    <section className="bg-[#1B2638] relative min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
            Résumé du
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              roman
            </span>
          </h2>
          <p className="font-inter text-xl text-white/80 max-w-4xl mx-auto">
            Le récit poignant d'un condamné à mort racontant ses dernières heures
          </p>
        </motion.div>

        <div ref={timelineRef} className="relative">
          {/* Central Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 via-orange-500 to-red-600" />
          
          <div className="space-y-16">
            {storyPhases.map((phase, index) => (
              <div key={index} className={`story-phase flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <motion.div
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="mb-4">
                      <h3 className="font-playfair text-2xl font-bold text-amber-400 mb-2">
                        {phase.phase}
                      </h3>
                      <p className="font-inter text-sm text-orange-400 font-semibold">
                        {phase.time}
                      </p>
                    </div>
                    <p className="font-inter text-white/80 mb-4 leading-relaxed">
                      {phase.description}
                    </p>
                    <div className="inline-block bg-red-500/20 border border-red-500/30 rounded-full px-3 py-1">
                      <span className="font-inter text-sm text-red-300">
                        {phase.emotion}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="w-2/12 flex justify-center">
                  <motion.div
                    className="w-6 h-6 bg-amber-400 rounded-full border-4 border-slate-900 z-10 shadow-lg shadow-amber-400/50"
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl p-8 max-w-4xl mx-auto">
            <p className="font-inter text-lg text-white/90 italic leading-relaxed">
              "À travers ce récit intime et bouleversant, Hugo nous plonge dans l'esprit d'un homme 
              face à sa propre mortalité, transformant un débat politique en tragédie humaine universelle."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
