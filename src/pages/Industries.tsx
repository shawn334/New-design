import Navbar from '../components/Navbar';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Industries() {
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
              {t.industries_page.hero.title}
            </h1>
            <p className="text-2xl text-slate-400 font-medium max-w-3xl leading-relaxed">
              {t.industries_page.hero.subtitle}
            </p>
          </motion.div>

          <div className="space-y-24 mb-32">
            {t.industries_page.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-12 rounded-[48px]"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-black uppercase tracking-widest mb-8">
                  {section.badge}
                </div>
                <h2 className="text-4xl font-black mb-8 text-white leading-tight max-w-4xl">
                  {section.title}
                </h2>
                <div className="grid lg:grid-cols-2 gap-16">
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">The Context</h3>
                    <p className="text-lg text-slate-400 font-medium leading-relaxed mb-8">
                      {section.context}
                    </p>
                    {section.why && (
                      <>
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Why Translia</h3>
                        <p className="text-lg text-slate-400 font-medium leading-relaxed">
                          {section.why}
                        </p>
                      </>
                    )}
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Typical Content</h3>
                    <ul className="space-y-4">
                      {section.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-lg text-slate-300 font-medium">
                          <span className="text-brand-primary mt-1">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center glass-card p-20 rounded-[64px]"
          >
            <h2 className="text-5xl font-black mb-6 text-white uppercase tracking-tighter">{t.industries_page.cta.title}</h2>
            <p className="text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto">
              {t.industries_page.cta.subtitle}
            </p>
            <button className="btn-primary">
              {t.industries_page.cta.button}
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
