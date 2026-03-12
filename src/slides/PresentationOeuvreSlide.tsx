import { motion } from 'framer-motion';

export default function PresentationOeuvreSlide() {
  return (
    <section className="bg-[#1B2638] relative min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Book Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Book Cover */}
              <motion.div
                className="bg-gradient-to-br from-amber-900 to-amber-700 rounded-lg shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-amber-100 rounded p-6 text-center">
                  <h3 className="font-playfair text-2xl font-bold text-amber-900 mb-4">
                    Le Dernier Jour
                  </h3>
                  <h4 className="font-playfair text-xl text-amber-800 mb-6">
                    d'un Condamné
                  </h4>
                  <div className="w-16 h-px bg-amber-700 mx-auto mb-6" />
                  <p className="font-inter text-sm text-amber-700">
                    Victor Hugo
                  </p>
                  <p className="font-inter text-xs text-amber-600 mt-2">
                    1829
                  </p>
                </div>
              </motion.div>
              
              {/* Shadow */}
              <div className="absolute inset-0 bg-black/20 rounded-lg transform translate-x-4 translate-y-4 -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-5xl font-bold text-white mb-8">
              Présentation de
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                l'œuvre
              </span>
            </h2>

            <div className="space-y-6">
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <h4 className="font-playfair text-xl font-semibold text-amber-400 mb-3">
                  Année de publication
                </h4>
                <p className="font-inter text-white/80">
                  1829, publié de manière anonyme pour éviter la censure
                </p>
              </motion.div>

              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <h4 className="font-playfair text-xl font-semibold text-amber-400 mb-3">
                  Genre littéraire
                </h4>
                <p className="font-inter text-white/80">
                  Roman à thèse, récit autobiographique fictif, plaidoyer contre la peine de mort
                </p>
              </motion.div>

              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <h4 className="font-playfair text-xl font-semibold text-amber-400 mb-3">
                  Objectif de Hugo
                </h4>
                <p className="font-inter text-white/80">
                  Sensibiliser l'opinion publique à l'inhumanité de la peine capitale et 
                  plaider pour son abolition à travers l'émotion et l'empathie
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-amber-400/20 to-orange-500/20 border border-amber-400/30 rounded-xl"
            >
              <p className="font-inter text-white/90 italic text-center">
                "Une œuvre révolutionnaire qui transforme le débat juridique en expérience humaine universelle"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
