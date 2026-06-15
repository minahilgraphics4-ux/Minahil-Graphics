/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Crown, Leaf, Hexagon, ArrowUpRight, HelpCircle } from 'lucide-react';
import { BRANDING_ITEMS } from '../data';
import ProjectModal from './ProjectModal';

export default function BrandingSection() {
  const [selectedProject, setSelectedProject] = React.useState<typeof BRANDING_ITEMS[0] | null>(null);

  const getBrandIcon = (id: string, size = 28, color = 'currentColor') => {
    switch (id) {
      case 'coffee-house':
        return <Coffee size={size} style={{ color: color }} />;
      case 'luxora-jewelry':
        return <Crown size={size} style={{ color: color }} />;
      case 'naturo-skincare':
        return <Leaf size={size} style={{ color: color }} />;
      case 'pixel-studio':
        return <Hexagon size={size} style={{ color: color }} />;
      default:
        return <HelpCircle size={size} />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Description */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full">
            Professional Suite
          </span>
          <h3 className="text-3xl font-sans font-bold tracking-tight text-white mt-1">
            Complete Branding Systems
          </h3>
        </div>
        <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
          Sleek vector solutions paired with comprehensive typography kits, corporate business cards, and 3D bag/box packages.
        </p>
      </div>

      {/* Grid of Branding Items */}
      <div id="branding-identity-grid" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {BRANDING_ITEMS.map((item) => (
          <motion.div
            key={item.id}
            id={`branding-card-${item.id}`}
            whileHover={{ y: -6, borderColor: item.colorTheme.primary }}
            onClick={() => setSelectedProject(item)}
            className="cursor-pointer flex flex-col h-full rounded-2xl bg-neutral-900 border border-neutral-800 p-6 shadow-xl transition-all duration-300 relative group overflow-hidden"
          >
            {/* Ambient Background Glow matching the brand's primary color */}
            <div 
              className="absolute -top-12 -right-12 w-28 h-28 blur-3xl opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500"
              style={{ backgroundColor: item.colorTheme.primary }}
            />

            {/* Brand Logo Header */}
            <div className="flex justify-between items-center mb-6">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center border transition-colors"
                style={{ 
                  backgroundColor: item.colorTheme.bg, 
                  borderColor: `${item.colorTheme.primary}40` 
                }}
              >
                {getBrandIcon(item.id, 24, item.colorTheme.primary)}
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 border border-neutral-800 rounded px-2 py-0.5">
                IDENTITY KIT
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-1 mb-4 flex-grow">
              <h4 className="text-xl font-bold font-sans text-white group-hover:text-amber-500 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-neutral-400 font-mono italic">
                "{item.tagline}"
              </p>
            </div>

            {/* Mockup Presentation Container */}
            <div 
              className="rounded-xl p-4 mb-4 flex flex-col justify-between h-32 relative overflow-hidden"
              style={{ backgroundColor: item.colorTheme.bg, color: item.colorTheme.text }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[9px] uppercase font-mono tracking-wider opacity-60">Corporate Card</span>
                  <p className="text-xs font-bold leading-tight font-sans mt-0.5">{item.title}</p>
                </div>
                {getBrandIcon(item.id, 14, item.colorTheme.primary)}
              </div>
              
              <div className="flex justify-between items-end border-t border-current/10 pt-2 mt-2">
                <div className="text-[8px] opacity-70 font-mono">
                  <p>M. Murtaza</p>
                  <p>Lead Designer</p>
                </div>
                <div className="w-8 h-5 rounded border border-current/20 flex items-center justify-center text-[7px] font-mono">
                  GOLD
                </div>
              </div>
            </div>

            {/* Deliverables lists */}
            <div className="space-y-2 mb-6">
              <div className="flex flex-wrap gap-1.5">
                {item.deliverables.slice(0, 3).map((deliv, idx) => (
                  <span key={idx} className="text-[10px] bg-neutral-950 text-neutral-400 px-2.5 py-1 rounded-md border border-neutral-800">
                    {deliv}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <button
              onClick={() => setSelectedProject(item)}
              className="w-full py-2.5 rounded-xl bg-neutral-800 hover:bg-[#e11d48] hover:text-white text-neutral-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200"
            >
              <span>Inspect Identity Specs</span>
              <ArrowUpRight size={14} />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Render Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          category="Complete Branding Identity System"
          badge="Specs & Architecture"
          description={selectedProject.details}
          color={selectedProject.colorTheme.primary}
          deliverables={selectedProject.deliverables}
          specs={[
            { label: 'Primary Brand Color', value: selectedProject.colorTheme.primary },
            { label: 'Secondary Tone', value: selectedProject.colorTheme.secondary },
            { label: 'Visual Style', value: selectedProject.logoType },
            { label: 'Card Substrate', value: '380gsm Cotton Matte Foil' }
          ]}
        />
      )}
    </div>
  );
}
