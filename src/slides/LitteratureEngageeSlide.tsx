import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function LitteratureEngageeSlide() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const conceptsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const conceptCards = conceptsRef.current?.querySelectorAll(".concept-card");

    if (conceptCards) {
      gsap.set(conceptCards, { y: 100, opacity: 0 });

      ScrollTrigger.create({
        trigger: conceptsRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(conceptCards, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
          });
        }
      });
    }
  }, []);


  const concepts = [
    {
      title: "Défense d'idées morales",
      description:
        "Les écrivains utilisent leur plume pour défendre des valeurs humanistes et des principes éthiques fondamentaux."
    },
    {
      title: "Outil de changement social",
      description:
        "La littérature devient un moyen d'influencer la société et de promouvoir des réformes."
    },
    {
      title: "Influence sur l'opinion publique",
      description:
        "Les œuvres littéraires façonnent la conscience collective."
    }
  ];
  

  return (
    <section className="bg-[#1B2638] relative min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            ref={titleRef}
            className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Qu'est-ce que la
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              littérature engagée ?
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto" />
        </motion.div>

        <div ref={conceptsRef} className="grid md:grid-cols-3 gap-8">
          {concepts.map((concept, index) => (
            <div key={index} className="concept-card">
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-4xl mb-6 text-center">{concept.icon}</div>
                <h3 className="font-playfair text-2xl font-semibold text-amber-400 mb-4 text-center">
                  {concept.title}
                </h3>
                <p className="font-inter text-white/80 leading-relaxed text-center">
                  {concept.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-amber-400/20 to-orange-500/20 border border-amber-400/30 rounded-xl p-8 max-w-4xl mx-auto">
            <p className="font-inter text-lg text-white/90 italic">
              "La littérature engagée transforme l'art en arme de combat pour la justice et l'humanité."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
