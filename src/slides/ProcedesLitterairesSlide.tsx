import { motion } from 'framer-motion';

export default function ProcedesLitterairesSlide() {
  const procedes = [
    {
      title: "Narration à la première personne",
      description: "Le 'je' crée une intimité troublante et force l'identification du lecteur au condamné",
      example: "\"Je suis condamné à mort. Voilà cinq ou six semaines que j'habite avec cette pensée...\"",
      technique: "Immersion psychologique"
    },
    {
      title: "Registre pathétique",
      description: "Évocation de la pitié et de l'émotion pour toucher la sensibilité du lecteur",
      example: "Les descriptions de la souffrance morale et de l'angoisse existentielle",
      technique: "Manipulation émotionnelle"
    },
    {
      title: "Introspection psychologique",
      description: "Analyse minutieuse des pensées et sentiments du personnage face à la mort",
      example: "L'exploration des souvenirs, des regrets et des peurs du condamné",
      technique: "Réalisme psychologique"
    },
    {
      title: "Critique sociale implicite",
      description: "Dénonciation indirecte des institutions et des mentalités de l'époque",
      example: "La description du système carcéral et de l'attitude de la société",
      technique: "Satire sociale"
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
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
            Procédés
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              littéraires
            </span>
          </h2>
          <p className="font-inter text-xl text-white/80 max-w-4xl mx-auto">
            Les techniques narratives au service de l'engagement
          </p>
        </motion.div>

        <div className="space-y-8">
          {procedes.map((procede, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
            >
              {/* Content Card */}
              <div className="flex-1">
                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-playfair text-2xl font-bold text-amber-400">
                      {procede.title}
                    </h3>
                    <span className="bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full text-sm font-inter">
                      {procede.technique}
                    </span>
                  </div>
                  
                  <p className="font-inter text-white/80 mb-6 leading-relaxed">
                    {procede.description}
                  </p>
                  
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                    <p className="font-inter text-white/70 italic text-sm leading-relaxed">
                      {procede.example}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Visual Element */}
              <div className="w-32 h-32 flex-shrink-0">
                <motion.div
                  className="w-full h-full bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full border border-amber-400/30 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-amber-400/20 to-orange-500/20 border border-amber-400/30 rounded-2xl p-8 max-w-5xl mx-auto">
            <h4 className="font-playfair text-2xl font-semibold text-amber-400 mb-4">
              Une maîtrise technique au service de l'émotion
            </h4>
            <p className="font-inter text-white/90 leading-relaxed text-lg">
              Hugo combine habilement ces procédés pour créer une œuvre qui transcende 
              la simple fiction et devient un véritable instrument de persuasion morale et politique.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
