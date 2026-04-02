import { motion } from 'motion/react';
import { SITE_CONTENT } from '../constants';
import { Layers, MessageSquare, BookOpen, Video, ArrowRight } from 'lucide-react';

const serviceIcons = [Layers, MessageSquare, BookOpen, Video];

export default function Services() {
  return (
    <section id="tech" className="py-40 relative bg-brand-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-black uppercase tracking-widest mb-8"
          >
            Capabilities
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black mb-12 leading-[0.85] tracking-tighter">
            <span className="block">ENGINEERING</span>
            <span className="block text-gradient-vibrant">GLOBAL IMPACT</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[64px] overflow-hidden">
          {SITE_CONTENT.services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-brand-deep p-16 hover:bg-brand-primary/5 transition-colors duration-700"
              >
                <div className="relative z-10">
                  <div className="mb-12 flex justify-between items-start">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-700">
                      <Icon className="text-brand-primary-light w-8 h-8 group-hover:text-white transition-colors duration-700" />
                    </div>
                    <span className="text-4xl font-black text-white/5 group-hover:text-brand-primary/10 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-black mb-6 text-white group-hover:text-brand-primary-light transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12 max-w-sm">
                    {service.description}
                  </p>
                  
                  <button className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-white group-hover:gap-5 transition-all">
                    View Solution <ArrowRight className="w-5 h-5 text-brand-primary-light" />
                  </button>
                </div>

                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none opacity-[0.02]">
        <div className="text-[20vw] font-black text-white leading-none whitespace-nowrap -mb-[5vw]">
          TRANSLIA GLOBAL
        </div>
      </div>
    </section>
  );
}
