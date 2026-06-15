/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { FileText, Phone, Calendar, ArrowRight, ClipboardCheck } from 'lucide-react';
import { FLYER_ITEMS } from '../data';
import ProjectModal from './ProjectModal';

const FLYER_IMAGES = {
  'delightful-burger': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600',
  'live-music-night': 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600',
  'smart-ideas': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
  'company-profile': 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=600'
};

export default function FlyerSection() {
  const [selectedFlyer, setSelectedFlyer] = React.useState<typeof FLYER_ITEMS[0] | null>(null);

  return (
    <div className="space-y-6">
      {/* Dynamic Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 pb-3 border-b border-neutral-200">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-[#e11d48] bg-[#e11d48]/5 px-2.5 py-1 rounded-full">
            Print Assets
          </span>
          <h3 className="text-3xl font-sans font-extrabold tracking-tight text-neutral-900 mt-1.5 ">
            Flyer & Brochure Design
          </h3>
        </div>
        <p className="text-sm text-neutral-500 max-w-sm">
          A4 High-Contrast single or bi-fold print elements structured to capture visual focus from distance.
        </p>
      </div>

      {/* Grid of Cards */}
      <div id="flyers-brochures-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FLYER_ITEMS.map((item) => {
          const imageBg = FLYER_IMAGES[item.id as keyof typeof FLYER_IMAGES];
          return (
            <motion.div
              key={item.id}
              id={`flyer-card-${item.id}`}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedFlyer(item)}
              className="cursor-pointer bg-white border border-neutral-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-[460px] relative group"
            >
              {/* Flyer Body Image Canvas */}
              <div className="relative h-[280px] overflow-hidden bg-neutral-100">
                <img
                  src={imageBg}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Overlapped Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

                {/* Vertical design numbers shown in design presentation decks */}
                <div className="absolute top-3 left-3 bg-neutral-900/60 backdrop-blur-sm text-white px-2 py-1 rounded-md text-[9px] font-mono tracking-wider border border-white/10 uppercase">
                  {item.category.includes('Food') ? 'Gourmet' : 'Core Corporate'}
                </div>

                {/* Badges / Dates overlays */}
                {item.id === 'delightful-burger' && (
                  <div className="absolute top-3 right-3 bg-red-600 outline-dashed outline-1 outline-white text-white px-3 py-1.5 text-xs font-mono font-bold animate-pulse rotate-6 shadow-md rounded">
                    50% OFF
                  </div>
                )}
                {item.id === 'live-music-night' && (
                  <div className="absolute top-3 right-3 bg-fuchsia-600 text-white px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded">
                    25 MAY
                  </div>
                )}
              </div>

              {/* Informative text elements */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#e11d48]">
                    {item.category}
                  </span>
                  <h4 className="text-base font-sans font-extrabold text-neutral-900 leading-snug group-hover:text-[#e11d48] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* Card footer details */}
                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400 font-mono">
                  {item.id === 'delightful-burger' ? (
                    <div className="flex items-center gap-1.5 text-orange-600">
                      <Phone size={12} />
                      <span>0123-456-7890</span>
                    </div>
                  ) : item.id === 'live-music-night' ? (
                    <div className="flex items-center gap-1.5 text-fuchsia-600">
                      <Calendar size={12} />
                      <span>Fest Entry On</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-blue-600">
                      <ClipboardCheck size={12} />
                      <span>Ready to print</span>
                    </div>
                  )}

                  <div className="flex items-center gap-1 text-[11px] font-semibold text-[#e11d48]">
                    <span>Inspect</span>
                    <ArrowRight size={10} className="transform transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Blueprint Detail Modal */}
      {selectedFlyer && (
        <ProjectModal
          isOpen={selectedFlyer !== null}
          onClose={() => setSelectedFlyer(null)}
          title={selectedFlyer.title}
          category={selectedFlyer.category}
          badge={selectedFlyer.id === 'company-profile' ? 'Annual Print Booklet' : 'A4 Promo Postcard'}
          description={`High-contrast typography-forward layout designed for ${selectedFlyer.title}. Every layout element matches specific corporate guides or promotional guidelines depending on standard print practices.`}
          color={selectedFlyer.accentColor}
          bulletPoints={[
            'Structured visual grid using gold-ratio margins',
            'Sufficient layout contrast with high-visibility callouts',
            'Clean bleed line boundaries of 3mm for perfect offset-feed printing'
          ]}
          deliverables={[
            'Layered Adobe InDesign (.INDD) or Illustrator Source',
            'Full Press-Ready CMYK PDF with Crop Lines',
            'Dynamic Digital Web PDF Version',
            'Tailored Vector Elements'
          ]}
          specs={[
            { label: 'Paper Standard', value: 'ISO A4 (210 x 297mm)' },
            { label: 'Visual Bleed', value: '3mm Outside Boundary' },
            { label: 'Color Format', value: 'CMYK FOGRA39 Offset Profile' },
            { label: 'Primary Font', value: 'Montserrat / Space Grotesk' }
          ]}
        />
      )}
    </div>
  );
}
