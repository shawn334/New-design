import Navbar from '../components/Navbar';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="min-h-screen bg-brand-deep selection:bg-brand-primary selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main className="pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-black mb-12 leading-[0.85] tracking-tighter">
              OUR<br />
              <span className="text-gradient-vibrant">MISSION</span>
            </h1>
            <p className="text-2xl text-slate-400 font-medium max-w-3xl leading-relaxed">
              We are on a mission to bridge the gap between global scale and local nuance. Translia was born from the belief that every brand deserves to resonate authentically in every market.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card p-12 rounded-[48px]">
              <h2 className="text-3xl font-black mb-6 text-white uppercase tracking-tighter">The Vision</h2>
              <p className="text-lg text-slate-400 font-medium leading-relaxed">
                To become the world's most trusted partner for global content engineering, leveraging AI and human expertise to create seamless cross-cultural experiences.
              </p>
            </div>
            <div className="glass-card p-12 rounded-[48px]">
              <h2 className="text-3xl font-black mb-6 text-white uppercase tracking-tighter">The Strategy</h2>
              <p className="text-lg text-slate-400 font-medium leading-relaxed">
                We combine cutting-edge AI orchestration with a global network of specialized experts to deliver precision-engineered localization at the speed of light.
              </p>
            </div>
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
