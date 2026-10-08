import React, { useState, useEffect } from 'react';
import { Photo, STUDIO_INFO } from '../data/portfolioData';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, ExternalLink, Camera, Info } from 'lucide-react';

interface LightboxModalProps {
  photo: Photo | null;
  photosList: Photo[];
  onClose: () => void;
  onNavigate: (photo: Photo) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  photosList,
  onClose,
  onNavigate,
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    // Reset zoom when photo changes
    setZoomLevel(1);
  }, [photo]);

  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, photosList]);

  if (!photo) return null;

  const currentIndex = photosList.findIndex((p) => p.id === photo.id);
  const hasNav = photosList.length > 1;

  const handlePrev = () => {
    if (!hasNav) return;
    const prevIdx = (currentIndex - 1 + photosList.length) % photosList.length;
    onNavigate(photosList[prevIdx]);
  };

  const handleNext = () => {
    if (!hasNav) return;
    const nextIdx = (currentIndex + 1) % photosList.length;
    onNavigate(photosList[nextIdx]);
  };

  const toggleZoom = () => {
    setZoomLevel((prev) => (prev === 1 ? 1.5 : prev === 1.5 ? 2 : 1));
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md select-none animate-fade-in"
      onClick={onClose}
    >
      {/* Top Bar Controls */}
      <div
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-black/80 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 text-white">
          <Camera className="w-4 h-4 text-neutral-400" />
          <h2 className="font-poppins text-sm font-medium tracking-wide">
            {photo.title}
          </h2>
          <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
            · {photo.category}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {photo.flickrUrl && (
            <a
              href={photo.flickrUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on Flickr"
              className="p-2 text-neutral-400 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 rounded-lg border border-neutral-800 transition-colors"
              title="View on Flickr"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          <button
            onClick={() => setShowInfo(!showInfo)}
            aria-label="Toggle photo specifications"
            className={`p-2 rounded-lg border transition-colors ${
              showInfo
                ? 'bg-white text-black border-white'
                : 'bg-neutral-900/80 text-neutral-400 hover:text-white border-neutral-800 hover:bg-neutral-800'
            }`}
            title="Toggle details"
          >
            <Info className="w-4 h-4" />
          </button>

          <button
            onClick={toggleZoom}
            aria-label="Zoom photo"
            className="p-2 text-neutral-400 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 rounded-lg border border-neutral-800 transition-colors hidden sm:block"
            title={`Zoom (${zoomLevel}x)`}
          >
            {zoomLevel > 1 ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            aria-label="Close photo viewer"
            className="p-2 text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 rounded-lg border border-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Viewport */}
      <div
        className="relative max-w-full max-h-full p-2 sm:p-12 flex items-center justify-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.url}
          alt={photo.title}
          style={{ transform: `scale(${zoomLevel})` }}
          className={`max-w-[92vw] max-h-[82vh] object-contain rounded shadow-2xl transition-transform duration-200 cursor-zoom-in ${
            zoomLevel > 1 ? 'cursor-grab' : ''
          }`}
          onClick={toggleZoom}
        />
      </div>

      {/* Previous Photo Button */}
      {hasNav && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          aria-label="Previous photo"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 text-white bg-neutral-900/70 hover:bg-neutral-800 border border-neutral-800 rounded-full transition-all hover:scale-105 z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next Photo Button */}
      {hasNav && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          aria-label="Next photo"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 text-white bg-neutral-900/70 hover:bg-neutral-800 border border-neutral-800 rounded-full transition-all hover:scale-105 z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Bottom Info Drawer */}
      {showInfo && (
        <div
          className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-96 p-4 bg-neutral-950/95 border border-neutral-800 rounded-xl shadow-2xl z-20 animate-fade-in font-poppins"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-2 border-b border-neutral-900">
            <span className="text-xs font-semibold uppercase tracking-wider text-white">
              Specifications
            </span>
            <button
              onClick={() => setShowInfo(false)}
              className="text-xs text-neutral-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="mt-3 space-y-2 text-xs text-neutral-300">
            <div className="flex justify-between">
              <span className="text-neutral-500">Title:</span>
              <span className="font-medium text-white">{photo.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Discipline:</span>
              <span>{photo.category}</span>
            </div>
            {photo.cameraInfo && (
              <div className="flex justify-between">
                <span className="text-neutral-500">Optics:</span>
                <span className="font-mono text-neutral-200">{photo.cameraInfo}</span>
              </div>
            )}
            {photo.width && photo.height && (
              <div className="flex justify-between">
                <span className="text-neutral-500">Dimensions:</span>
                <span className="font-mono">{photo.width} × {photo.height} px</span>
              </div>
            )}
            {photo.dateTaken && (
              <div className="flex justify-between">
                <span className="text-neutral-500">Date Taken:</span>
                <span className="font-mono">{photo.dateTaken}</span>
              </div>
            )}
            {photo.description && (
              <p className="pt-2 text-neutral-400 border-t border-neutral-900 font-light">
                {photo.description}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Counter bar at bottom */}
      {hasNav && (
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-full text-xs font-mono text-neutral-400 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {currentIndex + 1} / {photosList.length}
        </div>
      )}
    </div>
  );
};
