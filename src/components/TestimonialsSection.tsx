/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Heart, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function TestimonialsSection() {
  const [selectedIdx, setSelectedIdx] = React.useState(0);

  return (
    <div className="space-y-6">
      {/* Dynamic Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 pb-3 border-b border-neutral-800">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-[#e11d48] bg-[#e11d48]/10 px-2.5 py-1 rounded-full flex items-center gap-1.5 w-fit">
            <ShieldCheck size={14} /> Client Trust
          </span>
          <h3 className="text-3xl font-sans font-bold tracking-tight text-white mt-1.5">
            Verified Partner Reviews
          </h3>
        </div>
        <p className="text-sm text-neutral-400 max-w-sm">
          Real feedback from corporate agencies, boutique ecommerce companies, and video channels on active campaign metrics.
        </p>
      </div>

      {/* Grid containing core testimonial cards */}
      <div id="testimonials-workspace" className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
        {TESTIMONIALS.map((item, idx) => (
          <motion.div
            key={item.id}
            id={`testimonial-${item.id}`}
            whileHover={{ y: -4, borderColor: '#cca43b' }}
            onClick={() => setSelectedIdx(idx)}
            className={`cursor-pointer group rounded-3xl p-6 bg-neutral-900 border border-neutral-800 flex flex-col justify-between min-h-[220px] transition-all relative ${
              selectedIdx === idx ? 'ring-2 ring-[#e11d48] border-transparent' : ''
            }`}
          >
            {/* Quote decoration */}
            <div className="absolute right-6 top-6 text-neutral-800 group-hover:text-[#e11d48]/10 transition-colors">
              <Quote size={40} className="transform rotate-18 skew-x-3" />
            </div>

            {/* Stars rating */}
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>

            {/* Review content */}
            <p className="text-sm text-neutral-300 leading-relaxed italic z-10 pt-3 flex-grow">
              "{item.text}"
            </p>

            {/* User credentials */}
            <div className="flex items-center gap-3 pt-4 border-t border-neutral-800 mt-4">
              <div className="w-10 h-10 rounded-full bg-neutral-950 border border-neutral-800 text-white flex items-center justify-center font-mono font-bold text-xs uppercase">
                {item.avatar}
              </div>
              <div>
                <h5 className="text-sm font-sans font-bold text-white leading-tight">
                  {item.name}
                </h5>
                <p className="text-[11px] font-mono text-neutral-400 uppercase">
                  {item.role}, {item.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust banner */}
      <div className="pt-4 flex items-center justify-center gap-2 text-xs font-mono text-neutral-400">
        <Heart size={14} className="text-[#e11d48]" />
        <span>CLIENT SATISFACTION IS MY TOP PRIORITY!</span>
      </div>
    </div>
  );
}
