import React from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { Mail, Phone, ExternalLink, ArrowUp, Camera } from 'lucide-react';

interface FooterProps {
  onTabChange: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onTabChange }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#080808] border-t border-neutral-900 py-12 sm:py-16 text-center text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Brand Kicker */}
        <div>
          <button
            onClick={() => { onTabChange('home'); scrollToTop(); }}
            className="font-aktura text-4xl sm:text-5xl text-neutral-200 hover:text-white transition-colors"
          >
            35mm
          </button>
          <p className="text-xs text-neutral-500 font-poppins mt-1 tracking-wider uppercase">
            Analog Craft · High Resolution Full-Frame Editorial
          </p>
        </div>

        {/* Contact Links from repo */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-poppins text-neutral-300">
          <a
            href={`mailto:${STUDIO_INFO.email}`}
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4 text-neutral-500" />
            <span>{STUDIO_INFO.email}</span>
          </a>

          <a
            href={`tel:${STUDIO_INFO.phone}`}
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-neutral-500" />
            <span className="font-mono">{STUDIO_INFO.phone}</span>
          </a>

          <a
            href={STUDIO_INFO.flickrUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
          >
            <Camera className="w-4 h-4 text-neutral-500" />
            <span>Flickr Photostream</span>
            <ExternalLink className="w-3 h-3 text-neutral-600" />
          </a>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-widest text-neutral-500 font-poppins">
          <button onClick={() => { onTabChange('home'); scrollToTop(); }} className="hover:text-white transition-colors">
            Home
          </button>
          <button onClick={() => { onTabChange('projects'); scrollToTop(); }} className="hover:text-white transition-colors">
            Projects
          </button>
          <button onClick={() => { onTabChange('flickr'); scrollToTop(); }} className="hover:text-white transition-colors">
            Flickr Archive
          </button>
          <button onClick={() => { onTabChange('about'); scrollToTop(); }} className="hover:text-white transition-colors">
            About
          </button>
          <button onClick={() => { onTabChange('contact'); scrollToTop(); }} className="hover:text-white transition-colors">
            Contact
          </button>
        </div>

        {/* Copyright and Back to Top */}
        <div className="pt-6 border-t border-neutral-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-poppins">
          <p>
            © 2024–2026 {STUDIO_INFO.name}. Photography by {STUDIO_INFO.founder}.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
