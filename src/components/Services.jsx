import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Star,
  Heart,
  Eye,
  ArrowRight,
  Quote,
  Sparkles,
} from 'lucide-react';

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
    >
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
            <BookOpen className="text-white" size={32} />
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            <span className="gradient-text">O Peso do Desejo</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uma obra envolvente que mergulha nas profundezas das emoÃ§Ãµes humanas
          </p>
        </motion.div>

        {/* Main Book Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Book Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              {/* Background Glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-accent-gold/20 to-accent-blue/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-300"></div>

              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754238722064_wj2e2vut27m_BRUNO_NUNES_1.jpg"
                alt="O Peso do Desejo - Livro de Adam Yasu"
                className="relative w-full max-w-sm mx-auto h-auto object-cover rounded-2xl shadow-2xl group-hover:shadow-accent-gold/30 transition-all duration-500"
              />

              {/* Floating Rating */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg"
              >
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-accent-gold fill-current"
                      size={16}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Book Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Title and Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900">
                O Peso do Desejo
              </h3>
              <p className="text-xl text-accent-gold font-semibold">
                Por Adam Yasu
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                O Peso do Desejo Ã© uma obra envolvente que mergulha nas
                profundezas das emoÃ§Ãµes humanas, explorando os limites entre
                amor, obsessÃ£o e sacrifÃ­cio. A narrativa cativa ao apresentar
                personagens complexos e dilemas emocionais reais, levando o
                leitor a refletir sobre suas prÃ³prias escolhas e desejos.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Ao longo do livro, o autor habilmente tece uma trama repleta de
                reviravoltas e momentos de intenso suspense. Ideal para quem
                busca uma leitura emocionante e enriquecedora que provoca
                reflexÃ£o e autoconhecimento.
              </p>

              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="bg-gray-50 border-l-4 border-accent-gold pl-6 py-4 italic text-lg text-gray-600 font-serif rounded-r-lg"
              >
                <Quote className="inline text-accent-gold mb-2" size={20} />
                "Uma jornada transformadora que mudarÃ¡ sua perspectiva sobre
                desejos e realizaÃ§Ãµes."
              </motion.blockquote>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Heart, text: 'Emocionalmente Envolvente' },
                { icon: Eye, text: 'Reviravoltas Surpreendentes' },
                { icon: Sparkles, text: 'Autoconhecimento' },
                { icon: Star, text: 'TransformaÃ§Ã£o Pessoal' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <feature.icon
                    className="text-accent-gold flex-shrink-0"
                    size={24}
                  />
                  <span className="text-gray-700 font-medium text-sm">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="group bg-gradient-gold text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <BookOpen size={20} />
                <span>Adquirir Agora</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300"
              >
                Ler Amostra
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-dark rounded-3xl p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              Por que ler{' '}
              <span className="gradient-text">O Peso do Desejo</span>?
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Descubra os benefÃ­cios Ãºnicos desta obra transformadora
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'ReflexÃ£o Profunda',
                description:
                  'Explore suas emoÃ§Ãµes e desejos mais Ã­ntimos atravÃ©s de uma narrativa envolvente',
                icon: Heart,
              },
              {
                title: 'Crescimento Pessoal',
                description:
                  'Desenvolva maior autoconhecimento e clareza sobre seus objetivos de vida',
                icon: Sparkles,
              },
              {
                title: 'InspiraÃ§Ã£o Duradoura',
                description:
                  'Encontre motivaÃ§Ã£o para transformar seus desejos em aÃ§Ãµes concretas',
                icon: Star,
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <benefit.icon
                  className="text-accent-gold mx-auto mb-4"
                  size={48}
                />
                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
