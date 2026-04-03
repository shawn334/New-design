import { motion } from 'motion/react';
import { ShieldCheck, Activity, ShoppingBag, Cpu, ArrowRight, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap: Record<string, any> = {
  ShieldCheck: ShieldCheck,
  Activity: Activity,
  ShoppingBag: ShoppingBag,
  Cpu: Cpu,
  Zap: Zap,
};

export default function Industries() {
  const { t } = useLanguage();

  return (
    <section id="industries" className="py-40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-widest mb-8"
          >
            {t.industries_summary.badge}
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black mb-12 leading-[0.85] tracking-tighter uppercase">
            {t.industries_summary.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.industries_summary.items.map((industry, index) => {
            const Icon = iconMap[industry.icon];
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group glass-card p-10 rounded-[48px] relative overflow-hidden flex flex-col justify-between min-h-[400px]"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-700">
                    <Icon className="text-brand-primary w-8 h-8 group-hover:text-[#ffffff] transition-colors duration-700" />
                  </div>
                  <h3 className="text-3xl font-black mb-6 text-white leading-tight">
                    {industry.title}
                  </h3>
                  <p className="text-lg text-slate-400 font-medium leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                <div className="relative z-10 mt-12">
                  <button className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-white group-hover:gap-5 transition-all">
                    Learn More <ArrowRight className="w-5 h-5 text-brand-primary" />
                  </button>
                </div>

                {/* Decorative Background Elements */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl group-hover:bg-brand-primary/10 transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
