import Navbar from '../components/Navbar';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
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
              {t.contact.hero.title}
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-3xl font-black mb-6 text-white">{t.contact.review.title}</h2>
              <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                {t.contact.review.description}
              </p>

              <div className="mb-12">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
                  {t.contact.review.nextStepsTitle}
                </h3>
                <ul className="space-y-4">
                  {t.contact.review.steps.map((step, i) => (
                    <li key={i} className="flex items-center gap-4 text-slate-300 font-medium">
                      <div className="w-6 h-6 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center text-xs font-black">
                        {i + 1}
                      </div>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8 border-t border-white/10 pt-12">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  {t.contact.review.directContact}
                </h3>
                <a href={`mailto:${t.contact.review.email}`} className="text-2xl font-black text-white hover:text-brand-primary transition-colors block">
                  {t.contact.review.email}
                </a>
                
                <div className="grid sm:grid-cols-2 gap-8 pt-8">
                  <div>
                    <h4 className="text-white font-black mb-2">{t.contact.review.beijing.city}</h4>
                    <p className="text-slate-400 text-sm mb-2">{t.contact.review.beijing.address}</p>
                    <p className="text-brand-primary text-sm font-medium">{t.contact.review.beijing.phone}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-black mb-2">{t.contact.review.hongkong.city}</h4>
                    <p className="text-slate-400 text-sm mb-2">{t.contact.review.hongkong.address}</p>
                    <p className="text-brand-primary text-sm font-medium">{t.contact.review.hongkong.phone}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-12 rounded-[48px]"
            >
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t.contact.form.name}</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t.contact.form.email}</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t.contact.form.company}</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t.contact.form.contentType}</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors appearance-none">
                    {t.contact.form.options.map((opt, i) => (
                      <option key={i} value={opt} className="bg-brand-deep">{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t.contact.form.message}</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors resize-none"></textarea>
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  {t.contact.form.submit}
                </button>
              </form>
            </motion.div>
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
