import { motion } from 'motion/react';
import { ShieldCheck, Activity, ShoppingBag, Cpu, ArrowRight } from 'lucide-react';
import { SITE_CONTENT } from '../constants';

const iconMap: Record<string, any> = {
  ShieldCheck: ShieldCheck,
  Activity: Activity,
  ShoppingBag: ShoppingBag,
  Cpu: Cpu,
};

export default function Industries() {
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
            Specialization
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black mb-12 leading-[0.85] tracking-tighter">
            <span className="block">BUILT FOR</span>
            <span className="block text-gradient-vibrant">EVERY SECTOR</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
            Our solutions are precision-engineered to meet the unique demands of the world's most complex industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SITE_CONTENT.industries.map((industry, index) => {
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
                    <Icon className="text-brand-primary w-8 h-8 group-hover:text-white transition-colors duration-700" />
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
