import Navbar from '../components/Navbar';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function HowWeWork() {
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
              {t.how_page.hero.title}
            </h1>
            <p className="text-2xl text-slate-400 font-medium max-w-3xl leading-relaxed">
              {t.how_page.hero.subtitle}
            </p>
          </motion.div>

          {/* Process Section */}
          <div className="mb-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary text-[10px] font-black uppercase tracking-widest mb-8">
              {t.how_page.process.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-white leading-tight">
              {t.how_page.process.title}
            </h2>
            
            <div className="space-y-8">
              {t.how_page.process.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-8 items-start group"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary group-hover:border-brand-primary transition-colors">
                    <span className="text-xl font-black text-white/50 group-hover:text-[#ffffff] transition-colors">
                      {index + 1}
                    </span>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-2xl font-black mb-4 text-white group-hover:text-brand-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-3xl">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Section */}
          <div className="mb-32 glass-card p-12 rounded-[48px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-black uppercase tracking-widest mb-8">
              {t.how_page.tech.badge}
            </div>
            <h2 className="text-4xl font-black mb-6 text-white leading-tight">
              {t.how_page.tech.title}
            </h2>
            <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12 max-w-3xl">
              {t.how_page.tech.description}
            </p>
            
            <div className="bg-brand-primary/10 border border-brand-primary/20 rounded-3xl p-8 mb-12">
              <p className="text-xl font-medium text-brand-primary-light italic">
                {t.how_page.tech.note}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {t.how_page.tech.cards.map((card, index) => (
                <div key={index} className="bg-white/5 rounded-3xl p-8">
                  <h3 className="text-xl font-black mb-4 text-white">{card.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials Section */}
          <div className="mb-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest mb-8">
              {t.how_page.credentials.badge}
            </div>
            <h2 className="text-4xl font-black mb-12 text-white leading-tight">
              {t.how_page.credentials.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {t.how_page.credentials.cards.map((card, index) => (
                <div key={index} className="glass-card rounded-3xl p-8 border-t-4 border-t-brand-secondary">
                  <h3 className="text-xl font-black mb-4 text-white">{card.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center glass-card p-20 rounded-[64px]"
          >
            <h2 className="text-5xl font-black mb-6 text-white uppercase tracking-tighter">{t.how_page.cta.title}</h2>
            <p className="text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto">
              {t.how_page.cta.subtitle}
            </p>
            <button className="btn-primary">
              {t.how_page.cta.button}
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
