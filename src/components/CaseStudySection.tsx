/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ShieldAlert, CheckCircle, Lightbulb, ChevronRight, Briefcase } from 'lucide-react';
import { CASE_STUDY } from '../data';

export default function CaseStudySection() {
  const [activeStep, setActiveStep] = React.useState<'problem' | 'solution' | 'result'>('problem');

  // Decorative vector badge for Smash & Sizzle joint
  const renderSmashSizzleMiniMockup = () => {
    return (
      <div className="bg-[#111] border border-orange-500/20 rounded-2xl p-6 flex flex-col justify-between h-[280px] w-full text-white relative overflow-hidden group shadow-xl">
        <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 blur-2xl rounded-full" />
        
        {/* Card Header */}
        <div className="flex justify-between items-center text-[9px] font-mono text-orange-500 uppercase tracking-widest border-b border-neutral-800 pb-3">
          <span>SIZZLE CASE STAGE</span>
          <span>{activeStep.toUpperCase()}</span>
        </div>

        {/* Vector burger stamp motif */}
        <div className="my-4 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border border-orange-500/20 bg-neutral-950 flex items-center justify-center relative shadow-inner">
            <svg className="w-10 h-10 text-orange-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707-.707m12.728 0l-.707.707M6.343 6.343l-.707-.707m2.343 6.343a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>

        {/* Card Footer detail */}
        <div className="space-y-1 pt-3 border-t border-neutral-800">
          <p className="text-[10px] font-mono text-neutral-400">Smash & Sizzle Restaurant</p>
          <div className="flex justify-between items-center">
            <span className="text-[11px] font-sans font-extrabold text-white">FIERY STAMP LOGO</span>
            <span className="text-[9px] font-mono bg-orange-500 text-neutral-900 px-1.5 py-0.5 rounded font-bold">ACTIVE</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 pb-3 border-b border-neutral-800">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-[#e11d48] bg-[#e11d48]/5 px-2.5 py-1 rounded-full flex items-center gap-1.5 w-fit">
            <Briefcase size={14} /> Brand Deep-Dive
          </span>
          <h3 className="text-3xl font-sans font-bold tracking-tight text-white mt-1.5">
            Case Study: {CASE_STUDY.project}
          </h3>
        </div>
        <p className="text-sm text-neutral-400 max-w-sm">
          A granular visual audit looking at the planning, execution, and professional outcome of the Smash & Sizzle brand identity.
        </p>
      </div>

      {/* Main Study Grid */}
      <div id="case-study-workspace" className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
        
        {/* Left Interactive Panel */}
        <div className="lg:col-span-8 space-y-6">
          {/* Toggles */}
          <div className="flex bg-neutral-950 p-1 rounded-2xl border border-neutral-800">
            <button
              onClick={() => setActiveStep('problem')}
              className={`flex-1 py-3 px-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
                activeStep === 'problem' 
                  ? 'bg-red-600 text-white font-bold' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <ShieldAlert size={14} />
              <span>1. The Problem</span>
            </button>
            <button
              onClick={() => setActiveStep('solution')}
              className={`flex-1 py-3 px-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
                activeStep === 'solution' 
                  ? 'bg-amber-500 text-neutral-950 font-bold' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Lightbulb size={14} />
              <span>2. The Solution</span>
            </button>
            <button
              onClick={() => setActiveStep('result')}
              className={`flex-1 py-3 px-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
                activeStep === 'result' 
                  ? 'bg-emerald-600 text-white font-bold' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <CheckCircle size={14} />
              <span>3. The Result</span>
            </button>
          </div>

          {/* Description Block */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 relative min-h-[220px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="space-y-4 text-left"
              >
                {activeStep === 'problem' && (
                  <>
                    <h4 className="text-lg font-bold font-sans text-red-400 flex items-center gap-2">
                      <ShieldAlert size={18} /> The Pre-existing Brand Struggle
                    </h4>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {CASE_STUDY.problem}
                    </p>
                  </>
                )}
                {activeStep === 'solution' && (
                  <>
                    <h4 className="text-lg font-bold font-sans text-amber-500 flex items-center gap-2">
                      <Lightbulb size={18} /> Creative Realignment Rationale
                    </h4>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {CASE_STUDY.solution}
                    </p>
                  </>
                )}
                {activeStep === 'result' && (
                  <>
                    <h4 className="text-lg font-bold font-sans text-emerald-400 flex items-center gap-2">
                      <CheckCircle size={18} /> Verified Client Growth Stats
                    </h4>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {CASE_STUDY.result}
                    </p>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="pt-6 border-t border-neutral-800 flex flex-wrap gap-2 mt-6">
              <span className="text-[10px] font-mono uppercase bg-neutral-950 text-amber-500 border border-neutral-800 px-3 py-1 rounded-md">
                Industry: {CASE_STUDY.industry}
              </span>
            </div>
          </div>
        </div>

        {/* Right Composite Preview Card */}
        <div id="case-study-visualizer" className="lg:col-span-4 flex flex-col justify-between space-y-6">
          {renderSmashSizzleMiniMockup()}

          {/* Brief specs summary list */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 space-y-3 text-left">
            <h5 className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold">Design Scope Tasks</h5>
            <ul className="space-y-1.5">
              {CASE_STUDY.scope.map((task, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-neutral-300 leading-none">
                  <ChevronRight size={12} className="text-amber-500 flex-shrink-0" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
