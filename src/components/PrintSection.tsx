/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Printer, Layout, Crop, HelpCircle } from 'lucide-react';
import { PRINT_ITEMS } from '../data';
import ProjectModal from './ProjectModal';

export default function PrintSection() {
  const [selectedPrint, setSelectedPrint] = React.useState<typeof PRINT_ITEMS[0] | null>(null);
  const [showPrintGuides, setShowPrintGuides] = React.useState(false);

  // Return stylized structures for Print Mockups (with gridlines)
  const renderPrintMockup = (id: string, bgColor: string, accentColor: string) => {
    const guideStyle = showPrintGuides ? 'border border-dashed border-[#e11d48]/40 bg-[#e11d48]/5' : '';
    
    switch (id) {
      case 'black-friday':
        return (
          <div className="relative w-40 h-56 rounded-lg shadow-xl overflow-hidden flex flex-col justify-between p-4 flex-shrink-0" style={{ backgroundColor: bgColor }}>
            {/* Guide overlay */}
            {showPrintGuides && (
              <div className="absolute inset-2 border border-dashed border-cyan-500/50 pointer-events-none flex items-center justify-center">
                <span className="text-[6px] font-mono text-cyan-400 absolute top-1 left-1">SAFE ZONE</span>
              </div>
            )}
            
            <div className="text-center">
              <span className="text-[7px] font-mono tracking-widest text-[#e11d48] uppercase">Clearance Event</span>
              <h5 className="text-xl font-bold font-sans text-white leading-none tracking-tighter mt-1">BLACK FRIDAY</h5>
            </div>
            
            {/* Bold contrast badge */}
            <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center flex-col rotate-12" style={{ backgroundColor: accentColor }}>
              <span className="text-white text-[12px] font-black leading-none">UP TO</span>
              <span className="text-black text-[16px] font-extrabold leading-none">70% OFF</span>
            </div>

            <div className="text-[6px] font-mono text-neutral-500 text-center uppercase tracking-wider pb-1">
              Storewide Clearance Sale
            </div>
          </div>
        );
      case 'marketing-agency':
        return (
          <div className="relative w-28 h-64 rounded-t-lg border-x border-t border-neutral-300 shadow-xl overflow-hidden flex flex-col justify-between p-3 bg-white text-neutral-900 flex-shrink-0">
            {/* Roll up stand base representation */}
            <div className="absolute bottom-0 inset-x-0 h-3 bg-neutral-400 border-t border-neutral-500" />
            
            {showPrintGuides && (
              <div className="absolute inset-1.5 border border-dashed border-cyan-500/50 pointer-events-none flex items-center justify-center">
                <span className="text-[6px] font-mono text-cyan-500 absolute top-1 left-1">SAFE ZONE</span>
              </div>
            )}

            <div className="space-y-1">
              <span className="text-[6px] font-mono text-blue-600 uppercase tracking-widest">Connect Globally</span>
              <h5 className="text-xs font-black font-sans leading-tight">DIGITAL MARKETING AGENCY</h5>
              <p className="text-[6px] text-neutral-500 font-sans">Leverage the power of target channels to skyrocket conversion stats.</p>
            </div>

            {/* Simulated content block */}
            <div className="space-y-1.5 my-3">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                  <div className="h-1 w-12 bg-neutral-200 rounded" />
                </div>
              ))}
            </div>

            <div className="pb-4 pt-1 border-t border-neutral-100 flex justify-between items-center text-[5px] font-mono text-neutral-400">
              <span>GROW BUSINESS</span>
              <span>2026 EDITION</span>
            </div>
          </div>
        );
      case 'grand-opening':
        return (
          <div className="relative w-32 h-56 rounded-md shadow-xl overflow-hidden flex flex-col justify-between p-3 flex-shrink-0" style={{ backgroundColor: bgColor }}>
            {showPrintGuides && (
              <div className="absolute inset-1.5 border border-dashed border-cyan-500/50 pointer-events-none flex items-center justify-center">
                <span className="text-[6px] font-mono text-cyan-400 absolute top-1 left-1">SAFE ZONE</span>
              </div>
            )}

            <div className="text-center">
              <span className="text-[6px] font-mono text-yellow-500 uppercase tracking-widest">Special Event</span>
              <h5 className="text-sm font-extrabold font-sans text-white mt-1 leading-none">GRAND OPENING</h5>
            </div>

            {/* Decorative golden ribbon graphics */}
            <div className="w-16 h-1 bg-yellow-500/50 rotate-45 transform translate-x-8" />

            <div className="bg-yellow-500/10 border border-yellow-500/30 p-2 rounded text-center my-2">
              <span className="text-[12px] font-black text-yellow-500 block leading-none">20% OFF</span>
              <span className="text-[6px] font-mono text-yellow-100 uppercase tracking-wider block mt-0.5">ON ALL IN-STORE ITEMS</span>
            </div>

            <div className="text-center pt-2 border-t border-slate-800 text-[5px] font-mono text-neutral-500 uppercase">
              Free Drinks • Music • Gifts
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 pb-3 border-b border-neutral-800">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full flex items-center gap-1.5 w-fit">
            <Printer size={14} /> Production Print
          </span>
          <h3 className="text-3xl font-sans font-bold tracking-tight text-white mt-1.5">
            Commercial Print Designs
          </h3>
        </div>
        
        {/* Toggle print helper lines button */}
        <button
          onClick={() => setShowPrintGuides(!showPrintGuides)}
          className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all duration-200 ${
            showPrintGuides 
              ? 'bg-[#e11d48] text-white border-transparent shadow shadow-rose-500/20' 
              : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white'
          }`}
        >
          <Crop size={14} />
          <span>{showPrintGuides ? 'Hide Printer Guides' : 'Show Printer Guides'}</span>
        </button>
      </div>

      {/* Grid */}
      <div id="print-designs-carousel" className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
        {PRINT_ITEMS.map((item) => (
          <motion.div
            key={item.id}
            id={`print-card-${item.id}`}
            whileHover={{ y: -6 }}
            onClick={() => setSelectedPrint(item)}
            className="cursor-pointer group bg-neutral-900 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between items-center text-center shadow-2xl relative overflow-hidden h-[420px]"
          >
            {/* Backdrop glow */}
            <div 
              className="absolute top-12 right-12 w-28 h-28 blur-3xl opacity-10 rounded-full"
              style={{ backgroundColor: item.accentColor }}
            />

            {/* Visual Block */}
            <div className="flex-grow flex items-center justify-center p-4">
              {renderPrintMockup(item.id, item.bgColor, item.accentColor)}
            </div>

            {/* Descriptions */}
            <div className="space-y-2 mt-4 w-full">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                {item.category}
              </span>
              <h4 className="text-base font-sans font-bold text-white group-hover:text-amber-500 transition-colors leading-tight">
                {item.title}
              </h4>
              
              <button
                onClick={() => setSelectedPrint(item)}
                className="mx-auto mt-2.5 py-1.5 px-4 rounded-xl bg-neutral-800 hover:bg-[#e11d48] text-white text-xs font-semibold flex items-center justify-center gap-1 transition-all duration-200"
              >
                <span>View Bleed Specs</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Blueprint Detail Modal */}
      {selectedPrint && (
        <ProjectModal
          isOpen={selectedPrint !== null}
          onClose={() => setSelectedPrint(null)}
          title={selectedPrint.title}
          category={selectedPrint.category}
          badge="Commercial Press File"
          description={`High-contrast typography-forward press layout designed for ${selectedPrint.title}. Fully matching ISO standards with customizable layouts.`}
          color={selectedPrint.accentColor}
          bulletPoints={[
            'Built using precise grid ratios and margins',
            'Full alignment contrast allowing easy distance readability',
            'Includes 3mm bleed margin lines to avoid trimming errors'
          ]}
          deliverables={[
            'Layered InDesign (.INDD) / Illustrator Source',
            'Press Ready high-res PDF with crop marks',
            'Simulated composite preview mockups',
            'FOGRA39 target offset color outputs'
          ]}
          specs={[
            { label: 'Paper Standard', value: 'High Density Print stock' },
            { label: 'Bleed Safety', value: '3mm Outside Boundaries' },
            { label: 'Color Space', value: 'CMYK Press Separation' },
            { label: 'Vector Resolution', value: 'Unlimited Vector Scale' }
          ]}
        />
      )}
    </div>
  );
}
