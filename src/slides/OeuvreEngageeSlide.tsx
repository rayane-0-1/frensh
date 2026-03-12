import { motion } from 'framer-motion';

export default function OeuvreEngageeSlide() {
  const critiques = [
    {
      title: "Récit émotionnel",
      description: "Hugo utilise la première personne pour créer une intimité bouleversante avec le lecteur",
      
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Souffrance psychologique",
      description: "L'exploration minutieuse de l'angoisse et de la terreur du condamné",
      
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Critique de la justice",
      description: "Dénonciation d'un système judiciaire inhumain et de ses dysfonctionnements",
      
      color: "from-red-400 to-red-600"
    },
    {
      title: "Critique sociale",
      description: "Remise en question des valeurs et des institutions de la société du XIXe siècle",
      
      color: "from-amber-400 to-orange-600"
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
            Une œuvre
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              engagée
            </span>
          </h2>
          <p className="font-inter text-xl text-white/80 max-w-4xl mx-auto">
            Comment Hugo transforme son roman en plaidoyer contre la peine de mort
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {critiques.map((critique, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${critique.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="text-4xl mb-4 text-center">
                  {critique.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-playfair text-xl font-semibold text-amber-400 mb-4 text-center">
                  {critique.title}
                </h3>
                
                {/* Description */}
                <p className="font-inter text-white/80 text-sm leading-relaxed text-center">
                  {critique.description}
                </p>
                
                {/* Hover Effect Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${critique.color} w-0 group-hover:w-full transition-all duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-amber-400/20 to-orange-500/20 border border-amber-400/30 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h4 className="font-playfair text-2xl font-semibold text-amber-400 mb-4">
                L'art au service de l'humanité
              </h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-inter text-white/90 leading-relaxed mb-4">
                  Hugo ne se contente pas de raconter une histoire : il crée une expérience 
                  émotionnelle qui force le lecteur à s'identifier au condamné.
                </p>
                <p className="font-inter text-white/80 leading-relaxed">
                  Cette stratégie narrative transforme un débat abstrait en réalité humaine tangible.
                </p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <blockquote className="font-inter text-white/90 italic text-center">
                  "Il faut que la société voie sa faute dans nos souffrances"
                </blockquote>
                <p className="font-inter text-amber-400 text-sm text-center mt-2">
                  - Le Dernier Jour d'un Condamné
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
