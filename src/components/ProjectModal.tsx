/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Package, Layers, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  badge?: string;
  description: string;
  color?: string;
  bulletPoints?: string[];
  deliverables?: string[];
  specs?: { label: string; value: string }[];
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  category,
  badge,
  description,
  color = '#e11d48',
  bulletPoints,
  deliverables,
  specs
}: ProjectModalProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="project-modal-container" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            id="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md"
          />

          {/* Modal Content Card */}
          <motion.div
            id="modal-card"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 text-white shadow-2xl"
          >
            {/* Minimalist Design Header Accents */}
            <div 
              className="h-2 w-full" 
              style={{ backgroundColor: color }} 
            />

            {/* Close Button */}
            <button
              id="modal-close-btn"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors duration-200"
            >
              <X size={18} />
            </button>

            {/* Modal Body */}
            <div className="p-8">
              {/* Category & Badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase font-mono tracking-widest text-neutral-400">
                  {category}
                </span>
                {badge && (
                  <span 
                    className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider"
                    style={{ backgroundColor: `${color}15`, color: color, border: `1px solid ${color}30` }}
                  >
                    {badge}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-3xl font-sans font-bold tracking-tight mb-4">
                {title}
              </h3>

              {/* Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                
                {/* Left Side: Summary & Description */}
                <div className="md:col-span-2 space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500">Project Overview</h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {description}
                  </p>

                  {/* Bullet points mapping */}
                  {bulletPoints && bulletPoints.length > 0 && (
                    <div className="pt-4 space-y-2">
                      <h5 className="text-xs font-mono uppercase tracking-widest text-neutral-500">Design Features</h5>
                      <ul className="space-y-2">
                        {bulletPoints.map((point, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-neutral-300">
                            <span className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right Side: Metadata / Tech Info */}
                <div className="space-y-4 bg-neutral-950/40 p-4 rounded-xl border border-neutral-800/60">
                  {deliverables && deliverables.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 flex items-center gap-1.5">
                        <Layers size={12} style={{ color: color }} /> Deliverables
                      </h4>
                      <ul className="space-y-1.5">
                        {deliverables.map((item, index) => (
                          <li key={index} className="flex items-center gap-1.5 text-xs text-neutral-300">
                            <CheckCircle size={12} className="text-emerald-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {specs && specs.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-neutral-800/60">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 flex items-center gap-1.5">
                        <Package size={12} style={{ color: color }} /> Specifications
                      </h4>
                      <div className="space-y-2">
                        {specs.map((spec, index) => (
                          <div key={index} className="flex justify-between items-center text-[11px] leading-tight">
                            <span className="text-neutral-500">{spec.label}</span>
                            <span className="font-mono text-neutral-300">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-4 border-t border-neutral-800/60">
                    <button 
                      onClick={onClose}
                      className="w-full py-2 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors text-xs font-semibold text-center flex items-center justify-center gap-1"
                    >
                      <span>Close Details</span>
                    </button>
                  </div>
                </div>

              </div>
              
              {/* Decorative design tags */}
              <div className="mt-8 pt-4 border-t border-neutral-800 flex justify-between items-center text-[10px] font-mono text-neutral-600">
                <span>DESIGN LICENSE: CREATIVE COMMONS © 2026</span>
                <span className="flex items-center gap-1">
                  MINAHIL MURTAZA <ExternalLink size={10} />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
