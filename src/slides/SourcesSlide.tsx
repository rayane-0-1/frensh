import { motion } from 'framer-motion';

export default function SourcesSlide() {
  const sources = [
    {
      category: "Œuvre principale",
      items: [
        "Hugo, Victor. Le Dernier Jour d'un Condamné. Paris: Gallimard, 1829.",
        "Hugo, Victor. Préface de 1832 au Dernier Jour d'un Condamné."
      ]
    },
    {
      category: "Études critiques",
      items: [
        "Brombert, Victor. Victor Hugo and the Visionary Novel. Harvard University Press, 1984.",
        "Gaudon, Jean. Le Temps de la contemplation. Paris: Flammarion, 1969.",
        "Ubersfeld, Anne. Le Roi et le Bouffon. Paris: José Corti, 1974."
      ]
    },
    {
      category: "Contexte historique",
      items: [
        "Badinter, Robert. L'Abolition. Paris: Fayard, 2000.",
        "Petit, Jacques. Barbey d'Aurevilly critique. Paris: Les Belles Lettres, 1963.",
        "Tulard, Jean. La France au XIXe siècle. Paris: PUF, 1995."
      ]
    },
    {
      category: "Littérature engagée",
      items: [
        "Sartre, Jean-Paul. Qu'est-ce que la littérature ? Paris: Gallimard, 1948.",
        "Bourdieu, Pierre. Les Règles de l'art. Paris: Seuil, 1992.",
        "Denis, Benoît. Littérature et engagement. Paris: Seuil, 2000."
      ]
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Sources
            </span>
          </h2>
          <p className="font-inter text-xl text-white/80">
            Références académiques et littéraires
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {sources.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300">
                <h3 className="font-playfair text-2xl font-semibold text-amber-400 mb-6 text-center">
                  {section.category}
                </h3>
                
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (itemIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-orange-400 transition-colors duration-200" />
                        <p className="font-inter text-white/80 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-200">
                          {item}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-amber-400/20 to-orange-500/20 border border-amber-400/30 rounded-2xl p-8 text-center">
            <h4 className="font-playfair text-2xl font-semibold text-amber-400 mb-4">
              Note académique
            </h4>
            <p className="font-inter text-white/90 leading-relaxed max-w-4xl mx-auto">
              Cette présentation s'appuie sur des sources académiques reconnues et des éditions 
              critiques de référence. Pour approfondir l'étude de la littérature engagée et 
              de l'œuvre hugolienne, nous recommandons la consultation des ouvrages cités ainsi 
              que des archives de la Bibliothèque nationale de France.
            </p>
            
            <div className="mt-6 flex justify-center space-x-8 text-sm text-white/60">
              <span>📚 Bibliothèque nationale de France</span>
              <span>🏛️ Archives Victor Hugo</span>
              <span>📖 Société des études romantiques</span>
            </div>
          </div>
        </motion.div>

        {/* End Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400" />
            <div className="w-3 h-3 bg-amber-400 rounded-full" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400" />
          </div>
          <p className="font-inter text-white/60 text-sm mt-4">
            Fin de la présentation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
