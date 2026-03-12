import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ContexteHistoriqueSlide() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    
    if (timelineItems) {
      gsap.set(timelineItems, { x: -100, opacity: 0 });
      
      ScrollTrigger.create({
        trigger: timelineRef.current,
        start: 'top 70%',
        onEnter: () => {
          gsap.to(timelineItems, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.3,
            ease: 'power3.out'
          });
        }
      });
    }
  }, []);

  const timelineEvents = [
    {
      year: "1789",
      title: "Révolution française",
      description: "Remise en question des institutions et de la justice d'Ancien Régime"
    },
    {
      year: "1810",
      title: "Code pénal napoléonien",
      description: "Maintien de la peine de mort pour de nombreux crimes"
    },
    {
      year: "1820-1830",
      title: "Débats intellectuels",
      description: "Les philosophes et écrivains questionnent la légitimité de la peine capitale"
    },
    {
      year: "1829",
      title: "Publication de l'œuvre",
      description: "Hugo publie 'Le Dernier Jour d'un Condamné' de manière anonyme"
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
            Contexte
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              historique
            </span>
          </h2>
          <p className="font-inter text-xl text-white/80 max-w-3xl mx-auto">
            Le XIXe siècle français et le débat sur la peine de mort
          </p>
        </motion.div>

        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400 to-orange-500" />
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="timeline-item relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-amber-400 rounded-full border-4 border-slate-900 z-10" />
                
                {/* Content */}
                <div className="ml-20">
                  <motion.div
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex items-center mb-3">
                      <span className="font-playfair text-2xl font-bold text-amber-400 mr-4">
                        {event.year}
                      </span>
                      <h3 className="font-playfair text-xl font-semibold text-white">
                        {event.title}
                      </h3>
                    </div>
                    <p className="font-inter text-white/80 leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-amber-400/20 to-orange-500/20 border border-amber-400/30 rounded-xl p-8">
            <h4 className="font-playfair text-2xl font-semibold text-amber-400 mb-4">
              Victor Hugo, humaniste et penseur politique
            </h4>
            <p className="font-inter text-white/90 leading-relaxed">
              Dans ce contexte d'effervescence intellectuelle, Hugo s'impose comme une voix majeure 
              du mouvement humaniste, utilisant la littérature pour influencer les consciences et 
              les débats politiques de son époque.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
