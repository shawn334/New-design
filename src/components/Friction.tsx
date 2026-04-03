import { motion } from 'motion/react';
import { Zap, Globe, BarChart, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap: Record<string, any> = {
  Zap: Zap,
  Globe: Globe,
  BarChart: BarChart,
};

export default function Friction() {
  const { t } = useLanguage();

  return (
    <section id="solutions" className="py-40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary text-[10px] font-black uppercase tracking-widest mb-8"
            >
              {t.problem.badge}
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9]">
              {t.problem.title}
            </h2>
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-md">
              {t.problem.subtitle}
            </p>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="h-[1px] flex-grow bg-white/10" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 whitespace-nowrap">
                Engineered for Scale
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            {t.problem.items.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group glass-card p-12 rounded-[48px] relative overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row gap-10 items-start md:items-center relative z-10">
                    <div className="w-20 h-20 bg-brand-primary/10 rounded-3xl flex items-center justify-center group-hover:bg-brand-primary transition-all duration-700 rotate-3 group-hover:rotate-0">
                      <Icon className="text-brand-primary w-10 h-10 group-hover:text-[#ffffff] transition-colors duration-700" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-3xl font-black mb-4 text-white group-hover:text-brand-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-lg text-slate-400 font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="hidden md:block">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-brand-deep transition-all duration-500">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Background Numbering */}
                  <div className="absolute top-8 right-12 text-8xl font-black text-white/[0.02] select-none group-hover:text-brand-primary/[0.05] transition-colors">
                    0{index + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
