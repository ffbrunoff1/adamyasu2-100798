import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Heart, Target, Lightbulb, Award, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6"
          >
            <Heart className="text-white" size={32} />
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Sobre <span className="gradient-text">Adam Yasu</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Um escritor motivacional comprometido em ajudar as pessoas a
            explorar e realizar seus desejos mais profundos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Author Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Background Decorations */}
              <div className="absolute -inset-4 bg-gradient-gold opacity-20 rounded-3xl blur-2xl"></div>

              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754238722777_bm0019tkm5d_Adam_Yasu.png"
                alt="Adam Yasu - Escritor Motivacional"
                className="relative w-full h-auto object-cover rounded-3xl shadow-2xl"
              />

              {/* Floating Quote */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-full shadow-lg"
              >
                <Quote className="text-accent-gold" size={24} />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Main Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p className="text-xl mb-6">
                  Adam Yasu é um escritor motivacional que acredita no poder
                  transformador dos desejos humanos. Sua obra é um convite à
                  reflexão e ao crescimento pessoal.
                </p>

                <p className="mb-6">
                  Com uma abordagem única que combina psicologia, filosofia e
                  experiências de vida, Adam guia seus leitores através de
                  jornadas de autodescoberta e realização pessoal.
                </p>
              </div>

              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="border-l-4 border-accent-gold pl-6 italic text-lg text-gray-600 font-serif"
              >
                "O desejo é o primeiro passo para a realização. Acredite no
                poder dos seus sonhos."
              </motion.blockquote>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  icon: Target,
                  title: 'Foco em Resultados',
                  description: 'Estratégias práticas para transformação',
                },
                {
                  icon: Lightbulb,
                  title: 'Insights Profundos',
                  description: 'Reflexões que geram mudanças reais',
                },
                {
                  icon: Award,
                  title: 'Experiência',
                  description: 'Anos de estudo em desenvolvimento pessoal',
                },
                {
                  icon: BookOpen,
                  title: 'Metodologia Única',
                  description: 'Abordagem inovadora e eficaz',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <feature.icon className="text-accent-gold mb-3" size={32} />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById('services')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="bg-gradient-gold text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Conheça Minha Obra
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
