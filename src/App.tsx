/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Monitor, 
  ListOrdered, 
  Sparkles, 
  Download, 
  ExternalLink, 
  Github,
  Award
} from 'lucide-react';

import AboutSection from './components/AboutSection';
import BrandingSection from './components/BrandingSection';
import LogoSection from './components/LogoSection';
import SocialSection from './components/SocialSection';
import FlyerSection from './components/FlyerSection';
import PackagingSection from './components/PackagingSection';
import ThumbnailSection from './components/ThumbnailSection';
import PrintSection from './components/PrintSection';
import CaseStudySection from './components/CaseStudySection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

// Profile avatar path from generated image
const AVATAR_PATH = '/src/assets/images/profile_avatar_1781524995456.jpg';

const SLIDES_COUNT = 12;

interface SlideConfig {
  id: number;
  title: string;
  theme: 'dark' | 'light';
  category: string;
}

const SLIDES: SlideConfig[] = [
  { id: 1, title: 'Cover Showcase', theme: 'dark', category: 'WELCOME' },
  { id: 2, title: 'About My Craft', theme: 'light', category: 'ABOUT ME' },
  { id: 3, title: 'Branding Systems', theme: 'dark', category: 'BRANDING IDENTITY' },
  { id: 4, title: 'Logo Collections', theme: 'light', category: 'LOGO DESIGN' },
  { id: 5, title: 'Social Feeds', theme: 'dark', category: 'SOCIAL MEDIA DESIGN' },
  { id: 6, title: 'Flyers & Books', theme: 'light', category: 'FLYER & BROCHURE DESIGN' },
  { id: 7, title: 'Package Substrates', theme: 'dark', category: 'PACKAGING DESIGN' },
  { id: 8, title: 'YouTube Thumbnails', theme: 'light', category: 'THUMBNAIL DESIGN' },
  { id: 9, title: 'Production Prints', theme: 'dark', category: 'PRINT DESIGN' },
  { id: 10, title: 'Case Study: Smash & Sizzle', theme: 'dark', category: 'CASE STUDY' },
  { id: 11, title: 'Partner Trust Reviews', theme: 'dark', category: 'TESTIMONIALS' },
  { id: 12, title: 'Start a Project', theme: 'light', category: 'CONTACT ME' }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const [viewMode, setViewMode] = React.useState<'deck' | 'scroll'>('deck');

  const nextSlide = () => {
    if (currentSlide < SLIDES_COUNT) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const selectSlide = (id: number) => {
    setCurrentSlide(id);
    if (viewMode === 'scroll') {
      const el = document.getElementById(`scroll-slide-${id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Helper keyword for showing slide index labels
  const getPadIndex = (num: number) => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  const activeSlideConfig = SLIDES[currentSlide - 1];

  // Cover Page Render logic
  const renderCoverSlide = () => (
    <div className="relative w-full h-full flex flex-col lg:flex-row justify-between items-center text-white pb-6 lg:pb-0">
      
      {/* Absolute Decorative Paint Strokes / Brush stroke effect */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/15 blur-3xl rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-950/20 blur-3xl rounded-full" />

      {/* Slide number heading styled directly from the slides */}
      <div className="absolute top-6 left-0 flex items-center gap-2 font-mono text-neutral-400">
        <span className="text-red-500 font-bold text-lg">01</span>
        <span className="h-px w-6 bg-red-600" />
        <span className="uppercase text-xs tracking-widest">COVER / GRAPHIC DESIGNER</span>
      </div>

      {/* Left side content: Huge Title */}
      <div className="space-y-4 max-w-xl text-left z-10 pt-16 lg:pt-0">
        <h2 className="text-[11px] font-mono tracking-widest uppercase text-red-500 bg-red-600/10 px-3 py-1 rounded-full w-fit">
          Creative Portfolio
        </h2>
        
        {/* Stylized custom vector banner */}
        <div className="relative py-2">
          <h1 className="text-7xl lg:text-8xl font-black tracking-tight leading-none text-white select-none">
            port<span className="text-[#e11d48] font-sans italic lowercase">folio</span>
          </h1>
          <p className="text-sm font-mono tracking-widest text-neutral-400 uppercase mt-2 pl-1">
            CREATING VISUAL EXPERIENCES
          </p>
        </div>

        <div className="pt-8 space-y-2">
          <h3 className="text-3xl font-sans font-black tracking-tight">
            MINAHIL MURTAZA
          </h3>
          <p className="text-sm font-mono text-neutral-400">
            Freelance Designer Specializing in Brands, Packaging & Vector Layouts
          </p>
        </div>

        {/* Highlight badge bar */}
        <div className="flex gap-4 pt-6">
          <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Available for Remote contracts</span>
          </div>
        </div>
      </div>

      {/* Right side content: Designer vector mock portrait */}
      <div className="relative z-10 flex flex-col justify-end h-full">
        {/* Dynamic portrait card wrapper */}
        <div className="relative w-72 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-[#e11d48]/40 shadow-2xl bg-neutral-900 group">
          {/* Neon stroke overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent z-10" />
          
          <img
            src={AVATAR_PATH}
            alt="Minahil Murtaza Portrait Illustration"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
          />

          <div className="absolute bottom-6 left-6 z-20 text-left">
            <span className="text-[9px] font-mono uppercase bg-red-600 text-white px-2 py-0.5 rounded font-bold tracking-wider">
              LEAD CREATIVE
            </span>
            <p className="text-lg font-bold mt-1">Minahil Murtaza</p>
            <p className="text-xs text-neutral-400 font-mono">minahilgraphics4@gmail.com</p>
          </div>
        </div>
      </div>

    </div>
  );

  return (
    <div id="main-portfolio-page" className="min-h-screen bg-neutral-950 font-sans flex flex-col justify-between text-neutral-200">
      
      {/* Top persistent header navigations */}
      <header className="border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center font-bold text-lg text-white">
              M
            </div>
            <div>
              <span className="block text-sm font-sans font-bold leading-none text-white uppercase tracking-tight">
                M. Murtaza
              </span>
              <span className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase">
                GRAPHIC DESIGNER
              </span>
            </div>
          </div>

          {/* Center layout triggers */}
          <div className="flex bg-neutral-900 p-1 rounded-xl border border-neutral-800">
            <button
              onClick={() => setViewMode('deck')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                viewMode === 'deck' 
                  ? 'bg-[#e11d48] text-white' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Monitor size={14} />
              <span>Pitch Deck</span>
            </button>
            <button
              onClick={() => setViewMode('scroll')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                viewMode === 'scroll' 
                  ? 'bg-[#e11d48] text-white' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <ListOrdered size={14} />
              <span>Full Scroll</span>
            </button>
          </div>

          {/* Quick social links */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="mailto:minahilgraphics4@gmail.com"
              className="text-xs font-mono text-neutral-400 hover:text-white transition-colors"
            >
              minahilgraphics4@gmail.com
            </a>
            <span className="h-3 w-px bg-neutral-800" />
            <a
              href="#contact-form-col"
              onClick={() => selectSlide(12)}
              className="px-4 py-1.5 bg-[#e11d48] hover:bg-rose-500 text-white rounded-lg text-xs font-semibold shadow transition-all duration-200"
            >
              Hire Me
            </a>
          </div>

        </div>
      </header>

      {/* Main viewport canvas */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-6 py-8 relative">
        <AnimatePresence mode="wait">
          {viewMode === 'deck' ? (
            /* Interactive Deck Display Mode */
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className={`w-full min-h-[60vh] rounded-3xl p-6 md:p-12 border relative flex items-center shadow-2xl overflow-hidden ${
                activeSlideConfig.theme === 'dark' 
                  ? 'bg-neutral-950 border-neutral-800 text-white' 
                  : 'bg-white border-neutral-200 text-neutral-900 shadow-neutral-950/5'
              }`}
            >
              {/* Symmetrical decoration grid background lines inside light slides */}
              {activeSlideConfig.theme === 'light' && (
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              )}

              {/* Dynamic Slide Header Identifier */}
              {currentSlide > 1 && (
                <div className="absolute top-6 left-6 md:left-12 flex items-center gap-2.5 font-mono">
                  <span className="text-[#e11d48] font-black text-sm md:text-md">
                    {getPadIndex(currentSlide)}
                  </span>
                  <span className="h-px w-6 bg-[#e11d48]" />
                  <span className={`uppercase text-[10px] tracking-widest leading-none ${activeSlideConfig.theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {activeSlideConfig.category}
                  </span>
                </div>
              )}

              {/* Dynamic content mapping */}
              <div className="w-full h-full pt-12 md:pt-8">
                {currentSlide === 1 && renderCoverSlide()}
                {currentSlide === 2 && <AboutSection />}
                {currentSlide === 3 && <BrandingSection />}
                {currentSlide === 4 && <LogoSection />}
                {currentSlide === 5 && <SocialSection />}
                {currentSlide === 6 && <FlyerSection />}
                {currentSlide === 7 && <PackagingSection />}
                {currentSlide === 8 && <ThumbnailSection />}
                {currentSlide === 9 && <PrintSection />}
                {currentSlide === 10 && <CaseStudySection />}
                {currentSlide === 11 && <TestimonialsSection />}
                {currentSlide === 12 && <ContactSection avatarPath={AVATAR_PATH} />}
              </div>
            </motion.div>
          ) : (
            /* Vertical Scroll Showcase Mode */
            <div id="full-catalogue-stack" className="space-y-12">
              {SLIDES.map((slide) => (
                <div
                  key={slide.id}
                  id={`scroll-slide-${slide.id}`}
                  className={`w-full rounded-2xl p-6 md:p-12 border relative flex items-center shadow-xl overflow-hidden scroll-mt-24 transition-colors ${
                    slide.theme === 'dark' 
                      ? 'bg-neutral-950 border-neutral-800 text-white' 
                      : 'bg-white border-neutral-200 text-neutral-900'
                  }`}
                >
                  {/* Decorative mesh vector background within light slides */}
                  {slide.theme === 'light' && (
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                  )}

                  {/* Section Label */}
                  <div className="absolute top-6 left-6 md:left-12 flex items-center gap-2 font-mono">
                    <span className="text-[#e11d48] font-bold text-xs">{getPadIndex(slide.id)}</span>
                    <span className="h-px w-6 bg-[#e11d48]" />
                    <span className={`uppercase text-[9px] tracking-widest ${slide.theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {slide.category}
                    </span>
                  </div>

                  {/* Content Mapping */}
                  <div className="w-full pt-12 md:pt-8 text-left">
                    {slide.id === 1 && renderCoverSlide()}
                    {slide.id === 2 && <AboutSection />}
                    {slide.id === 3 && <BrandingSection />}
                    {slide.id === 4 && <LogoSection />}
                    {slide.id === 5 && <SocialSection />}
                    {slide.id === 6 && <FlyerSection />}
                    {slide.id === 7 && <PackagingSection />}
                    {slide.id === 8 && <ThumbnailSection />}
                    {slide.id === 9 && <PrintSection />}
                    {slide.id === 10 && <CaseStudySection />}
                    {slide.id === 11 && <TestimonialsSection />}
                    {slide.id === 12 && <ContactSection avatarPath={AVATAR_PATH} />}
                  </div>
                </div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Navigation Controller & Pagination (only in Deck Mode) */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-6 px-6 relative z-30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Direct Slide Index selector */}
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {SLIDES.map((slide) => (
              <button
                key={slide.id}
                id={`pagination-dot-${slide.id}`}
                onClick={() => selectSlide(slide.id)}
                className={`relative w-8 h-8 rounded-lg text-xs font-mono font-bold flex items-center justify-center transition-all ${
                  slide.id === currentSlide 
                    ? 'bg-[#e11d48] text-white' 
                    : viewMode === 'scroll' 
                      ? 'bg-neutral-900 hover:bg-neutral-800 text-neutral-400'
                      : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-500 hover:text-white'
                }`}
              >
                <span>{slide.id}</span>
              </button>
            ))}
          </div>

          {/* Current Category brief label */}
          {viewMode === 'deck' && (
            <div className="text-center md:text-left text-xs font-mono text-neutral-500 flex items-center gap-2">
              <span className="uppercase tracking-widest text-[#e11d48] font-bold">
                {activeSlideConfig.category}
              </span>
              <span>•</span>
              <span>Slide {currentSlide} of {SLIDES_COUNT}</span>
            </div>
          )}

          {/* Slide Deck Navigation keys */}
          {viewMode === 'deck' && (
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 1}
                className="w-10 h-10 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center border border-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide === SLIDES_COUNT}
                className="w-10 h-10 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center border border-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}

        </div>
      </footer>

      {/* Persistent Floating WhatsApp Icon on the bottom right */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Animated Speech Bubble Tooltip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="hidden md:flex bg-neutral-900 text-white border border-neutral-800 text-xs px-3.5 py-2 rounded-2xl shadow-xl items-center gap-2 font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Ping me for work!</span>
        </motion.div>

        <motion.a
          id="floating-whatsapp-trigger"
          href="https://wa.me/923256777592"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl transition-colors relative group"
        >
          {/* Pulsing ring feedback */}
          <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping group-hover:animate-none" />

          {/* Icon SVG */}
          <svg className="w-7 h-7 fill-current relative z-10" viewBox="0 0 24 24">
            <path d="M12.004 2C6.51 2 2.014 6.5 2.014 12c0 2.15.68 4.14 1.84 5.79L2 22l4.37-1.14c1.64.91 3.51 1.42 5.63 1.42 5.5 0 10-4.5 10-10S17.5 2 12.004 2zm6.26 13.91c-.27.76-1.37 1.39-1.9 1.44-.48.05-.98.24-3.13-.6-2.75-1.09-4.51-3.9-4.65-4.08-.14-.19-1.12-1.49-1.12-2.84 0-1.35.7-2.01.95-2.28.25-.27.53-.34.71-.34.18 0 .37 0 .53.01.18 0 .41-.07.64.48.24.58.82 2.01.9 2.16.08.15.13.33.03.53-.1.2-.15.32-.3.5-.15.17-.32.39-.46.52-.16.15-.33.32-.14.65.19.32.85 1.41 1.83 2.28.85.76 2.01 1.25 2.34 1.38.33.13.53.11.72-.11.19-.22.82-.95 1.04-1.28.22-.33.44-.28.74-.17.3.11 1.91.9 2.24 1.07.33.17.55.25.63.39.08.14.08.82-.19 1.58z" />
          </svg>
        </motion.a>
      </div>

    </div>
  );
}
