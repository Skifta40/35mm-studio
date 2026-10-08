import React, { useState } from 'react';
import { FAQ_ITEMS, STUDIO_INFO } from '../data/portfolioData';
import { ChevronDown, Camera, Award, ShieldCheck, Film, Compass } from 'lucide-react';

export const AboutView: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center mb-16 sm:mb-24">
        <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-poppins">
          The Story & Vision
        </span>
        <h1 className="font-aktura text-6xl sm:text-8xl md:text-9xl text-white mt-2">
          About us
        </h1>
        <p className="mt-4 text-xs sm:text-sm text-neutral-400 font-poppins max-w-xl mx-auto">
          Founded in {STUDIO_INFO.foundedYear} by {STUDIO_INFO.founder}. Dedicated to the enduring art of 35mm optical storytelling.
        </p>
      </div>

      {/* Main Narrative Blocks */}
      <div className="space-y-16 sm:space-y-24 mb-24">
        
        {/* Who Are We */}
        <section className="bg-neutral-950/60 border border-neutral-900 rounded-2xl p-6 sm:p-12 text-center">
          <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-300">
            <Camera className="w-5 h-5" />
          </div>
          <h2 className="font-aktura text-4xl sm:text-6xl text-white mb-6">
            Who are we?
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-poppins leading-relaxed max-w-3xl mx-auto font-light">
            35mm Production, founded in 2022, began as a small, passionate team of photographers who
            shared a love for capturing the world through their lenses. Our founder, driven by an unwavering passion for
            photography, envisioned a company that could capture the beauty and essence of the world around us. Over the
            years, we have grown and evolved, expanding our services to include various genres such as landscape,
            automotive, architectural, and street photography. Our dedication to quality and creativity has earned us a
            reputation for delivering stunning images that resonate with our clients. Today, we continue to explore new
            techniques and push the boundaries of our craft, always striving to capture the beauty and essence of the
            world around us.
          </p>
        </section>

        {/* Why Us */}
        <section className="bg-neutral-950/60 border border-neutral-900 rounded-2xl p-6 sm:p-12 text-center">
          <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-300">
            <Award className="w-5 h-5" />
          </div>
          <h2 className="font-aktura text-4xl sm:text-6xl text-white mb-6">
            Why us?
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-poppins leading-relaxed max-w-3xl mx-auto font-light">
            35mm Production is a passionate team of photographers who share a love for capturing the
            world through their lenses. We specialize in various genres such as landscape, automotive, architectural,
            and street photography. Our dedication to quality and creativity has earned us a reputation for delivering
            stunning images that resonate with our clients. We continue to explore new techniques and push the
            boundaries of our craft, always striving to capture the beauty and essence of the world around us.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-left pt-8 border-t border-neutral-900">
            <div className="p-4 bg-neutral-900/40 rounded-xl border border-neutral-800/60">
              <Film className="w-5 h-5 text-neutral-400 mb-2" />
              <h4 className="text-sm font-semibold text-white font-poppins">35mm Perspective</h4>
              <p className="text-xs text-neutral-400 font-poppins mt-1">
                Natural optical compression that mirrors authentic human sight without digital distortion.
              </p>
            </div>
            <div className="p-4 bg-neutral-900/40 rounded-xl border border-neutral-800/60">
              <Compass className="w-5 h-5 text-neutral-400 mb-2" />
              <h4 className="text-sm font-semibold text-white font-poppins">Location Agnostic</h4>
              <p className="text-xs text-neutral-400 font-poppins mt-1">
                Commissions undertaken throughout the Adriatic Coast, Montenegro, Croatia, and the Balkans.
              </p>
            </div>
            <div className="p-4 bg-neutral-900/40 rounded-xl border border-neutral-800/60">
              <ShieldCheck className="w-5 h-5 text-neutral-400 mb-2" />
              <h4 className="text-sm font-semibold text-white font-poppins">Archival Quality</h4>
              <p className="text-xs text-neutral-400 font-poppins mt-1">
                Delivered in both uncompressed master digital RAW files and exhibition fine art prints.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ Section */}
      <section className="mt-20">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-poppins">
            Need Clarification?
          </span>
          <h2 className="font-aktura text-4xl sm:text-6xl text-white mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-neutral-900 border-y border-neutral-900">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div key={faq.id} className="py-5">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex items-center justify-between w-full text-left font-poppins text-base sm:text-lg font-medium text-neutral-200 hover:text-white transition-colors focus:outline-none"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="pt-3 pr-8 pb-2 text-sm text-neutral-400 font-poppins leading-relaxed font-light animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
