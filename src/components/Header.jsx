import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, BookOpen, User, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-elegant backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754238730285_0.png"
              alt="Adam Yasu"
              className={`h-12 w-auto transition-all duration-300 ${
                isScrolled ? '' : 'filter invert'
              }`}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Sobre', id: 'about', icon: User },
              { name: 'Livros', id: 'services', icon: BookOpen },
              { name: 'Contato', id: 'contact', icon: Phone },
            ].map(item => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    isScrolled
                      ? 'text-gray-700 hover:text-accent-gold hover:bg-gray-50'
                      : 'text-white hover:text-accent-gold hover:bg-white/10'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </motion.button>
              );
            })}
          </nav>

          {/* CTA Button Desktop */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('services')}
            className="hidden md:flex items-center space-x-2 bg-gradient-gold text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <BookOpen size={18} />
            <span>Adquirir Livro</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white shadow-lg rounded-lg mt-2"
        >
          <div className="px-4 py-6 space-y-4">
            {[
              { name: 'Sobre', id: 'about', icon: User },
              { name: 'Livros', id: 'services', icon: BookOpen },
              { name: 'Contato', id: 'contact', icon: Phone },
            ].map(item => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.name}
                  whileHover={{ x: 10 }}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-3 w-full text-left py-3 px-4 text-gray-700 hover:text-accent-gold hover:bg-gray-50 rounded-lg transition-all"
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.name}</span>
                </motion.button>
              );
            })}

            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => scrollToSection('services')}
              className="w-full bg-gradient-gold text-white py-3 px-6 rounded-full font-semibold shadow-lg mt-4"
            >
              Adquirir Livro
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
