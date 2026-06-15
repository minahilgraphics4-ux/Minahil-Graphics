/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Flame, Send, Award, Heart } from 'lucide-react';
import { SOCIAL_ITEMS } from '../data';
import ProjectModal from './ProjectModal';

// Hand-picked high resolution photography CDN links to match the slider requirements
const SOCIAL_IMAGES = {
  'smash-burger': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600',
  'food-sushi': 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=600',
  'sneaker-promo': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600',
  'cosmetic-shampoo': 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=600',
  'chic-fashion': 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80&w=600',
  'retro-watches': 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=600',
  'luxury-villas': 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=600',
  'cozy-apartments': 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=600'
};

export default function SocialSection() {
  const [selectedItem, setSelectedItem] = React.useState<typeof SOCIAL_ITEMS[0] | null>(null);

  return (
    <div className="space-y-6">
      {/* Dynamic Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 pb-3 border-b border-neutral-800">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-[#e11d48] bg-[#e11d48]/10 px-2.5 py-1 rounded-full">
            Social Campaigns
          </span>
          <h3 className="text-3xl font-sans font-bold tracking-tight text-white mt-1.5">
            Social Media Design Feed
          </h3>
        </div>
        <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
          High-performance social assets designed to maximize click-through rate and user recall on Instagram and Facebook feeds.
        </p>
      </div>

      {/* Grid of Social Layouts */}
      <div id="social-media-feed-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SOCIAL_ITEMS.map((item) => {
          const bannerImage = SOCIAL_IMAGES[item.id as keyof typeof SOCIAL_IMAGES];
          return (
            <motion.div
              key={item.id}
              id={`social-card-${item.id}`}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedItem(item)}
              className="cursor-pointer group bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 flex flex-col justify-between h-[420px] shadow-xl relative"
            >
              {/* Image Banner Header with Hover overlay info */}
              <div className="relative h-[220px] overflow-hidden bg-neutral-950">
                <img
                  src={bannerImage}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                
                {/* Visual Accent Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                {/* Tag label */}
                <div className="absolute top-3 left-3">
                  <span 
                    className="text-[9px] font-mono font-bold tracking-wider px-2 py-1 rounded-md text-white border"
                    style={{ backgroundColor: `${item.accentColor}20`, borderColor: `${item.accentColor}40` }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Interactive Save Icon */}
                <div className="absolute top-3 right-3 text-white/60 hover:text-rose-500 cursor-pointer p-1.5 rounded-full bg-black/40 hover:bg-black/60 transition-colors">
                  <Heart size={14} fill="currentColor" className="text-rose-500 animate-pulse" />
                </div>

                {/* Floating Discount Sticker */}
                {item.discount && (
                  <div 
                    className="absolute bottom-3 right-3 animate-bounce shadow-lg w-12 h-12 rounded-full flex flex-col items-center justify-center text-[10px] font-mono font-black"
                    style={{ backgroundColor: item.accentColor, color: item.bgColor }}
                  >
                    <span className="leading-none">{item.discount.split(' ')[0]}</span>
                    <span className="text-[7px] font-medium uppercase">{item.discount.split(' ')[1]}</span>
                  </div>
                )}
              </div>

              {/* Text / Stats area */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[#e11d48] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-sans font-bold text-white leading-tight">
                    {item.title}
                  </h4>
                </div>

                {/* Engagement / Specs info */}
                <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                    <Instagram size={14} className="text-[#e11d48]" />
                    <span>Active Feed Ad</span>
                  </div>
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="text-xs font-semibold text-[#e11d48] hover:text-white flex items-center gap-1 group/btn"
                  >
                    <span>View Campaign Specs</span>
                    <Send size={10} className="transform transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Campaign Specification Modal */}
      {selectedItem && (
        <ProjectModal
          isOpen={selectedItem !== null}
          onClose={() => setSelectedItem(null)}
          title={selectedItem.title}
          category="Social Media Campaign Design"
          badge={selectedItem.tag}
          description={`High-conversion social asset tailored for viral reach in the ${selectedItem.category} niche. Balanced utilizing visual psychology secrets, premium lighting, and direct-response copywriting elements.`}
          color={selectedItem.accentColor}
          bulletPoints={selectedItem.bulletPoints}
          deliverables={[
            'Square Feed Assets (1080x1080px)',
            'Story / Portrait Format (1080x1920px)',
            'Layered Source File (.PSD / Photoshop)',
            'Configured Brand Typography Pairing'
          ]}
          specs={[
            { label: 'Aspect Ratio', value: '1:1 Square + 9:16 Story' },
            { label: 'Palette Accents', value: selectedItem.accentColor },
            { label: 'Typography Standard', value: 'Cinzel + Inter Bold' },
            { label: 'Primary Target', value: 'Click-Through Performance' }
          ]}
        />
      )}
    </div>
  );
}
