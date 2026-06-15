/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Package, Eye, Star } from 'lucide-react';
import { PACKAGING_ITEMS } from '../data';
import ProjectModal from './ProjectModal';

export default function PackagingSection() {
  const [selectedPack, setSelectedPack] = React.useState<typeof PACKAGING_ITEMS[0] | null>(null);

  const getPackagingVisual = (id: string, bgColor: string, accentColor: string) => {
    switch (id) {
      case 'crispy-chips':
        return (
          <div className="relative w-44 h-52 flex flex-col justify-between items-center p-4 rounded-3xl text-neutral-900 shadow-xl overflow-hidden group-hover:scale-105 transition-transform duration-500 border border-neutral-200/50" style={{ backgroundColor: bgColor }}>
            {/* Glossy Foil reflections */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 skew-x-12 transform translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-[1.2s] ease-in-out" />
            <div className="text-center">
              <span className="text-[7px] font-mono uppercase tracking-widest bg-yellow-950/10 px-2 py-0.5 rounded-full font-bold">Classic Crunch</span>
              <h5 className="text-2xl font-black font-sans leading-none tracking-tighter mt-1">CHIPS</h5>
            </div>
            
            {/* Styled vector chips floating inside a circle */}
            <div className="w-20 h-20 rounded-full bg-yellow-950/5 flex items-center justify-center relative">
              <div className="absolute w-12 h-6 bg-amber-400 rounded-[50%] rotate-12 shadow-md flex items-center justify-center font-mono text-[6px] font-bold text-amber-950 border border-amber-300">
                CRISP
              </div>
              <div className="absolute bottom-4 right-3 w-10 h-5 bg-amber-300 rounded-[50%] -rotate-12 shadow-sm" />
            </div>

            <div className="flex justify-between items-center w-full border-t border-yellow-950/20 pt-2 text-[8px] font-mono leading-none">
              <span>NET WT 60G</span>
              <span className="font-bold">SALTED MIX</span>
            </div>
          </div>
        );
      case 'cravings-nimko':
        return (
          <div className="relative w-44 h-52 flex flex-col justify-between items-center p-4 rounded-2xl text-white shadow-xl overflow-hidden group-hover:scale-105 transition-transform duration-500 border border-neutral-800" style={{ backgroundColor: bgColor }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 skew-x-12 transform translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-[1.2s] ease-in-out" />
            <div className="text-center">
              <span className="text-[7px] font-mono uppercase tracking-widest bg-orange-950/40 text-orange-200 px-2 py-0.5 rounded-full font-bold">Traditional Treats</span>
              <h5 className="text-lg font-extrabold font-sans leading-tight mt-1">Cravings</h5>
              <p className="text-[9px] text-orange-200 uppercase font-mono">NIMKO</p>
            </div>
            
            <div className="w-16 h-16 bg-orange-950/30 rounded-xl border border-orange-500/30 flex items-center justify-center flex-col p-1">
              <span className="text-[8px] font-mono text-orange-300">SPICY MIX</span>
              <div className="flex gap-0.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
              </div>
            </div>

            <div className="flex justify-between items-center w-full border-t border-white/10 pt-2 text-[8px] font-mono">
              <span>PREMIUM PACK</span>
              <span>150G Net</span>
            </div>
          </div>
        );
      case 'aloe-vera-gel':
        return (
          <div className="relative w-44 h-44 flex flex-col justify-between items-center p-4 rounded-full text-white shadow-xl overflow-hidden group-hover:scale-105 transition-transform duration-500 border border-neutral-800" style={{ backgroundColor: bgColor }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/15 to-white/0 skew-x-12 transform translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-[1.2s] ease-in-out" />
            
            <div className="text-center pt-2">
              <span className="text-[7px] font-mono uppercase tracking-widest bg-emerald-950/50 px-2 py-0.5 rounded-full">Organic Herb</span>
              <h5 className="text-md font-sans font-bold leading-none mt-1.5">ALOE VERA</h5>
              <span className="text-[8px] font-mono opacity-80 block">SOOTHING GEL</span>
            </div>

            {/* Beautiful organic aloe vector motif */}
            <div className="w-12 h-12 rounded-full border border-emerald-400/30 flex items-center justify-center bg-emerald-950/20">
              <svg className="w-8 h-8 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707-.707m12.728 0l-.707.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>

            <div className="pb-1 text-[8px] font-mono opacity-60">
              99% PURITY CONTROL
            </div>
          </div>
        );
      case 'citrus-bloom':
        return (
          <div className="relative w-36 h-52 flex flex-col justify-between items-center p-4 rounded-3xl text-neutral-900 shadow-xl overflow-hidden group-hover:scale-105 transition-transform duration-500 border border-neutral-200/50" style={{ backgroundColor: bgColor }}>
            {/* Top metal ring */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-neutral-300 via-neutral-100 to-neutral-400 border-b border-neutral-400/30" />
            
            {/* Glossy Aluminium Reflection */}
            <div className="absolute inset-x-4 inset-y-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12" />

            <div className="text-center pt-3 z-10">
              <span className="text-[7px] font-mono uppercase tracking-widest bg-amber-950/20 px-2 py-0.5 rounded-full font-bold">Sparkling Drink</span>
              <h5 className="text-lg font-black font-sans leading-none tracking-tight mt-1.5 text-amber-950">Citrus</h5>
              <p className="text-[9px] font-bold uppercase tracking-widest mt-0.5 text-amber-900">BLOOM</p>
            </div>
            
            {/* Sliced Orange illustration */}
            <div className="w-14 h-14 rounded-full bg-white/30 border border-white/50 flex items-center justify-center relative">
              <div className="w-10 h-10 rounded-full border border-dashed border-orange-500 animate-spin" style={{ animationDuration: '12s' }} />
              <div className="absolute w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center font-mono text-[7px] font-black text-white">SODA</div>
            </div>

            {/* Bottom metal ring */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-neutral-300 via-neutral-100 to-neutral-400 border-t border-neutral-400/30" />
            
            <div className="flex justify-between items-center w-full pb-3 border-t border-orange-950/10 pt-1 text-[8px] font-mono leading-none z-10 font-bold text-amber-950">
              <span>CAN 330ML</span>
              <span>100% PURE</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Description */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-[#e11d48] bg-[#e11d48]/10 px-2.5 py-1 rounded-full">
            Commercial Packaging
          </span>
          <h3 className="text-3xl font-sans font-bold tracking-tight text-white mt-1">
            Packaging Design & Material Mockups
          </h3>
        </div>
        <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
          High fidelity flat-die cut templates, product labels, and custom package substrates designed for retail shelving appeal.
        </p>
      </div>

      {/* Main interactive grid of physical container mockups */}
      <div id="packaging-products-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {PACKAGING_ITEMS.map((pack) => (
          <motion.div
            key={pack.id}
            id={`packaging-card-${pack.id}`}
            whileHover={{ y: -6 }}
            onClick={() => setSelectedPack(pack)}
            className="cursor-pointer group bg-neutral-900 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between items-center text-center shadow-2xl relative overflow-hidden h-[420px]"
          >
            {/* Ambient Background Glow matched with active theme */}
            <div 
              className="absolute -bottom-16 -left-16 w-32 h-32 blur-3xl opacity-10 rounded-full"
              style={{ backgroundColor: pack.bgColor }}
            />

            {/* Packaging visual block */}
            <div className="flex-grow flex items-center justify-center p-4">
              {getPackagingVisual(pack.id, pack.bgColor, pack.accentColor)}
            </div>

            {/* Typography labels */}
            <div className="space-y-2 mt-4 w-full">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                {pack.productType}
              </span>
              <h4 className="text-lg font-sans font-bold text-white group-hover:text-[#e11d48] transition-colors leading-tight">
                {pack.title} - {pack.category}
              </h4>
              
              <button
                onClick={() => setSelectedPack(pack)}
                className="mx-auto mt-2 py-1.5 px-4 rounded-xl bg-neutral-800 hover:bg-[#e11d48] text-white space-x-1.5 text-xs font-semibold flex items-center justify-center transition-all duration-200"
              >
                <Eye size={12} />
                <span>Specs Sheet</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Render Project Modal with Nutrition and Engineering data */}
      {selectedPack && (
        <ProjectModal
          isOpen={selectedPack !== null}
          onClose={() => setSelectedPack(null)}
          title={`${selectedPack.title} Packaging Specs`}
          category={selectedPack.category}
          badge={selectedPack.productType}
          description={`Commercial retail-ready food-grade package conceptual layout designed for ${selectedPack.title}. Fully compliant with global standard size parameters and FDA label directives.`}
          color={selectedPack.bgColor}
          bulletPoints={selectedPack.nutritionFacts}
          deliverables={[
            'Vector Dieline Template File (.AI / Illustrator)',
            'Symmetrical Printing Plate Separations',
            'Satin / Frosted Mockup Material Assets',
            'Full Regulatory Warning Panels'
          ]}
          specs={[
            { label: 'Substrate Standard', value: 'High Barrier Metalized OPP' },
            { label: 'Finishing Effect', value: 'Spot Matte Matte UV Varnish' },
            { label: 'Print Separation', value: 'CMYK + 1 Spotted Pantone Ref' },
            { label: 'Dieline Boundary', value: 'Standard Seal Hem 12mm' }
          ]}
        />
      )}
    </div>
  );
}
