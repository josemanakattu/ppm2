import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [targetEmail, setTargetEmail] = useState<'operations' | 'sales'>('operations');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'iso-9001',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const primaryEmail = targetEmail === 'operations' ? 'operations@premierplus.qa' : 'sales@premierplus.qa';

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Construct Mailto URI
    const subject = encodeURIComponent(`ISO Certification Inquiry - ${formData.company || formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'N/A'}\n` +
      `Company: ${formData.company || 'N/A'}\n` +
      `Service Required: ${formData.service}\n\n` +
      `Message:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${primaryEmail}?subject=${subject}&body=${body}`;
    
    // Open user's default email app
    window.location.href = mailtoUrl;

    // Show success banner
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#111113]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-3"
          >
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to achieve ISO Certification?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Contact our certification experts today for a free assessment and customized proposal for your organization.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-black rounded-2xl p-8 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Office */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#111113] rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-white/5">
                    <MapPin className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">Our Office</h4>
                    <p className="text-gray-400 text-sm">Office no 04, 2nd Floor<br/>Al Emadi Building, D ring road<br/>Doha | Qatar</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#111113] rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-white/5">
                    <Phone className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">Phone</h4>
                    <a href="tel:+97430066220" className="text-gray-400 text-sm hover:text-amber-500 transition-colors">+974 3006 6220</a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-[#25D366]/30">
                    <MessageSquare className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1 flex items-center gap-2">
                      WhatsApp Chat
                      <span className="text-[10px] bg-[#25D366]/20 text-[#25D366] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Fastest Reply</span>
                    </h4>
                    <a
                      href="https://wa.me/97430066220?text=Hello%20Premier%20Plus%2C%20I%20need%20assistance%20with%20ISO%20Certification."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] font-semibold text-sm hover:underline flex items-center gap-1 mt-0.5"
                    >
                      +974 3006 6220 &rarr;
                    </a>
                  </div>
                </div>

                {/* Email Contacts */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#111113] rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-white/5">
                    <Mail className="w-6 h-6 text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-sm mb-1">Official Emails</h4>
                    
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center justify-between text-sm bg-[#111113] p-2.5 rounded-lg border border-white/5">
                        <div>
                          <span className="text-xs text-amber-500 font-bold block uppercase tracking-wider">Operations</span>
                          <a href="mailto:operations@premierplus.qa" className="text-gray-300 hover:text-white transition-colors">
                            operations@premierplus.qa
                          </a>
                        </div>
                        <button
                          onClick={() => handleCopyEmail('operations@premierplus.qa')}
                          className="text-gray-500 hover:text-amber-500 p-1 transition-colors"
                          title="Copy Email"
                        >
                          {copiedEmail === 'operations@premierplus.qa' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>

                      <div className="flex items-center justify-between text-sm bg-[#111113] p-2.5 rounded-lg border border-white/5">
                        <div>
                          <span className="text-xs text-amber-500 font-bold block uppercase tracking-wider">Sales & Inquiries</span>
                          <a href="mailto:sales@premierplus.qa" className="text-gray-300 hover:text-white transition-colors">
                            sales@premierplus.qa
                          </a>
                        </div>
                        <button
                          onClick={() => handleCopyEmail('sales@premierplus.qa')}
                          className="text-gray-500 hover:text-amber-500 p-1 transition-colors"
                          title="Copy Email"
                        >
                          {copiedEmail === 'sales@premierplus.qa' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-black rounded-2xl p-8 border border-white/5 shadow-xl shadow-black relative overflow-hidden">
              
              {/* Recipient Selection Toggle */}
              <div className="mb-6 p-3 bg-[#111113] rounded-xl border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="text-xs text-gray-400 font-medium">Send inquiry directly to:</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setTargetEmail('operations')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      targetEmail === 'operations'
                        ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                        : 'bg-white/5 text-gray-400 hover:text-white'
                    }`}
                  >
                    Operations (operations@premierplus.qa)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTargetEmail('sales')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      targetEmail === 'sales'
                        ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                        : 'bg-white/5 text-gray-400 hover:text-white'
                    }`}
                  >
                    Sales (sales@premierplus.qa)
                  </button>
                </div>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-bold">Opening your email app to send message...</p>
                    <p className="text-xs text-emerald-200/80">Recipient set to: <strong className="text-white">{primaryEmail}</strong></p>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#111113] text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                    placeholder="e.g. Mohammed Al-Thani"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#111113] text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                    placeholder="name@company.qa"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone / Mobile</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#111113] text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                    placeholder="+974 XXXX XXXX"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#111113] text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                    placeholder="Company LLC"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">ISO Service Required</label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#111113] text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                >
                  <option value="ISO 9001:2015 Quality Management System">ISO 9001 (Quality)</option>
                  <option value="ISO 14001:2015 Environmental Management">ISO 14001 (Environmental)</option>
                  <option value="ISO 45001:2018 Occupational Health & Safety">ISO 45001 (Health & Safety)</option>
                  <option value="ISO 27001:2022 Information Security">ISO 27001 (Information Security)</option>
                  <option value="ISO 22000:2018 Food Safety Management">ISO 22000 (Food Safety)</option>
                  <option value="Integrated Management System (IMS)">Integrated Management System (IMS)</option>
                  <option value="ISO Training & Internal Auditing">ISO Training & Internal Auditing</option>
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#111113] text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none"
                  placeholder="How can we help your organization?"
                  required
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-black uppercase tracking-widest text-sm rounded-lg font-bold hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/10"
                >
                  Send Inquiry Email
                  <Send className="w-5 h-5" />
                </button>

                <div className="text-xs text-gray-400">
                  Sends directly to <span className="text-amber-500 font-semibold">{primaryEmail}</span>
                </div>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

