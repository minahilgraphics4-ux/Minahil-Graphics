/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Linkedin, Send, Sparkles, CheckCircle, Award, Globe } from 'lucide-react';

interface ContactSectionProps {
  avatarPath: string;
}

export default function ContactSection({ avatarPath }: ContactSectionProps) {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isDone, setIsDone] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsDone(false), 5000);
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left side: Interactive form */}
      <div id="contact-form-col" className="lg:col-span-7 space-y-6">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-[#e11d48] bg-[#e11d48]/5 px-2.5 py-1 rounded-full w-fit">
            Let's Collaborate
          </span>
          <h3 className="text-4xl font-sans lg:text-5xl font-black tracking-tight text-neutral-900 leading-none">
            LET'S WORK <br />
            <span className="text-[#e11d48]">TOGETHER!</span>
          </h3>
          <p className="text-xs text-neutral-500 max-w-sm leading-relaxed">
            Have a branding, packaging, or custom logo concept? Drop a line to start building something amazing together.
          </p>
        </div>

        {/* Contact form cards */}
        <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-2xl shadow-sm relative">
          <AnimatePresence mode="wait">
            {!isDone ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-wider text-neutral-500 mb-1 font-bold">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g. John Doe"
                    className="w-full px-4 py-2.5 text-xs rounded-xl bg-white border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-[#e11d48] focus:border-[#e11d48] text-neutral-800"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-wider text-neutral-500 mb-1 font-bold">Your Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 text-xs rounded-xl bg-white border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-[#e11d48] focus:border-[#e11d48] text-neutral-800"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-wider text-neutral-500 mb-1 font-bold">Message Details</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your design goals, required assets..."
                    className="w-full px-4 py-2.5 text-xs rounded-xl bg-white border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-[#e11d48] focus:border-[#e11d48] text-neutral-800 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-neutral-900 text-white font-bold text-xs hover:bg-[#e11d48] transition-colors duration-200 flex items-center justify-center gap-1.5 shadow"
                >
                  <Send size={12} />
                  <span>{isSubmitting ? 'Sending Brief...' : 'Send Message Brief'}</span>
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 text-center space-y-3 flex flex-col items-center justify-center"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center shadow-inner">
                  <CheckCircle size={24} />
                </div>
                <h4 className="text-base font-bold text-neutral-900">Message Dispatched!</h4>
                <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                  Thank you for reaching out! Minahil Murtaza will receive your design brief and follow up via email shortly.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right side: Portrait & Details */}
      <div id="contact-details-col" className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
        
        {/* Designer Profile Card matching deck 12 */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 text-white text-center relative overflow-hidden flex flex-col items-center justify-center space-y-4">
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 blur-2xl rounded-full" />
          
          {/* Avatar representation */}
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-red-600 shadow-xl bg-neutral-950">
            <img
              src={avatarPath}
              alt="Minahil Murtaza profile mockup"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover scale-102"
            />
          </div>

          <div className="space-y-1">
            <h4 className="text-lg font-extrabold font-sans text-white">Minahil Murtaza</h4>
            <p className="text-xs font-mono text-red-500 uppercase tracking-widest leading-none">Graphic Designer</p>
          </div>
        </div>

        {/* Contact links board */}
        <div className="space-y-3 bg-neutral-50 border border-neutral-200 p-5 rounded-2xl shadow-sm">
          <h5 className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold border-b border-neutral-200 pb-2">
            Direct Contact Channels
          </h5>

          <ul className="space-y-3">
            <li>
              <a 
                href="https://wa.me/923256777592"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white hover:bg-neutral-100 transition-colors border border-neutral-200 text-xs font-semibold text-neutral-700"
              >
                <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                  <Phone size={14} />
                </span>
                <div>
                  <span className="block text-[8px] uppercase text-neutral-500 font-mono leading-none">WhatsApp Chat</span>
                  <span className="text-xs font-mono">+92 325 6777592</span>
                </div>
              </a>
            </li>

            <li>
              <a 
                href="mailto:minahilgraphics4@gmail.com"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white hover:bg-neutral-100 transition-colors border border-neutral-200 text-xs font-semibold text-neutral-700"
              >
                <span className="w-8 h-8 rounded-lg bg-[#e11d48] text-white flex items-center justify-center">
                  <Mail size={14} />
                </span>
                <div>
                  <span className="block text-[8px] uppercase text-neutral-500 font-mono leading-none">Email Address</span>
                  <span className="text-xs font-mono">minahilgraphics4@gmail.com</span>
                </div>
              </a>
            </li>

            <li>
              <a 
                href="https://linkedin.com/in/minahil-murtaza-0b943a3bb"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white hover:bg-neutral-100 transition-colors border border-neutral-200 text-xs font-semibold text-neutral-700"
              >
                <span className="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center">
                  <Linkedin size={14} />
                </span>
                <div>
                  <span className="block text-[8px] uppercase text-neutral-500 font-mono leading-none">LinkedIn Network</span>
                  <span className="text-xs font-mono">linkedin.com/in/minahil-murtaza-0b943a3bb</span>
                </div>
              </a>
            </li>

            <li>
              <a 
                href="https://behance.net/minahilmurtaza"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white hover:bg-neutral-100 transition-colors border border-neutral-200 text-xs font-semibold text-neutral-700"
              >
                <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                  <Globe size={14} />
                </span>
                <div>
                  <span className="block text-[8px] uppercase text-neutral-500 font-mono leading-none">Behance Portfolio</span>
                  <span className="text-xs font-mono">behance.net/minahilmurtaza</span>
                </div>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
