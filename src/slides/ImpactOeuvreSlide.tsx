import { motion } from 'framer-motion';

export default function ImpactOeuvreSlide() {
  const impacts = [
    {
      period: "1829-1848",
      title: "Impact immédiat",
      description: "Débats parlementaires sur l'abolition, sensibilisation de l'opinion publique",
      result: "Première remise en question officielle"
    },
    {
      period: "1848-1870",
      title: "Influence politique",
      description: "Hugo devient député et continue son combat abolitionniste",
      result: "Abolition en matière politique (1848)"
    },
    {
      period: "1870-1885",
      title: "Rayonnement européen",
      description: "L'œuvre inspire les mouvements abolitionnistes dans toute l'Europe",
      result: "Modèle pour la littérature engagée"
    },
    {
      period: "Aujourd'hui",
      title: "Héritage contemporain",
      description: "Référence dans les débats sur les droits humains et la justice pénale",
      result: "Classique de la littérature engagée"
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
            Impact de
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              l'œuvre
            </span>
          </h2>
          <p className="font-inter text-xl text-white/80 max-w-4xl mx-auto">
            Une influence durable sur la justice et les droits humains
          </p>
        </motion.div>

        {/* Timeline of Impact */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 via-orange-500 to-red-600 hidden md:block" />
          
          <div className="space-y-12">
            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} text-center mb-4 md:mb-0`}>
                  <motion.div
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="mb-4">
                      <span className="inline-block bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full text-sm font-inter font-semibold mb-2">
                        {impact.period}
                      </span>
                      <h3 className="font-playfair text-2xl font-bold text-amber-400">
                        {impact.title}
                      </h3>
                    </div>
                    <p className="font-inter text-white/80 mb-4 leading-relaxed">
                      {impact.description}
                    </p>
                    <div className="inline-block bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2">
                      <span className="font-inter text-sm text-green-300 font-semibold">
                        {impact.result}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="w-full md:w-2/12 flex justify-center mb-4 md:mb-0">
                  <motion.div
                    className="w-8 h-8 bg-amber-400 rounded-full border-4 border-slate-900 z-10 shadow-lg shadow-amber-400/50"
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modern Relevance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-amber-400/20 to-orange-500/20 border border-amber-400/30 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h4 className="font-playfair text-3xl font-semibold text-amber-400 mb-4">
                Pourquoi cette œuvre reste-t-elle un classique ?
              </h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h5 className="font-playfair text-xl font-semibold text-white mb-3">
                  Universalité du message
                </h5>
                <p className="font-inter text-white/90 leading-relaxed">
                  Les questions soulevées par Hugo transcendent son époque : 
                  dignité humaine, justice, rédemption.
                </p>
              </div>
              
              <div className="space-y-4">
                <h5 className="font-playfair text-xl font-semibold text-white mb-3">
                  Modèle d'engagement
                </h5>
                <p className="font-inter text-white/90 leading-relaxed">
                  L'œuvre démontre comment la littérature peut servir de catalyseur 
                  pour le changement social et politique.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="font-inter text-white/80 italic text-lg">
                "Une œuvre qui prouve que l'art peut changer le monde, une conscience à la fois."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
