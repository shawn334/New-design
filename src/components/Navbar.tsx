import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#') && location.pathname === '/') {
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'zh' : 'en');
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-nav py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 relative z-10">
              <Globe className="text-[#ffffff] w-6 h-6" />
            </div>
            <div className="absolute inset-0 bg-brand-secondary rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
          </div>
          <div className="flex flex-col -gap-1">
            <span className="text-2xl font-display font-black text-white tracking-tighter uppercase leading-none">
              translia
            </span>
            <span className="text-[8px] font-black text-brand-accent uppercase tracking-[0.4em] leading-none ml-0.5">
              Global Enterprise
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {t.nav.map((item) => (
            item.href.startsWith('/#') ? (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            )
          ))}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="theme-toggle text-slate-400 hover:text-white transition-colors p-2"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button 
              onClick={toggleLanguage}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <Globe className="w-3 h-3" />
              {lang === 'en' ? '中文' : 'EN'}
            </button>
            <button className="bg-white text-brand-deep px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-brand-primary hover:text-[#ffffff] transition-all">
              {lang === 'en' ? 'Connect' : '联系我们'}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="theme-toggle text-slate-400 hover:text-white transition-colors p-2"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button 
            onClick={toggleLanguage}
            className="text-white text-[10px] font-black uppercase tracking-widest"
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>
          <button
            className="text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-deep p-12 md:hidden flex flex-col justify-center"
          >
            <button 
              className="absolute top-8 right-6 text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="flex flex-col gap-8">
              {t.nav.map((item, i) => (
                item.href.startsWith('/#') ? (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={item.name}
                    href={item.href}
                    className="text-5xl font-black text-white uppercase tracking-tighter hover:text-brand-primary transition-colors"
                    onClick={(e) => {
                      if (location.pathname === '/') {
                        e.preventDefault();
                        handleNavClick(item.href);
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                  >
                    {item.name}
                  </motion.a>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={item.name}
                  >
                    <Link
                      to={item.href}
                      className="text-5xl font-black text-white uppercase tracking-tighter hover:text-brand-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )
              ))}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 bg-brand-primary text-[#ffffff] px-8 py-5 rounded-2xl text-center font-black uppercase tracking-widest"
              >
                {lang === 'en' ? 'Get Started' : '开始使用'}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
