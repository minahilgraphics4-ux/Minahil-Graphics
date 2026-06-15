/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Play, Eye, Clock, Youtube, Sparkles } from 'lucide-react';
import { THUMBNAIL_ITEMS } from '../data';
import ProjectModal from './ProjectModal';

const THUMBNAIL_IMAGES = {
  'ps-secrets': 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600',
  'gaming-victory': 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600',
  'grow-business': 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600',
  'freelancing-guide': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600'
};

export default function ThumbnailSection() {
  const [selectedThumb, setSelectedThumb] = React.useState<typeof THUMBNAIL_ITEMS[0] | null>(null);

  // Get localized layout styles based on thumbnail target
  const getStylizedLabels = (style: string) => {
    switch (style) {
      case 'gaming':
        return { label: 'BATTLEFIELD ESPORTS', badgeColor: '#3b82f6', glow: 'shadow-blue-500/30' };
      case 'business':
        return { label: 'FINANCE ACADEMY', badgeColor: '#f97316', glow: 'shadow-orange-500/30' };
      case 'freelancing':
        return { label: 'FREELANCE WEALTH', badgeColor: '#22c55e', glow: 'shadow-emerald-500/30' };
      default:
        return { label: 'CREATIVE MASTERCLASS', badgeColor: '#e11d48', glow: 'shadow-rose-500/30' };
    }
  };

  return (
    <div className="space-y-6">
      {/* Dynamic Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 pb-3 border-b border-neutral-200">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-[#e11d48] bg-[#e11d48]/5 px-2.5 py-1 rounded-full flex items-center gap-1.5 w-fit">
            <Youtube size={14} /> Attention Logistics
          </span>
          <h3 className="text-3xl font-sans font-extrabold tracking-tight text-neutral-900 mt-1.5">
            YouTube Thumbnail Designs
          </h3>
        </div>
        <p className="text-sm text-neutral-500 max-w-sm">
          High-performance click-optimized compositions styled using psychological contrast curves and facial focus blocks.
        </p>
      </div>

      {/* Thumbnails grid */}
      <div id="youtube-thumbnails-shelf" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {THUMBNAIL_ITEMS.map((thumb) => {
          const bannerUrl = THUMBNAIL_IMAGES[thumb.id as keyof typeof THUMBNAIL_IMAGES];
          const designSetup = getStylizedLabels(thumb.style);

          return (
            <motion.div
              key={thumb.id}
              id={`thumbnail-card-${thumb.id}`}
              whileHover={{ y: -6, scale: 1.01 }}
              onClick={() => setSelectedThumb(thumb)}
              className={`cursor-pointer bg-neutral-50 border border-neutral-200 rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:bg-white`}
            >
              {/* YouTube Media Simulator Box */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-950 group shadow-md">
                <img
                  src={bannerUrl}
                  alt={thumb.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Simulated Play Head Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#hd1d48] bg-[#e11d48] text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-105 transition-transform duration-300">
                    <Play fill="currentColor" size={20} className="translate-x-0.5" />
                  </div>
                </div>

                {/* Duration chip */}
                <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-sm text-white text-[10px] font-mono px-1.5 py-0.5 rounded flex items-center gap-1">
                  <Clock size={10} />
                  <span>{thumb.duration}</span>
                </div>

                {/* Creator tag */}
                <div className="absolute top-2.5 left-2.5">
                  <span 
                    className="text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded text-white shadow-sm border border-white/10 uppercase"
                    style={{ backgroundColor: designSetup.badgeColor }}
                  >
                    {thumb.badge}
                  </span>
                </div>
              </div>

              {/* Video stats metrics */}
              <div className="space-y-2 mt-4 flex-grow flex flex-col justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    {designSetup.label}
                  </span>
                  <h4 className="text-sm font-sans font-extrabold text-neutral-900 leading-snug group-hover:text-[#e11d48] transition-colors line-clamp-2">
                    {thumb.title}
                  </h4>
                </div>

                {/* Metrics */}
                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-mono">
                  <div className="flex items-center gap-1">
                    <Eye size={12} />
                    <span>{thumb.views}</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#e11d48]">CLICK SPECTRA</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Render Project Modal */}
      {selectedThumb && (
        <ProjectModal
          isOpen={selectedThumb !== null}
          onClose={() => setSelectedThumb(null)}
          title={selectedThumb.title}
          category="Aesthetic Thumbnail Blueprint"
          badge={selectedThumb.badge}
          description={`High-performance dynamic video cover designed for ${selectedThumb.title}. Tailored specifically to score high on click-through dynamics using optimized high-saturation contrast palettes and facial balance.`}
          color={selectedThumb.style === 'gaming' ? '#3b82f6' : selectedThumb.style === 'business' ? '#f97316' : '#22c55e'}
          bulletPoints={[
            'Over-saturated contrasting text outlines to ensure high mobile readability',
            'Symmetrical visual flow directing sights straight to core topic hooks',
            '3D Depth outline glowing frames surrounding the key focal person/element'
          ]}
          deliverables={[
            'Layered Photoshop Document (.PSD) with tidy layers',
            'Optimized JPEG / PNG Assets (1280x720px / Under 2MB)',
            'Creative Accent & Shadow Isolation PNG kits',
            'Selected Typography pairings and gradients'
          ]}
          specs={[
            { label: 'Asset Resolution', value: '1280 x 720 px (HD)' },
            { label: 'Target Ratio', value: '16:9 Landscape' },
            { label: 'Sub-Category style', value: selectedThumb.style.toUpperCase() },
            { label: 'File Compression', value: 'Optimized WebP File Package' }
          ]}
        />
      )}
    </div>
  );
}
