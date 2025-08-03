import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Mail, BookOpen, Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <img 
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754238730285_0.png"
                alt="Adam Yasu"
                className="h-12 w-auto filter invert"
              />
            </motion.div>
            
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Escritor motivacional
            </p>

            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="italic text-accent-gold border-l-2 border-accent-gold pl-4"
            >
              "O desejo Ã© o primeiro passo para a realizaÃ§Ã£o."
            </motion.blockquote>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 text-accent-gold">NavegaÃ§Ã£o</h3>
            <ul className="space-y-4">
              {[
                { name: 'Sobre Adam', id: 'about' },
                { name: 'O Peso do Desejo', id: 'services' },
                { name: 'Contato', id: 'contact' }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  <motion.button
                    whileHover={{ x: 5, color: '#d4af37' }}
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-accent-gold transition-all duration-300 text-left"
                  >
                    {link.name}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Book Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 text-accent-gold">Minha Obra</h3>
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-accent-gold/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <BookOpen className="text-accent-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-2">O Peso do Desejo</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Uma obra envolvente sobre emoÃ§Ãµes humanas, amor, obsessÃ£o e sacrifÃ­cio.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={() => scrollToSection('services')}
                      className="text-accent-gold text-sm font-medium mt-2 hover:underline"
                    >
                      Saiba mais â
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact & Social */}
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 text-accent-gold">Conecte-se</h3>
            
            {/* Social Links */}
            <div className="space-y-4">
              <motion.a
                href="https://www.instagram.com/opesododesejo"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-accent-gold transition-all duration-300"
              >
                <Instagram size={20} />
                <span>@opesododesejo</span>
              </motion.a>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-300"
              >
                <Mail size={20} />
                <span>adam@adamyasu.com</span>
              </motion.div>
            </div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 bg-white/5 rounded-lg p-4 border border-white/10"
            >
              <h4 className="font-semibold mb-3 flex items-center">
                <Heart className="text-accent-gold mr-2" size={18} />
                Inspire-se diariamente
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                ReflexÃµes e conteÃºdos sobre transformaÃ§Ã£o pessoal
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={( ) => scrollToSection('contact')}
                className="w-full bg-gradient-gold text-black py-2 px-4 rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300"
              >
                Entrar em Contato
              </motion.button>
            </motion.div>
          </motion.div> {/* <-- CORRIGIDO: Fechando a motion.div de "Contact & Social" */}
        </div> {/* <-- Fechando a div do "grid" */}
      </div> {/* <-- Fechando a div do "Main Footer Content" */}

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm text-gray-400 text-center md:text-left"
            >
              <p>
                Â© 2024 Adam Yasu. Todos os direitos reservados. |{' '}
                <span className="text-accent-gold">Transformando desejos em realidade</span>
              </p>
            </motion.div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-gradient-gold text-black p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}