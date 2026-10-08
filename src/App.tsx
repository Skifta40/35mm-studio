/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroScatter } from './components/HeroScatter';
import { GenreGallery } from './components/GenreGallery';
import { FlickrStreamSection } from './components/FlickrStreamSection';
import { ProjectsView } from './components/ProjectsView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { FLICKR_PHOTOS, HERO_SCATTER_PHOTOS, Photo } from './data/portfolioData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [activePhotoList, setActivePhotoList] = useState<Photo[]>(FLICKR_PHOTOS);

  const handleOpenPhoto = (photo: Photo, customList?: Photo[]) => {
    setSelectedPhoto(photo);
    if (customList && customList.length > 0) {
      setActivePhotoList(customList);
    } else {
      // Default to Flickr photos or HERO_SCATTER depending on availability
      const inFlickr = FLICKR_PHOTOS.some((p) => p.id === photo.id);
      setActivePhotoList(inFlickr ? FLICKR_PHOTOS : HERO_SCATTER_PHOTOS);
    }
  };

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white flex flex-col font-poppins selection:bg-neutral-800 selection:text-white">
      {/* Sticky Responsive Header */}
      <Navbar currentTab={currentTab} onTabChange={handleTabChange} />

      {/* Main View Area */}
      <main className="flex-1 w-full">
        {currentTab === 'home' && (
          <div className="animate-fade-in space-y-8">
            {/* 35mm Signature Scattered Hero */}
            <HeroScatter
              onPhotoClick={(photo) => handleOpenPhoto(photo, HERO_SCATTER_PHOTOS)}
              onExploreProjects={() => handleTabChange('projects')}
            />

            {/* Editorial Genres from repo (Land-scape, Automotive, Architectural, Street) */}
            <GenreGallery
              onSelectPhoto={(photo) => handleOpenPhoto(photo)}
              onExploreGenre={(genre) => {
                setCurrentTab('flickr');
              }}
            />

            {/* Flickr Photostream Showcase (all 25 pictures directly from flic.kr/ps/46iTo7) */}
            <FlickrStreamSection
              onSelectPhoto={(photo) => handleOpenPhoto(photo, FLICKR_PHOTOS)}
            />
          </div>
        )}

        {currentTab === 'projects' && (
          <div className="animate-fade-in">
            <ProjectsView
              onSelectPhoto={(photo) => handleOpenPhoto(photo)}
            />
          </div>
        )}

        {currentTab === 'flickr' && (
          <div className="animate-fade-in">
            <FlickrStreamSection
              onSelectPhoto={(photo) => handleOpenPhoto(photo, FLICKR_PHOTOS)}
            />
          </div>
        )}

        {currentTab === 'about' && (
          <div className="animate-fade-in">
            <AboutView />
          </div>
        )}

        {currentTab === 'contact' && (
          <div className="animate-fade-in">
            <ContactView />
          </div>
        )}
      </main>

      {/* Responsive Footer */}
      <Footer onTabChange={handleTabChange} />

      {/* Fullscreen Lightbox Modal */}
      {selectedPhoto && (
        <LightboxModal
          photo={selectedPhoto}
          photosList={activePhotoList}
          onClose={() => setSelectedPhoto(null)}
          onNavigate={(photo) => setSelectedPhoto(photo)}
        />
      )}
    </div>
  );
}
