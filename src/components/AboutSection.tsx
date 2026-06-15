/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, PenTool, Layers, Video, ShoppingBag, Sparkles, Check } from 'lucide-react';
import { SKILLS, TOOLS } from '../data';

const SKILL_ICONS = [
  <PenTool size={18} />,
  <Award size={18} />,
  <Layers size={18} />,
  <Award size={18} />,
  <ShoppingBag size={18} />,
  <Video size={18} />
];

export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left side: Bio & Approach */}
      <div id="about-intro-col" className="lg:col-span-7 space-y-6">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-[#e11d48] bg-[#e11d48]/10 px-2.5 py-1 rounded-full">
            Introduction
          </span>
          <h3 className="text-4xl font-sans lg:text-5xl font-bold tracking-tight text-neutral-950">
            I DESIGN <br />
            <span className="text-[#e11d48] relative">
              BRANDS & VISUAL
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#e11d48]/20 -skew-y-1"></span>
            </span> <br />
            EXPERIENCES
          </h3>
        </div>

        <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-xl">
          I'm a passionate Graphic Designer who loves turning complex ideas into meaningful, 
          clean, and highly impactful visual solutions. Every design I construct is customized 
          to communicate values, elevate engagement, and create long-lasting brand impressions.
        </p>

        {/* Artistic details / Highlights */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="p-4 rounded-xl bg-neutral-100 border border-neutral-200">
            <span className="block text-3xl font-sans font-bold text-[#e11d48]">100%</span>
            <span className="text-xs font-mono text-neutral-500">Client Satisfaction</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-100 border border-neutral-200">
            <span className="block text-3xl font-sans font-bold text-neutral-950">12+</span>
            <span className="text-xs font-mono text-neutral-500">Industry Chapters</span>
          </div>
        </div>
      </div>

      {/* Right side: Skills Card & Tools board */}
      <div id="about-skills-col" className="lg:col-span-5 space-y-6">
        {/* Skills Board styled as a sticky yellow/cream notebook card */}
        <motion.div
          id="skills-notebook"
          whileHover={{ y: -4 }}
          className="relative bg-amber-50/70 rounded-2xl p-6 border border-amber-200 shadow-md transform rotate-1 overflow-hidden"
        >
          {/* Paper piece sticky tape representation */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-28 h-6 bg-neutral-200/90 shadow-sm border-x border-neutral-300 transform -rotate-1 z-10 flex items-center justify-center text-[8px] font-mono tracking-widest text-neutral-500">
            MASKING TAPE
          </div>

          <div className="relative pt-2">
            <h4 className="text-md font-sans font-bold tracking-tight text-neutral-800 mb-4 uppercase border-b border-dashed border-amber-200 pb-2">
              My core skills
            </h4>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
              {SKILLS.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-sm text-neutral-700 font-medium"
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-neutral-100 text-[#e11d48] border border-neutral-200">
                    {SKILL_ICONS[index % SKILL_ICONS.length]}
                  </span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Tools Section */}
        <div id="tools-panel" className="space-y-3">
          <h5 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            Tools & software suite
          </h5>

          <div className="flex flex-wrap gap-2.5">
            {TOOLS.map((tool, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 shadow-sm text-white"
              >
                <span
                  className="w-5 h-5 rounded-lg flex items-center justify-center font-bold text-xs"
                  style={{ backgroundColor: `${tool.color}20`, color: tool.color, border: `1px solid ${tool.color}` }}
                >
                  {tool.name}
                </span>
                <span className="text-xs font-medium text-neutral-300">{tool.icon}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
