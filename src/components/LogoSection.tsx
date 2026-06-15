/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Compass, ShieldAlert } from 'lucide-react';
import { LOGO_ITEMS } from '../data';
import ProjectModal from './ProjectModal';

export default function LogoSection() {
  const [selectedLogo, setSelectedLogo] = React.useState<typeof LOGO_ITEMS[0] | null>(null);

  // Custom vector rendering in CSS/SVG to look ultra crisp!
  const renderLogoVector = (id: string, primaryColor: string) => {
    switch (id) {
      case 'flex-fitness':
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
              d="M30 20 H75 C80 20 85 24 80 32 L40 80 H25 C20 80 18 75 22 70 L48 38 H30 C25 38 22 34 24 28 L27 22 C28 20 29 20 30 20Z" 
              fill={primaryColor} 
            />
            <path d="M48 20 L28 65" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
            <circle cx="68" cy="40" r="4" fill="#FFFFFF" />
          </svg>
        );
      case 'vertex-solutions':
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
              d="M50 15 L85 35 L85 75 L50 95 L15 75 L15 35 Z" 
              stroke={primaryColor} 
              strokeWidth="5" 
              strokeLinejoin="round" 
            />
            {/* Connected node lines */}
            <path d="M50 15 L50 95" stroke={primaryColor} strokeWidth="2" strokeDasharray="4 4" />
            <path d="M15 35 L85 75" stroke={primaryColor} strokeWidth="2" strokeDasharray="4 4" />
            <path d="M15 75 L85 35" stroke={primaryColor} strokeWidth="2" strokeDasharray="4 4" />
            {/* Center Vertex Node */}
            <circle cx="50" cy="55" r="8" fill={primaryColor} className="animate-pulse" />
            <circle cx="50" cy="15" r="5" fill="#1e293b" stroke={primaryColor} strokeWidth="2" />
            <circle cx="85" cy="35" r="5" fill="#1e293b" stroke={primaryColor} strokeWidth="2" />
            <circle cx="85" cy="75" r="5" fill="#1e293b" stroke={primaryColor} strokeWidth="2" />
            <circle cx="15" cy="35" r="5" fill="#1e293b" stroke={primaryColor} strokeWidth="2" />
            <circle cx="15" cy="75" r="5" fill="#1e293b" stroke={primaryColor} strokeWidth="2" />
          </svg>
        );
      case 'greenly-organics':
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
              d="M50 15 C80 15 85 45 85 60 C85 75 70 85 50 85 C30 85 15 75 15 60 C15 45 20 15 50 15 Z" 
              stroke={primaryColor} 
              strokeWidth="4" 
            />
            <path d="M50 85 V30 C50 30 65 40 68 55" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" />
            <path d="M50 50 C50 50 35 45 32 35" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="30" r="3" fill={primaryColor} />
          </svg>
        );
      case 'avant-studio':
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
              d="M50 15 L85 85 H70 L50 40 L30 85 H15 Z" 
              fill={primaryColor} 
            />
            <path d="M35 65 H65" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
            <circle cx="50" cy="27" r="5" fill="#FFFFFF" />
          </svg>
        );
      case 'wander-travel':
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Sunrise circles */}
            <circle cx="50" cy="50" r="25" fill="#fef08a" />
            {/* Mountain vectors */}
            <motion.path 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              d="M15 75 L45 35 L62 55 L75 40 L90 75 Z" 
              fill={primaryColor} 
            />
            {/* Framing Crest boundary */}
            <circle cx="50" cy="50" r="42" stroke={primaryColor} strokeWidth="3" />
            <path d="M10 75 H90" stroke={primaryColor} strokeWidth="3" />
          </svg>
        );
      case 'luna-wellness':
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
              d="M60 20 C35 20 20 40 20 60 C20 75 30 85 45 85 C30 80 28 60 38 48 C45 40 55 35 68 38 C62 26 73 24 75 22 C68 20 64 20 60 20Z" 
              fill={primaryColor} 
            />
            <circle cx="55" cy="55" r="8" fill="#FFFFFF" />
            <path d="M55 47 L55 63 M47 55 H63" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 'apex-racing':
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
              d="M15 80 L45 20 H55 L85 80 H70 L50 42 L30 80 Z" 
              fill={primaryColor} 
            />
            <path d="M22 62 H42 M58 62 H78 M33 50 H67" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
        );
      case 'pantry-fresh':
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              d="M32 50 C25 50 25 40 32 35 C32 25 45 20 50 25 C55 20 68 25 68 35 C75 40 75 50 68 50 Z" 
              fill={primaryColor} 
            />
            <rect x="36" y="50" width="28" height="18" rx="2" fill={primaryColor} />
            <path d="M42 68 L32 82 M58 68 L68 82" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          </svg>
        );
      case 'pulse-energy':
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2 }}
              d="M15 50 H35 L42 20 L50 80 L56 42 L62 55 L68 50 H85" 
              stroke={primaryColor} 
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polygon points="50,42 56,22 47,22 43,45 52,45" fill="#FFFFFF" />
            <circle cx="50" cy="80" r="3" fill={primaryColor} className="animate-ping" />
          </svg>
        );
      case 'orbit-aerospace':
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="50" rx="36" ry="12" stroke={primaryColor} strokeWidth="1.5" transform="rotate(-30 50 50)" />
            <ellipse cx="50" cy="50" rx="36" ry="12" stroke={primaryColor} strokeWidth="1.5" transform="rotate(30 50 50)" />
            <motion.path 
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
              d="M50 15 L72 75 L50 62 L28 75 Z" 
              fill={primaryColor} 
            />
            <line x1="50" y1="15" x2="50" y2="62" stroke="#FFFFFF" strokeWidth="2" />
          </svg>
        );
      case 'nova-craft':
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="34" stroke={primaryColor} strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="24" stroke={primaryColor} strokeWidth="2" />
            <motion.path 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              d="M50 12 L55 45 L88 50 L55 55 L50 88 L45 55 L12 50 L45 45 Z" 
              fill={primaryColor} 
            />
            <polygon points="50,38 53,50 50,62 47,50" fill="#FFFFFF" />
          </svg>
        );
      case 'acme-logistics':
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              d="M50 20 L76 34 L76 66 L50 80 L24 66 L24 34 Z" 
              stroke={primaryColor} 
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path d="M50 20 L50 80" stroke={primaryColor} strokeWidth="2" />
            <path d="M24 34 L50 48 L76 34" stroke={primaryColor} strokeWidth="2" />
            <path d="M12 42 H22" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M8 50 H20" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M14 58 H22" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Dynamic Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 pb-4 border-b border-neutral-100">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-[#e11d48] bg-[#e11d48]/5 px-2.5 py-1 rounded-full">
            Vectors & Logomarks
          </span>
          <h3 className="text-3xl font-sans font-extrabold tracking-tight text-neutral-900 mt-1.5">
            Logotype Collections
          </h3>
        </div>
        <p className="text-sm text-neutral-500 max-w-sm">
          Symmetrical geometric systems and minimal vector concepts built using precise grid metrics.
        </p>
      </div>

      {/* Logos Horizontal Scrollable or Interactive Card Grid */}
      <div id="logos-cards-grid" className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {LOGO_ITEMS.map((logo) => (
          <motion.div
            key={logo.id}
            id={`logo-card-${logo.id}`}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => setSelectedLogo(logo)}
            className="cursor-pointer bg-neutral-50 border border-neutral-200/80 rounded-2xl p-6 flex flex-col justify-between items-center text-center h-[320px] transition-all duration-300 shadow-sm hover:shadow-md hover:bg-white"
          >
            {/* Logo Vector Canvas Wrapper */}
            <div className="flex-grow flex items-center justify-center p-4">
              <div className="p-5 rounded-2xl bg-neutral-900 shadow-inner flex items-center justify-center min-w-[120px] min-h-[120px]">
                {renderLogoVector(logo.id, logo.primaryColor)}
              </div>
            </div>

            {/* Design name & brief category */}
            <div className="space-y-2 mt-4 w-full">
              <h4 className="text-xs uppercase font-mono tracking-widest text-neutral-400">
                {logo.logoStyle} STYLE
              </h4>
              <p className="text-sm font-sans font-bold text-neutral-900 truncate">
                {logo.name}
              </p>
              
              <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-[#e11d48] group pt-1">
                <span>View rationale</span>
                <ArrowRight size={10} className="transform transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Render Project Modal */}
      {selectedLogo && (
        <ProjectModal
          isOpen={selectedLogo !== null}
          onClose={() => setSelectedLogo(null)}
          title={selectedLogo.name}
          category="Vector Logomark Design"
          badge={`${selectedLogo.logoStyle} logotype`}
          description={selectedLogo.description}
          color={selectedLogo.primaryColor}
          deliverables={[
            'High-Resolution Vector (.AI, .SVG, .EPS)',
            'Creative Logo Usage & Style Guide',
            'Full Monochromatic Alternates',
            'Symmetrical Layout Grids'
          ]}
          specs={[
            { label: 'Asset Format', value: 'Scalable Vector Graphic' },
            { label: 'Category Focus', value: selectedLogo.category },
            { label: 'Grid System', value: '16x16 Proportional' },
            { label: 'Sub-Palette', value: `${selectedLogo.primaryColor} + Translucents` }
          ]}
        />
      )}
    </div>
  );
}
