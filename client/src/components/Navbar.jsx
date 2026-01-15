import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Home, User, Wrench, FolderOpen, Briefcase, Mail, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Wrench },
  { name: 'Projects', href: '#projects', icon: FolderOpen },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 md:py-3' : 'py-3 md:py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav
        className={`mx-3 md:mx-8 lg:mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${
          scrolled || isOpen
            ? 'glass-card px-4 md:px-6 py-3 shadow-glass'
            : 'px-4 md:px-6 py-3'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 text-lg md:text-xl font-bold cursor-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(false)}
          >
            <Code2 className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <span className="gradient-text">DevPortfolio</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="nav-link text-sm font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl glass-button relative z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Navigation - Slide-in Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 md:hidden bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 z-40 md:hidden h-full w-[280px] bg-background-light/95 backdrop-blur-xl border-l border-white/10 shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Sidebar Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-xl">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-text">Ahmad Ali</p>
                    <p className="text-xs text-text-muted">Full-Stack Developer</p>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="p-4">
                <p className="text-xs text-text-dark uppercase tracking-wider mb-4 px-3">Navigation</p>
                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-text-muted hover:text-text hover:bg-white/5 transition-all duration-200 group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <link.icon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors" />
                      <span className="font-medium">{link.name}</span>
                      <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0 transition-all" />
                    </motion.button>
                  ))}
                </div>
              </nav>

              {/* Sidebar Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
                <motion.button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold text-background hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Let's Work Together
                </motion.button>
                <p className="text-center text-xs text-text-dark mt-4">
                  © 2026 Ahmad Ali
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
