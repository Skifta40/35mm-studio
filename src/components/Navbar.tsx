import React, { useState } from 'react';
import { Menu, X, ExternalLink, Camera } from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolioData';

interface NavbarProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onTabChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'flickr', label: 'Flickr Archive' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onTabChange(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0c0c0c]/90 backdrop-blur-md border-b border-neutral-900/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Single Brand element wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 text-left group focus:outline-none"
          >
            <span className="font-aktura text-4xl sm:text-5xl tracking-wide text-neutral-100 group-hover:text-neutral-300 transition-colors">
              35mm
            </span>
          </button>

          {/* Zone 2: Clean text navigation links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wider uppercase">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 font-poppins transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-white font-medium'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-200" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action / Flickr Link */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={STUDIO_INFO.flickrUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Skifter Bytyqi Flickr Photostream"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-poppins uppercase tracking-wider text-neutral-300 bg-neutral-900 hover:bg-neutral-800 hover:text-white border border-neutral-800 rounded-md transition-colors"
            >
              <Camera className="w-3.5 h-3.5 text-neutral-400" />
              <span>Flickr Stream</span>
              <ExternalLink className="w-3 h-3 text-neutral-500" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={STUDIO_INFO.flickrUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Flickr link"
              className="p-2 text-neutral-400 hover:text-white"
            >
              <Camera className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2.5 text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-900 bg-[#0c0c0c] px-4 pt-3 pb-6 animate-fade-in">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-left text-base font-poppins tracking-wider uppercase transition-colors ${
                    isActive
                      ? 'bg-neutral-900 text-white font-medium border-l-2 border-white'
                      : 'text-neutral-400 hover:bg-neutral-900/60 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                </button>
              );
            })}

            <div className="pt-3 border-t border-neutral-900 mt-2 flex flex-col gap-2">
              <a
                href={STUDIO_INFO.flickrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 text-xs tracking-wider uppercase text-neutral-300 bg-neutral-900/80 border border-neutral-800 rounded-lg"
              >
                <span className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-neutral-400" />
                  Photographer Flickr Stream
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
              </a>
              <div className="px-4 py-2 text-xs text-neutral-500 font-poppins">
                35mm Production · Skifter Bytyqi
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
