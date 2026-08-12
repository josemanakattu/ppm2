import { motion } from 'motion/react';
import { Target, Users, Award, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Our Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-amber-500/10"></div>
            </div>
            
            {/* Overlay Stat Box */}
            <div className="absolute -bottom-8 -right-8 bg-amber-500 text-black p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="text-black/80 font-medium">Years of Excellence<br/>in Qatar</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-3">
              About Premier Plus
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your Trusted Partner for ISO Certification in Qatar
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Based in Doha, Premier Plus Management Services is a leading ISO certification body. We are dedicated to helping organizations achieve operational excellence, regulatory compliance, and a competitive edge through internationally recognized standards.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center shrink-0 border border-white/10">
                  <Target className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Our Mission</h4>
                  <p className="text-sm text-gray-400">To simplify certification processes and add real value to our clients' operations.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center shrink-0 border border-white/10">
                  <Users className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Expert Team</h4>
                  <p className="text-sm text-gray-400">Highly qualified Lead Auditors with extensive industry experience across Qatar.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center shrink-0 border border-white/10">
                  <Award className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Proven Results</h4>
                  <p className="text-sm text-gray-400">A track record of successful certifications for businesses of all sizes.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center shrink-0 border border-white/10">
                  <Briefcase className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Tailored Solutions</h4>
                  <p className="text-sm text-gray-400">Customized approaches that fit your specific industry and organizational culture.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
