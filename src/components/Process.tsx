import { motion } from 'motion/react';
import { processSteps } from '../data';

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#0d0d0f] text-white overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl"></div>

        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-3"
          >
            How We Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Our Simple 5-Step Certification Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            We've streamlined the certification journey to make it as efficient and minimally disruptive to your business operations as possible.
          </motion.p>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-5 gap-8 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-black border-2 border-white/10 flex items-center justify-center text-xl font-bold text-amber-500 mb-6 relative z-10 group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-black transition-all duration-300 shadow-xl">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center relative z-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-black uppercase tracking-widest text-sm font-bold hover:bg-amber-600 transition-colors shadow-lg"
          >
            Start Your Application Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
