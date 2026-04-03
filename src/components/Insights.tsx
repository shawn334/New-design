import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Insights() {
  const { t } = useLanguage();

  return (
    <section id="insights" className="py-40 relative overflow-hidden bg-brand-deep">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary text-[10px] font-black uppercase tracking-widest mb-8"
            >
              {t.proof.badge}
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase">
              <span className="block">{t.proof.title.split('.')[0]}.</span>
              <span className="block text-gradient-vibrant">{t.proof.title.split('.')[1]}.</span>
            </h2>
          </div>
          <button className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-white group hover:gap-5 transition-all">
            View All Insights <ArrowRight className="w-5 h-5 text-brand-secondary" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {t.proof.items.map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-[48px] overflow-hidden mb-8 glass-card">
                <img 
                  src={insight.image} 
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-transparent to-transparent opacity-60" />
                <div className="absolute top-8 left-8">
                  <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-white">
                    {insight.category}
                  </span>
                </div>
              </div>
              
              <div className="px-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">
                  {insight.date}
                </div>
                <h3 className="text-2xl font-black text-white group-hover:text-brand-secondary transition-colors leading-tight mb-4">
                  {insight.title}
                </h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed mb-6">
                  {insight.description}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-secondary opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
