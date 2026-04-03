import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Globe, Zap, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const { t } = useLanguage();

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-mesh pt-32 pb-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-brand-primary/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-brand-secondary/20 rounded-full blur-[120px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-brand-accent text-[10px] font-black uppercase tracking-[0.3em] mb-12 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              {t.hero.badge}
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black mb-10 leading-[0.9] tracking-tighter uppercase">
              <span className="block text-white">{t.hero.title1}</span>
              <span className="block text-gradient-vibrant">{t.hero.title2}</span>
            </h1>

            <p className="text-lg md:text-xl xl:text-2xl text-slate-400 mb-14 max-w-xl font-medium leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-6">
              <button className="btn-primary group text-lg px-10 py-5">
                <span className="relative z-10 flex items-center gap-3">
                  {t.hero.cta}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>

              <button className="btn-secondary group text-lg px-10 py-5">
                {t.hero.secondaryCta}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -top-6 -right-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-brand-accent text-xs font-black uppercase tracking-widest z-20 backdrop-blur-md shadow-xl">
              30+ languages
            </div>
            <div className="glass-card p-10 lg:p-12 rounded-[48px] border border-white/10 bg-white/5 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-black/50">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-10 pb-8 border-b border-white/10">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse" />
                  <span className="text-sm font-black uppercase tracking-widest text-slate-400">Content sync status</span>
                </div>

                <div className="space-y-5">
                  {[
                    { lang: '🇨🇳 Chinese (source)', status: '✓ Live', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
                    { lang: '🇩🇪 German', status: '✓ Live', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
                    { lang: '🇫🇷 French', status: '⚠ 3 updates behind', color: 'text-amber-400', bg: 'bg-amber-400/10' },
                    { lang: '🇧🇷 Portuguese', status: '⚠ 7 updates behind', color: 'text-amber-400', bg: 'bg-amber-400/10' },
                    { lang: '🇸🇦 Arabic', status: '✗ Not started', color: 'text-rose-400', bg: 'bg-rose-400/10' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-colors">
                      <span className="font-medium text-slate-300 text-lg">{item.lang}</span>
                      <span className={`text-xs font-bold px-4 py-1.5 rounded-full ${item.bg} ${item.color}`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-between text-base font-bold text-brand-accent group cursor-pointer">
                  <span>Translia fixes this</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats/Badges */}
        <div className="mt-24 lg:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12 lg:pt-16">
          {t.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3">{stat.value}</div>
              <div className="text-xs font-black uppercase tracking-widest text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden md:flex"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-primary to-transparent" />
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Scroll</span>
      </motion.div>
    </section>
  );
}
