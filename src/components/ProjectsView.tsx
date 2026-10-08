import React, { useState } from 'react';
import { PROJECTS, Photo, Project } from '../data/portfolioData';
import { ChevronLeft, ChevronRight, Maximize2, Tag, Play, Pause } from 'lucide-react';

interface ProjectsViewProps {
  onSelectPhoto: (photo: Photo) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onSelectPhoto }) => {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center mb-16 sm:mb-24">
        <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-poppins">
          Curated Portfolios
        </span>
        <h1 className="font-aktura text-6xl sm:text-8xl md:text-9xl text-white mt-2">
          Our Projects
        </h1>
        <p className="mt-4 text-xs sm:text-sm text-neutral-400 font-poppins max-w-xl mx-auto">
          Multi-format photo essays exploring speed, coastal architecture, and authentic 35mm street life.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-28 sm:space-y-40">
        {PROJECTS.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx + 1}
            onSelectPhoto={onSelectPhoto}
          />
        ))}
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelectPhoto: (photo: Photo) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onSelectPhoto,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play interval
  React.useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % project.photos.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isPlaying, project.photos.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + project.photos.length) % project.photos.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % project.photos.length);
  };

  const activePhoto = project.photos[currentIndex] || project.photos[0];

  return (
    <article className="border-b border-neutral-900 pb-20 sm:pb-28 last:border-b-0">
      {/* Project Header */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-neutral-400 mb-2">
          <span>PROJECT {String(index).padStart(2, '0')}</span>
          <span aria-hidden="true">·</span>
          <span>{project.category}</span>
        </div>
        <h2 className="font-aktura text-5xl sm:text-7xl md:text-8xl text-neutral-100">
          {project.title}
        </h2>
        <p className="text-xs sm:text-sm text-neutral-400 font-poppins mt-2 tracking-wide">
          {project.subtitle}
        </p>
      </div>

      {/* Interactive Responsive Carousel Container */}
      <div className="relative max-w-5xl mx-auto rounded-2xl bg-neutral-950 border border-neutral-800/80 p-2 sm:p-4 shadow-2xl overflow-hidden">
        
        {/* Main Stage Image */}
        <div
          onClick={() => onSelectPhoto(activePhoto)}
          className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-900 cursor-pointer group"
        >
          <img
            src={activePhoto.url}
            alt={activePhoto.title}
            className="w-full h-full object-contain sm:object-cover transition-transform duration-500 group-hover:scale-102"
          />

          {/* Gradient Scrim & Info */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent flex items-end justify-between p-4 sm:p-6">
            <div>
              <span className="text-xs font-mono text-neutral-400">
                {activePhoto.title}
              </span>
              <p className="text-xs sm:text-sm text-neutral-200 font-poppins mt-0.5 line-clamp-1 max-w-md">
                {activePhoto.description || project.title}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-neutral-400 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm">
                {currentIndex + 1} / {project.photos.length}
              </span>
              <span className="p-2 bg-neutral-900/80 backdrop-blur-sm rounded-lg text-neutral-300 group-hover:text-white transition-colors">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>

        {/* Controls row */}
        <div className="mt-3 sm:mt-4 flex items-center justify-between px-2">
          {/* Slides Thumbnails Strip (Scrollable) */}
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none max-w-[calc(100%-140px)]">
            {project.photos.map((p, pIdx) => (
              <button
                key={p.id || pIdx}
                onClick={() => setCurrentIndex(pIdx)}
                className={`shrink-0 w-12 sm:w-16 h-8 sm:h-10 rounded overflow-hidden border transition-all ${
                  currentIndex === pIdx
                    ? 'border-white scale-105 shadow-md'
                    : 'border-neutral-800 opacity-50 hover:opacity-100'
                }`}
              >
                <img src={p.thumbnailUrl || p.url} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Nav Buttons */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
              className="p-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded-lg border border-neutral-800 transition-colors"
              title={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={prevSlide}
              aria-label="Previous image"
              className="p-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded-lg border border-neutral-800 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next image"
              className="p-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded-lg border border-neutral-800 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Narrative Description (Fully Responsive vs Original 25rem padding) */}
      <div className="max-w-3xl mx-auto mt-10 sm:mt-14 px-4 text-center">
        <p className="text-sm sm:text-base text-neutral-300 font-poppins leading-relaxed font-light">
          {project.description}
        </p>

        {/* Clean Tags without pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6 text-xs text-neutral-500 font-poppins">
          {project.tags.map((tag, tIdx) => (
            <React.Fragment key={tag}>
              {tIdx > 0 && <span aria-hidden="true">·</span>}
              <span className="text-neutral-400 font-mono">#{tag}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </article>
  );
};
