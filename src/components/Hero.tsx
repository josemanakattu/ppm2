import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Ambient Glow & Overlay */}
      <div className="absolute inset-0 z-0 bg-[#070709]">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0c0d10] to-[#151108]" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-gray-400 text-sm font-medium mb-6 uppercase tracking-widest text-xs">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
              Qatar's Leading ISO Certification Body
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Achieve Excellence Through <span className="text-amber-500">ISO Certification</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              Premier Plus Management Services provides expert guidance to help your organization achieve global standards in Quality, Safety, and Security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-black font-bold uppercase text-sm tracking-widest hover:bg-amber-600 transition-colors"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-bold uppercase text-sm tracking-widest hover:bg-white/10 transition-colors"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm text-gray-400 font-medium uppercase tracking-widest text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                Expert Auditors
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                Proven Process
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                Global Recognition
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            {/* Decorative elements for the right side to make it feel premium */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full border border-amber-500/20 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-amber-500/30 border-dashed animate-[spin_40s_linear_infinite_reverse]" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl w-72">
                  <div className="bg-amber-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                    <CheckCircle2 className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">100% Success Rate</h3>
                  <p className="text-gray-400 text-sm">We guarantee certification for organizations that follow our proven implementation process.</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-10 right-0 bg-black/80 border-l-4 border-amber-500 p-4 shadow-xl backdrop-blur-sm animate-[bounce_4s_ease-in-out_infinite]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500 text-black flex items-center justify-center rounded-lg font-bold text-lg">
                    ISO
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white uppercase tracking-widest text-[10px]">Certified Partner</div>
                    <div className="text-[10px] text-amber-500 uppercase tracking-widest mt-1">Doha, Qatar</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
