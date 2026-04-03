import Navbar from '../components/Navbar';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-brand-deep selection:bg-brand-primary selection:text-[#ffffff] overflow-x-hidden">
      <Navbar />
      
      <main className="pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter uppercase">
              {t.services_page.hero.title}
            </h1>
            <p className="text-2xl text-slate-400 font-medium max-w-3xl leading-relaxed">
              {t.services_page.hero.subtitle}
            </p>
          </motion.div>

          <div className="space-y-12">
            {t.services_page.packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-12 rounded-[48px] relative overflow-hidden group"
              >
                <div className="absolute top-12 right-12 text-8xl font-black text-white/[0.02] select-none group-hover:text-brand-primary/[0.05] transition-colors">
                  {pkg.id}
                </div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-widest mb-6">
                    {pkg.label}
                  </div>
                  <h2 className="text-4xl font-black mb-6 text-white leading-tight">
                    {pkg.title}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-12 mt-12">
                    <div>
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">What it's for</h3>
                      <p className="text-lg text-slate-400 font-medium leading-relaxed mb-8">{pkg.for}</p>
                      
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Typical Content</h3>
                      <p className="text-lg text-slate-400 font-medium leading-relaxed">{pkg.typical}</p>
                    </div>
                    <div>
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">What we deliver</h3>
                      <p className="text-lg text-slate-400 font-medium leading-relaxed mb-8">{pkg.deliver}</p>
                      
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Best for</h3>
                      <p className="text-lg text-slate-400 font-medium leading-relaxed">{pkg.bestFor}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 text-center glass-card p-20 rounded-[64px]"
          >
            <h2 className="text-5xl font-black mb-6 text-white uppercase tracking-tighter">{t.services_page.cta.title}</h2>
            <p className="text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto">
              {t.services_page.cta.subtitle}
            </p>
            <button className="btn-primary">
              {t.services_page.cta.button}
            </button>
          </motion.div>
        </div>
      </main>

      {/* Global Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand-primary/5 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-secondary/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />
      </div>
    </div>
  );
}
