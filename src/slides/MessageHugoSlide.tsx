import { motion } from 'framer-motion';

export default function MessageHugoSlide() {
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
            Message de
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Victor Hugo
            </span>
          </h2>
        </motion.div>

        {/* Main Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative">
            <div className="absolute -top-8 -left-8 text-6xl text-amber-400/30 font-playfair">"</div>
            <div className="absolute -bottom-8 -right-8 text-6xl text-amber-400/30 font-playfair">"</div>
            
            <blockquote className="font-playfair text-3xl md:text-4xl text-white leading-relaxed italic max-w-4xl mx-auto">
              Il faut que la société voie sa faute dans nos souffrances et qu'elle renonce 
              à cette justice barbare qui déshonore la civilisation
            </blockquote>
            
            <p className="font-inter text-amber-400 text-lg mt-6">
              — Victor Hugo, préface de 1832
            </p>
          </div>
        </motion.div>

        {/* Key Messages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Humanisme universel",
              content: "Chaque être humain a une dignité inaliénable, même le criminel le plus endurci",
            },
            {
              title: "Justice réparatrice",
              content: "La société doit chercher à réhabiliter plutôt qu'à détruire",
              
            },
            {
              title: "Progrès moral",
              content: "L'abolition de la peine de mort marque l'évolution vers une civilisation plus éclairée",
              
            }
          ].map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">{message.icon}</div>
                <h3 className="font-playfair text-xl font-semibold text-amber-400 mb-4">
                  {message.title}
                </h3>
                <p className="font-inter text-white/80 leading-relaxed">
                  {message.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophical Foundation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-amber-400/20 to-orange-500/20 border border-amber-400/30 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="font-playfair text-2xl font-semibold text-amber-400 mb-4">
                  L'argument moral contre la peine capitale
                </h4>
                <div className="space-y-4 font-inter text-white/90">
                  <p className="leading-relaxed">
                    <strong className="text-amber-300">Irréversibilité :</strong> L'erreur judiciaire 
                    devient irréparable avec la peine de mort.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-amber-300">Inefficacité :</strong> La peine capitale 
                    n'a pas d'effet dissuasif prouvé sur la criminalité.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-amber-300">Inhumanité :</strong> L'État ne doit pas 
                    reproduire la violence qu'il condamne.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <motion.div
                  className="inline-block bg-white/10 rounded-full p-8 border border-white/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  
                </motion.div>
                <p className="font-inter text-white/70 mt-4 italic">
                  "La justice sans humanité n'est que vengeance"
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
