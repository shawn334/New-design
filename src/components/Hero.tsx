import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Globe, Zap, Shield } from 'lucide-react';
import { SITE_CONTENT } from '../constants';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh pt-20">
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

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-accent text-[10px] font-black uppercase tracking-[0.3em] mb-12 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            The Future of Global Content
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.85] tracking-tighter">
            <span className="block text-white">REIMAGINE</span>
            <span className="block text-gradient-vibrant">THE GLOBAL</span>
            <span className="block text-white">EXPERIENCE</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
            {SITE_CONTENT.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="btn-primary group">
              <span className="relative z-10 flex items-center gap-3">
                {SITE_CONTENT.hero.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>

            <button className="btn-secondary group">
              {SITE_CONTENT.hero.secondaryCta}
            </button>
          </div>
        </motion.div>

        {/* Floating Stats/Badges */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-16">
          {[
            { label: 'Markets', value: '150+', icon: Globe },
            { label: 'Velocity', value: '10X', icon: Zap },
            { label: 'Accuracy', value: '99.9%', icon: Shield },
            { label: 'Languages', value: '80+', icon: Globe },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-primary to-transparent" />
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Scroll</span>
      </motion.div>
    </section>
  );
}
