import Navbar from '../components/Navbar';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
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
            <h1 className="text-6xl md:text-8xl font-black mb-12 leading-[0.85] tracking-tighter uppercase">
              <span className="block">{t.about.hero.title.split(',')[0]},</span>
              <span className="block text-gradient-vibrant">{t.about.hero.title.split(',')[1]}</span>
            </h1>
            <p className="text-2xl text-slate-400 font-medium max-w-3xl leading-relaxed">
              {t.about.hero.subtitle}
            </p>
          </motion.div>

          <div className="mb-32">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-white uppercase tracking-tighter">{t.about.who.title}</h2>
            <div className="text-xl text-slate-400 font-medium leading-relaxed max-w-4xl space-y-6 mb-16">
              <p>{t.about.who.p1}</p>
              <p>{t.about.who.p2}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {t.about.who.cards.map((card, index) => (
                <div key={index} className="glass-card p-12 rounded-[48px]">
                  <h3 className="text-3xl font-black mb-6 text-white uppercase tracking-tighter">{card.title}</h3>
                  <p className="text-lg text-slate-400 font-medium leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {t.about.operate.map((item, index) => (
                <div key={index} className="glass-card p-10 rounded-[40px]">
                  <h3 className="text-2xl font-black mb-4 text-white">{item.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-16 rounded-[64px] relative overflow-hidden bg-brand-dark/30 border border-white/5 mb-32">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-black uppercase tracking-widest mb-8">
                Working Model
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-16 text-white uppercase tracking-tighter">{t.about.models.title}</h2>
              <div className="grid md:grid-cols-2 gap-12">
                {t.about.models.items.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-2xl font-black mb-4 text-brand-accent">{item.title}</h3>
                    <p className="text-lg text-slate-400 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center py-20 border-t border-white/5">
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tighter uppercase">
              <span className="block text-white">{t.about.cta.title}</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium mb-12 max-w-xl mx-auto">
              {t.about.cta.subtitle}
            </p>
            <a href="/contact" className="btn-primary inline-block">
              {t.about.cta.button}
            </a>
          </div>
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
