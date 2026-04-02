import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Friction from '../components/Friction';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Insights from '../components/Insights';
import { motion } from 'motion/react';
import { Globe2, Users, Zap, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-deep selection:bg-brand-primary selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Friction />
        <Industries />
        
        {/* Global Impact Section */}
        <section className="py-40 relative overflow-hidden bg-brand-dark/20">
          <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-black uppercase tracking-widest mb-8">
                  Global Footprint
                </div>
                <h2 className="text-6xl md:text-8xl font-black mb-12 leading-[0.85] tracking-tighter">
                  GLOBAL SCALE.<br />
                  <span className="text-gradient-vibrant">LOCAL NUANCE.</span>
                </h2>
                <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12 max-w-lg">
                  We operate at the intersection of massive scale and surgical precision. Our global network is powered by AI but guided by human intuition.
                </p>
                
                <div className="grid grid-cols-2 gap-12">
                  {[
                    { label: 'Global Offices', value: '42', icon: Globe2 },
                    { label: 'Active Experts', value: '12K', icon: Users },
                    { label: 'Daily Words', value: '5M+', icon: Zap },
                    { label: 'Awards Won', value: '150+', icon: Award },
                  ].map((stat) => (
                    <div key={stat.label} className="flex flex-col gap-2 group">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-primary transition-colors">
                        <stat.icon className="text-brand-primary w-6 h-6 group-hover:text-white transition-colors" />
                      </div>
                      <div className="text-5xl font-black text-white tracking-tighter">{stat.value}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-[64px] border border-white/5 flex items-center justify-center relative overflow-hidden glass-card">
                  <div className="absolute inset-0 bg-brand-primary/5 rounded-full blur-[100px]" />
                  <Globe2 className="w-64 h-64 text-brand-primary/10 animate-pulse" />
                  
                  {/* Floating Points */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.5, 0.2],
                        y: [0, -20, 0],
                        x: [0, 10, 0]
                      }}
                      transition={{ 
                        duration: 4 + Math.random() * 2, 
                        repeat: Infinity, 
                        delay: i * 0.3 
                      }}
                      className="absolute w-2 h-2 bg-brand-accent rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                      style={{
                        top: `${10 + Math.random() * 80}%`,
                        left: `${10 + Math.random() * 80}%`,
                      }}
                    />
                  ))}

                  {/* Connection Lines */}
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full">
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="30%"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-brand-primary"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2 }}
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Services />
        <Insights />
        
        {/* CTA Section */}
        <section className="py-40 relative">
          <div className="max-w-5xl mx-auto px-6">
            <div className="glass-card p-20 rounded-[64px] text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-secondary/20" />
              <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tighter">
                  READY TO GO<br />
                  <span className="text-gradient-vibrant">BEYOND BORDERS?</span>
                </h2>
                <p className="text-xl text-slate-400 font-medium mb-12 max-w-xl mx-auto">
                  Join the world's most ambitious brands in redefining the global experience.
                </p>
                <button className="btn-primary">
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-32 border-t border-white/5 bg-brand-deep relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-16 mb-24">
              <div className="col-span-2">
                <div className="flex items-center gap-3 mb-8">
                  <div className="relative">
                    <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center relative z-10">
                      <Globe2 className="text-white w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex flex-col -gap-1">
                    <span className="text-2xl font-display font-black text-white tracking-tighter uppercase leading-none">
                      translia
                    </span>
                    <span className="text-[8px] font-black text-brand-accent uppercase tracking-[0.4em] leading-none ml-0.5">
                      Global Enterprise
                    </span>
                  </div>
                </div>
                <p className="text-xl text-slate-500 font-medium max-w-sm leading-relaxed">
                  Engineering cross-cultural resonance for the world's most ambitious brands.
                </p>
              </div>
              
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-8">Solutions</h4>
                <ul className="space-y-4 text-sm font-bold text-slate-500">
                  <li><a href="#" className="hover:text-brand-primary transition-colors">Digital Experience</a></li>
                  <li><a href="#" className="hover:text-brand-primary transition-colors">AI Orchestration</a></li>
                  <li><a href="#" className="hover:text-brand-primary transition-colors">Global Strategy</a></li>
                  <li><a href="#" className="hover:text-brand-primary transition-colors">Content Lifecycle</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-8">Company</h4>
                <ul className="space-y-4 text-sm font-bold text-slate-500">
                  <li><a href="#" className="hover:text-brand-primary transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-brand-primary transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-brand-primary transition-colors">Press</a></li>
                  <li><a href="#" className="hover:text-brand-primary transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">
                © 2026 Translia Global. All rights reserved.
              </p>
              <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-600">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Global Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand-primary/5 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-secondary/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />
      </div>
    </div>
  );
}
