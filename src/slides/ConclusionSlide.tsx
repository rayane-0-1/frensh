import { motion } from 'framer-motion';

export default function ConclusionSlide() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 bg-[#1B2638]" >
      <div className="max-w-6xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-8">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Conclusion
            </span>
          </h2>
        </motion.div>

        {/* Main Conclusion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-amber-400/20 to-orange-500/20 border border-amber-400/30 rounded-2xl p-12">
            <h3 className="font-playfair text-3xl font-semibold text-amber-400 mb-8">
              L'importance de la littérature engagée
            </h3>
            
            <div className="space-y-6 font-inter text-lg text-white/90 leading-relaxed">
              <p>
                <strong className="text-amber-300">"Le Dernier Jour d'un Condamné"</strong> illustre 
                parfaitement le pouvoir de la littérature engagée : transformer un débat abstrait 
                en expérience humaine universelle.
              </p>
              
              <p>
                Victor Hugo démontre que l'écrivain peut être un <strong className="text-amber-300">acteur 
                du changement social</strong>, utilisant son art pour éclairer les consciences et 
                influencer les décisions politiques.
              </p>
              
              <p>
                Cette œuvre reste un <strong className="text-amber-300">modèle intemporel</strong> de 
                la façon dont la littérature peut servir l'humanité en défendant les valeurs 
                de justice, de dignité et de compassion.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Takeaways */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Pouvoir de l'émotion",
              content: "L'art touche là où les arguments rationnels échouent",
              
            },
            {
              title: "Responsabilité de l'artiste",
              content: "L'écrivain comme conscience morale de son époque",
              
            },
            {
              title: "Impact durable",
              content: "Une œuvre qui continue d'inspirer les combats pour la justice",
              
            }
          ].map((takeaway, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">{takeaway.icon}</div>
                <h4 className="font-playfair text-xl font-semibold text-amber-400 mb-4">
                  {takeaway.title}
                </h4>
                <p className="font-inter text-white/80 leading-relaxed">
                  {takeaway.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute -top-6 -left-6 text-5xl text-amber-400/30 font-playfair">"</div>
            <div className="absolute -bottom-6 -right-6 text-5xl text-amber-400/30 font-playfair">"</div>
            
            <blockquote className="font-playfair text-2xl md:text-3xl text-white leading-relaxed italic max-w-4xl mx-auto">
              Quand l'art se met au service de l'humanité, il devient immortel
            </blockquote>
            
            <p className="font-inter text-amber-400 text-lg mt-6">
              — L'héritage de Victor Hugo
            </p>
          </div>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
