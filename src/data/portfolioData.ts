export interface Photo {
  id: string;
  title: string;
  category: 'Street' | 'Automotive' | 'Architectural' | 'Landscape';
  url: string;
  thumbnailUrl: string;
  aspectRatio?: number;
  width?: number;
  height?: number;
  dateTaken?: string;
  flickrUrl?: string;
  description?: string;
  cameraInfo?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  coverImage: string;
  description: string;
  photos: Photo[];
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// 25 Live Flickr photos from https://flic.kr/ps/46iTo7
export const FLICKR_PHOTOS: Photo[] = [
  {
    id: "55577755365",
    title: "DSC07640",
    category: "Automotive",
    url: "https://live.staticflickr.com/65535/55577755365_958dda1531_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/55577755365_52615620aa_z.jpg",
    width: 6000,
    height: 4000,
    aspectRatio: 1.5,
    dateTaken: "2026-10-05",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/55577755365/",
    description: "High-contrast dynamic automotive study with sleek body contour reflection.",
    cameraInfo: "Sony Alpha 35mm · f/2.0 · ISO 100"
  },
  {
    id: "55576307542",
    title: "DSC07634",
    category: "Automotive",
    url: "https://live.staticflickr.com/65535/55576307542_88c93f1cac_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/55576307542_7d26ba88e4_z.jpg",
    width: 3376,
    height: 6000,
    aspectRatio: 0.56,
    dateTaken: "2026-10-05",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/55576307542/",
    description: "Vertical portrait of engineering craftsmanship and metallic textures.",
    cameraInfo: "Sony Alpha 35mm · f/2.8 · ISO 200"
  },
  {
    id: "55576307467",
    title: "DSC07551",
    category: "Automotive",
    url: "https://live.staticflickr.com/65535/55576307467_e965652913_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/55576307467_b3c272484b_z.jpg",
    width: 3376,
    height: 6000,
    aspectRatio: 0.56,
    dateTaken: "2026-10-05",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/55576307467/",
    description: "Curated vertical angle emphasizing rim detailing and ambient studio glow.",
    cameraInfo: "Sony Alpha 35mm · f/1.8 · ISO 125"
  },
  {
    id: "55577502714",
    title: "DSC07546",
    category: "Automotive",
    url: "https://live.staticflickr.com/65535/55577502714_101124346b_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/55577502714_2f150947e6_z.jpg",
    width: 1565,
    height: 2781,
    aspectRatio: 0.56,
    dateTaken: "2026-10-05",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/55577502714/",
    description: "Aerodynamic lines captured with dramatic rim lighting and low angle framing.",
    cameraInfo: "Sony Alpha 35mm · f/2.2 · ISO 160"
  },
  {
    id: "55577755315",
    title: "DSC07534",
    category: "Automotive",
    url: "https://live.staticflickr.com/65535/55577755315_ea4f2b2128_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/55577755315_4730168eca_z.jpg",
    width: 3701,
    height: 5311,
    aspectRatio: 0.7,
    dateTaken: "2026-10-05",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/55577755315/",
    description: "Precise mechanical detailing shot in monochrome depth.",
    cameraInfo: "Sony Alpha 35mm · f/2.8 · ISO 100"
  },
  {
    id: "55577448468",
    title: "DSC07440",
    category: "Street",
    url: "https://live.staticflickr.com/65535/55577448468_a47d378189_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/55577448468_a880c77bc3_z.jpg",
    width: 3370,
    height: 4000,
    aspectRatio: 0.84,
    dateTaken: "2026-10-05",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/55577448468/",
    description: "Subtle street narrative capturing everyday human nuance in urban setting.",
    cameraInfo: "Sony Alpha 35mm · f/2.5 · ISO 400"
  },
  {
    id: "55577338096",
    title: "DSC07432",
    category: "Street",
    url: "https://live.staticflickr.com/65535/55577338096_d62fc46e02_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/55577338096_e23abdd0bb_z.jpg",
    width: 3376,
    height: 6000,
    aspectRatio: 0.56,
    dateTaken: "2026-10-05",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/55577338096/",
    description: "Atmospheric street documentation with authentic natural shadows.",
    cameraInfo: "Sony Alpha 35mm · f/2.8 · ISO 320"
  },
  {
    id: "54996496524",
    title: "Another day",
    category: "Street",
    url: "https://live.staticflickr.com/65535/54996496524_f343f40693_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/54996496524_61bd40b814_z.jpg",
    width: 3376,
    height: 6000,
    aspectRatio: 0.56,
    dateTaken: "2025-11-20",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/54996496524/",
    description: "'Another day' — Poignant candid documentary observing the quiet rhythms of the city.",
    cameraInfo: "Sony Alpha 35mm · f/2.0 · ISO 250"
  },
  {
    id: "54996416583",
    title: "Equality",
    category: "Street",
    url: "https://live.staticflickr.com/65535/54996416583_f29fa43e79_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/54996416583_34c3ebb4d2_z.jpg",
    width: 2155,
    height: 3830,
    aspectRatio: 0.56,
    dateTaken: "2025-11-20",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/54996416583/",
    description: "'Equality' — Expressive human emotion and timeless gaze frozen on 35mm lens.",
    cameraInfo: "Sony Alpha 35mm · f/1.8 · ISO 200"
  },
  {
    id: "54996329198",
    title: "The old man",
    category: "Street",
    url: "https://live.staticflickr.com/65535/54996329198_3f7512d09a_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/54996329198_39755e1b88_z.jpg",
    width: 3376,
    height: 6000,
    aspectRatio: 0.56,
    dateTaken: "2025-11-20",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/54996329198/",
    description: "'The old man' — Deeply moving character portrait with generational wisdom and soul.",
    cameraInfo: "Sony Alpha 35mm · f/2.2 · ISO 400"
  },
  {
    id: "54908766869",
    title: "DSC05197",
    category: "Architectural",
    url: "https://live.staticflickr.com/65535/54908766869_e106287b72_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/54908766869_5b3cf0b520_z.jpg",
    width: 3376,
    height: 6000,
    aspectRatio: 0.56,
    dateTaken: "2025-10-14",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/54908766869/",
    description: "Architectural verticality revealing geometric facades and interplay of sun and stone.",
    cameraInfo: "Sony Alpha 35mm · f/4.0 · ISO 100"
  },
  {
    id: "54908767114",
    title: "DSC05130",
    category: "Architectural",
    url: "https://live.staticflickr.com/65535/54908767114_99ddb78280_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/54908767114_457040f961_z.jpg",
    width: 3522,
    height: 5283,
    aspectRatio: 0.67,
    dateTaken: "2025-10-14",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/54908767114/",
    description: "Historical masonry and structural harmony in coastal Old Town alleys.",
    cameraInfo: "Sony Alpha 35mm · f/3.5 · ISO 100"
  },
  {
    id: "54908739948",
    title: "DSC05123",
    category: "Landscape",
    url: "https://live.staticflickr.com/65535/54908739948_09a54716b7_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/54908739948_f5ef955cfe_z.jpg",
    width: 5655,
    height: 3770,
    aspectRatio: 1.5,
    dateTaken: "2025-10-14",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/54908739948/",
    description: "Expansive panoramic perspective over the rocky shoreline and deep blue sea.",
    cameraInfo: "Sony Alpha 35mm · f/5.6 · ISO 100"
  },
  {
    id: "54908516246",
    title: "DSC05122",
    category: "Architectural",
    url: "https://live.staticflickr.com/65535/54908516246_bb90bc602f_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/54908516246_5514f688d3_z.jpg",
    width: 4000,
    height: 6000,
    aspectRatio: 0.67,
    dateTaken: "2025-10-14",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/54908516246/",
    description: "Texture study of weathered stone arches under Mediterranean sky.",
    cameraInfo: "Sony Alpha 35mm · f/4.0 · ISO 125"
  },
  {
    id: "54907650432",
    title: "DSC05119",
    category: "Architectural",
    url: "https://live.staticflickr.com/65535/54907650432_23879347dc_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/54907650432_0e11d57c80_z.jpg",
    width: 1175,
    height: 1762,
    aspectRatio: 0.67,
    dateTaken: "2025-10-14",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/54907650432/",
    description: "Narrow passageway bathed in filtered golden afternoon light.",
    cameraInfo: "Sony Alpha 35mm · f/2.8 · ISO 200"
  },
  {
    id: "54556843484",
    title: "DSC05024",
    category: "Landscape",
    url: "https://live.staticflickr.com/65535/54556843484_2cb1880ba0_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/54556843484_6abb50649a_z.jpg",
    width: 3883,
    height: 5825,
    aspectRatio: 0.67,
    dateTaken: "2025-05-30",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/54556843484/",
    description: "Crisp natural elevation and dramatic coastal horizons.",
    cameraInfo: "Sony Alpha 35mm · f/5.6 · ISO 100"
  },
  {
    id: "54556998915",
    title: "DSC04959",
    category: "Landscape",
    url: "https://live.staticflickr.com/65535/54556998915_ca6ca6d1b8_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/54556998915_371bdc44d1_z.jpg",
    width: 4000,
    height: 6000,
    aspectRatio: 0.67,
    dateTaken: "2025-05-30",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/54556998915/",
    description: "Sunbeam reflection on tranquil tidal waters at dusk.",
    cameraInfo: "Sony Alpha 35mm · f/3.2 · ISO 160"
  },
  {
    id: "54555778542",
    title: "DSC04954",
    category: "Landscape",
    url: "https://live.staticflickr.com/65535/54555778542_bb689e138a_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/54555778542_9c8f4453e3_z.jpg",
    width: 4000,
    height: 6000,
    aspectRatio: 0.67,
    dateTaken: "2025-05-30",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/54555778542/",
    description: "Subdued tones and ethereal sea mist settling over distant hills.",
    cameraInfo: "Sony Alpha 35mm · f/4.0 · ISO 200"
  },
  {
    id: "54556899873",
    title: "DSC04938",
    category: "Landscape",
    url: "https://live.staticflickr.com/65535/54556899873_cdeb91a441_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/54556899873_7c3905970b_z.jpg",
    width: 4000,
    height: 6000,
    aspectRatio: 0.67,
    dateTaken: "2025-05-30",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/54556899873/",
    description: "Dynamic interplay of waves crashing against rugged natural cliffs.",
    cameraInfo: "Sony Alpha 35mm · f/2.8 · ISO 100"
  },
  {
    id: "54557003175",
    title: "DSC04926",
    category: "Landscape",
    url: "https://live.staticflickr.com/65535/54557003175_efd58a98cd_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/54557003175_b0a31ff261_z.jpg",
    width: 3903,
    height: 5855,
    aspectRatio: 0.67,
    dateTaken: "2025-05-30",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/54557003175/",
    description: "The serene stillness of twilight over Adriatic waters.",
    cameraInfo: "Sony Alpha 35mm · f/2.0 · ISO 320"
  },
  {
    id: "54556908438",
    title: "DSC04915",
    category: "Landscape",
    url: "https://live.staticflickr.com/65535/54556908438_403f11c0b2_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/54556908438_38d5c087d9_z.jpg",
    width: 4000,
    height: 6000,
    aspectRatio: 0.67,
    dateTaken: "2025-05-30",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/54556908438/",
    description: "Vibrant coastal palette under bright midday Mediterranean sunshine.",
    cameraInfo: "Sony Alpha 35mm · f/6.3 · ISO 100"
  },
  {
    id: "54557006840",
    title: "DSC04904",
    category: "Landscape",
    url: "https://live.staticflickr.com/65535/54557006840_9449de2b37_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/54557006840_70a55cf52b_z.jpg",
    width: 4000,
    height: 6000,
    aspectRatio: 0.67,
    dateTaken: "2025-05-30",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/54557006840/",
    description: "Serene horizon line splitting sea and sky in natural minimalism.",
    cameraInfo: "Sony Alpha 35mm · f/4.5 · ISO 100"
  },
  {
    id: "54556854634",
    title: "DSC04895",
    category: "Landscape",
    url: "https://live.staticflickr.com/65535/54556854634_d76957c594_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/54556854634_b97de8c411_z.jpg",
    width: 4000,
    height: 6000,
    aspectRatio: 0.67,
    dateTaken: "2025-05-30",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/54556854634/",
    description: "Golden hour gradient across sea cliffs and pebble beaches.",
    cameraInfo: "Sony Alpha 35mm · f/2.8 · ISO 160"
  },
  {
    id: "54556912963",
    title: "DSC04889",
    category: "Landscape",
    url: "https://live.staticflickr.com/65535/54556912963_bf73be2399_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/54556912963_e2ca2ddfb2_z.jpg",
    width: 4000,
    height: 6000,
    aspectRatio: 0.67,
    dateTaken: "2025-05-30",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/54556912963/",
    description: "Gentle ripples on emerald Adriatic shallows.",
    cameraInfo: "Sony Alpha 35mm · f/4.0 · ISO 100"
  },
  {
    id: "54557015735",
    title: "DSC04883",
    category: "Landscape",
    url: "https://live.staticflickr.com/65535/54557015735_3304f43fc0_h.jpg",
    thumbnailUrl: "https://live.staticflickr.com/65535/54557015735_276a173442_z.jpg",
    width: 4000,
    height: 6000,
    aspectRatio: 0.67,
    dateTaken: "2025-05-30",
    flickrUrl: "https://www.flickr.com/photos/202914253@N04/54557015735/",
    description: "Quiet morning shoreline before the awakening of the coastal town.",
    cameraInfo: "Sony Alpha 35mm · f/3.2 · ISO 100"
  }
];

// Autoshow Collection from github repo
export const AUTOSHOW_PHOTOS: Photo[] = [
  {
    id: "autoshow-1",
    title: "DSC03604",
    category: "Automotive",
    url: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/autoshow/DSC03604.jpg",
    thumbnailUrl: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/autoshow/DSC03604.jpg",
    aspectRatio: 1.5,
    description: "Classic curves and automotive styling under show lights.",
    cameraInfo: "Sony Alpha · 35mm · f/2.0"
  },
  {
    id: "autoshow-2",
    title: "DSC03608",
    category: "Automotive",
    url: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/autoshow/DSC03608.jpg",
    thumbnailUrl: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/autoshow/DSC03608.jpg",
    aspectRatio: 1.5,
    description: "Polished hood reflections and precision grille design.",
    cameraInfo: "Sony Alpha · 35mm · f/2.2"
  },
  {
    id: "autoshow-3",
    title: "DSC03611",
    category: "Automotive",
    url: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/autoshow/DSC03611.jpg",
    thumbnailUrl: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/autoshow/DSC03611.jpg",
    aspectRatio: 1.5,
    description: "Custom suspension and low-profile sports car stance.",
    cameraInfo: "Sony Alpha · 35mm · f/1.8"
  },
  {
    id: "autoshow-4",
    title: "DSC03615",
    category: "Automotive",
    url: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/autoshow/DSC03615.jpg",
    thumbnailUrl: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/autoshow/DSC03615.jpg",
    aspectRatio: 1.5,
    description: "Interior dashboard stitch craftsmanship and steering wheel cockpit view.",
    cameraInfo: "Sony Alpha · 35mm · f/2.8"
  },
  {
    id: "autoshow-5",
    title: "DSC03616",
    category: "Automotive",
    url: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/autoshow/DSC03616.jpg",
    thumbnailUrl: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/autoshow/DSC03616.jpg",
    aspectRatio: 1.5,
    description: "Aggressive headlamp optics and modern carbon-fiber accents.",
    cameraInfo: "Sony Alpha · 35mm · f/2.0"
  },
  {
    id: "autoshow-6",
    title: "DSC03619",
    category: "Automotive",
    url: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/autoshow/DSC03619.jpg",
    thumbnailUrl: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/autoshow/DSC03619.jpg",
    aspectRatio: 1.5,
    description: "Crowd atmosphere and enthusiasts observing the automotive exhibit.",
    cameraInfo: "Sony Alpha · 35mm · f/2.5"
  },
  {
    id: "autoshow-7",
    title: "DSC03638",
    category: "Automotive",
    url: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/autoshow/DSC03638.jpg",
    thumbnailUrl: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/autoshow/DSC03638.jpg",
    aspectRatio: 1.5,
    description: "Wide angle perspective of the automotive showcase pavilion.",
    cameraInfo: "Sony Alpha · 35mm · f/3.5"
  }
];

// Adriatic Collection (Dubrovnik & Budva) from github repo
export const ADRIATIC_PHOTOS: Photo[] = [
  {
    id: "adriatic-1",
    title: "DSC04089",
    category: "Landscape",
    url: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/adriatic/DSC04089.jpg",
    thumbnailUrl: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/adriatic/DSC04089.jpg",
    aspectRatio: 1.5,
    description: "Panoramic vistas of Dubrovnik fortress walls touching the crystal Adriatic sea.",
    cameraInfo: "Sony Alpha · 35mm · f/5.6"
  },
  {
    id: "adriatic-2",
    title: "DSC04097",
    category: "Architectural",
    url: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/adriatic/DSC04097.jpg",
    thumbnailUrl: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/adriatic/DSC04097.jpg",
    aspectRatio: 1.5,
    description: "Centuries-old stone alleys and arched portals in Budva Old Town.",
    cameraInfo: "Sony Alpha · 35mm · f/4.0"
  },
  {
    id: "adriatic-3",
    title: "DSC04133",
    category: "Street",
    url: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/adriatic/DSC04133.jpg",
    thumbnailUrl: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/adriatic/DSC04133.jpg",
    aspectRatio: 1.5,
    description: "Candid coastal moments and afternoon harbor activity.",
    cameraInfo: "Sony Alpha · 35mm · f/3.2"
  },
  {
    id: "adriatic-4",
    title: "DSC04146",
    category: "Landscape",
    url: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/adriatic/DSC04146.jpg",
    thumbnailUrl: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/adriatic/DSC04146.jpg",
    aspectRatio: 1.5,
    description: "Coastal mountain silhouettes framed against the open horizon.",
    cameraInfo: "Sony Alpha · 35mm · f/5.0"
  },
  {
    id: "adriatic-5",
    title: "DSC04151",
    category: "Architectural",
    url: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/adriatic/DSC04151.jpg",
    thumbnailUrl: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/adriatic/DSC04151.jpg",
    aspectRatio: 1.5,
    description: "Medieval fortifications overlooking azure waters and red tile rooftops.",
    cameraInfo: "Sony Alpha · 35mm · f/4.5"
  }
];

// Curated Hero scattered prints (combination of iconic Flickr & repo shots)
export const HERO_SCATTER_PHOTOS: Photo[] = [
  FLICKR_PHOTOS[0], // DSC07640 (Automotive)
  FLICKR_PHOTOS[9], // The old man (Portrait/Street)
  FLICKR_PHOTOS[7], // Another day (Street)
  FLICKR_PHOTOS[10], // DSC05197 (Architectural)
  FLICKR_PHOTOS[12], // DSC05123 (Landscape)
  FLICKR_PHOTOS[8], // Equality (Street)
  FLICKR_PHOTOS[1], // DSC07634 (Automotive)
  FLICKR_PHOTOS[22], // DSC04895 (Coastal)
  {
    id: "hero-arch-1",
    title: "DSC02797",
    category: "Architectural",
    url: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/DSC02797.JPG",
    thumbnailUrl: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/DSC02797.JPG",
    aspectRatio: 1.5,
    description: "Modern architectural lines and balance.",
    cameraInfo: "35mm Prime · f/2.8"
  },
  {
    id: "hero-land-1",
    title: "DSC03087",
    category: "Landscape",
    url: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/DSC03087.JPG",
    thumbnailUrl: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/DSC03087.JPG",
    aspectRatio: 1.5,
    description: "Majestic natural landscape and mountain vista.",
    cameraInfo: "35mm Prime · f/5.6"
  },
  {
    id: "hero-auto-1",
    title: "DSC03611",
    category: "Automotive",
    url: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/DSC03611.jpg",
    thumbnailUrl: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/DSC03611.jpg",
    aspectRatio: 1.5,
    description: "Automotive engineering and sculptural contours.",
    cameraInfo: "35mm Prime · f/2.0"
  },
  {
    id: "hero-street-1",
    title: "DSC03463",
    category: "Street",
    url: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/DSC03463.jpg",
    thumbnailUrl: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/DSC03463.jpg",
    aspectRatio: 1.5,
    description: "Spontaneous street life and light play.",
    cameraInfo: "35mm Prime · f/2.8"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "autoshow",
    title: "Autoshow",
    subtitle: "Precision Engineering & Mechanical Form",
    category: "Automotive",
    coverImage: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/autoshow/DSC03611.jpg",
    description: "The AutoShow project captures the essence and excitement of a car show through a series of high-quality photographs. This collection showcases the unique features, designs, and atmosphere of the event, highlighting the variety of cars from classic models to modern supercars. The project includes detailed shots of unique features such as hood ornaments, interiors, and custom modifications, as well as action shots of cars in motion during demonstrations and parades. The vibrant event atmosphere is also captured, with images of the crowd, interactions, and overall vibe of the car show. The final deliverables include a curated photo gallery, a printed photo book, and an online portfolio, all of which beautifully narrate the story of the car show.",
    photos: AUTOSHOW_PHOTOS,
    tags: ["Automotive", "Supercars", "Showcase", "Trackside"]
  },
  {
    id: "adriatic",
    title: "Adriatic",
    subtitle: "Dubrovnik & Budva Coastal Chronicles",
    category: "Landscape & Architecture",
    coverImage: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/adriatic/DSC04089.jpg",
    description: "The Dubrovnik and Budva Photoshoot Project captures the stunning beauty and rich history of these two coastal cities through a series of high-quality photographs. This collection showcases the unique architecture, vibrant culture, and breathtaking landscapes of Dubrovnik, Croatia, and Budva, Montenegro. The project includes detailed shots of architectural elements, street art, and traditional features, as well as scenic views of the Adriatic Sea and panoramic cityscapes. The vibrant local culture is also captured, with images of street markets, local festivals, and everyday life in both cities. The final deliverables include a curated photo gallery, a printed photo book, and an online portfolio, all of which beautifully narrate the story of Dubrovnik and Budva.",
    photos: ADRIATIC_PHOTOS,
    tags: ["Adriatic", "Croatia", "Montenegro", "Coastline", "Stone Architecture"]
  },
  {
    id: "flickr-stream",
    title: "35mm Photostream",
    subtitle: "Direct From The Official Flickr Stream",
    category: "Street, Portraits & Nature",
    coverImage: "https://live.staticflickr.com/65535/54996329198_3f7512d09a_h.jpg",
    description: "A continuous visual diary consisting of 25 original works published to the official Flickr photostream. Captured using genuine 35mm optical focal lengths, this series focuses on raw emotional truth—from street encounters like 'The old man' and 'Equality' to pristine Mediterranean shorelines and sharp automotive compositions.",
    photos: FLICKR_PHOTOS,
    tags: ["35mm Primes", "Flickr Collection", "Candid", "High Dynamic Range"]
  }
];

export const GENRE_SECTIONS = [
  {
    id: "landscape",
    title: "Land-scape",
    kicker: "Genre 01",
    description: "At our company, we take pride in our landscape photography services. While we may not specialize exclusively in this genre, our team is quite adept at capturing the natural beauty of various landscapes. We strive to create stunning images that highlight the majesty of nature, from serene coastal scenes to breathtaking mountain vistas. Whether you're looking to enhance your space with beautiful landscape prints or need professional photography for your projects, our skilled photographers are ready to deliver exceptional results. Let us bring the beauty of the outdoors to you.",
    image: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/DSC03087.JPG",
    alt: "Landscape mountain vista 35mm",
    specs: ["Natural Light", "Adriatic & Mountain Ranges", "Print Grade"],
    quote: "Capturing the serene coastlines and alpine horizon lines across the Mediterranean and Balkans."
  },
  {
    id: "automotive",
    title: "Automotive",
    kicker: "Genre 02",
    description: "Whether it's for marketing materials, personal collections, or editorial features, we bring a keen eye for detail and a passion for cars to every shoot. Our goal is to highlight the unique design and craftsmanship of each vehicle, creating images that resonate with car enthusiasts and potential buyers alike. Trust us to deliver high-quality automotive photography that drives your vision forward.",
    image: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/DSC03611.jpg",
    alt: "Automotive vehicle showcase 35mm",
    specs: ["Precision Reflections", "Trackside & Rig", "Editorial Formats"],
    quote: "Highlighting mechanical sculpture, craftsmanship, and the kinetic spirit of modern and classic automobiles."
  },
  {
    id: "architectural",
    title: "Architectural",
    kicker: "Genre 03",
    description: "We focus on highlighting the intricate details, unique structures, and aesthetic beauty of buildings and spaces. Whether it's for real estate, commercial projects, or personal collections, our photographers bring a keen eye for composition and lighting to every shoot. Trust us to deliver high-quality architectural photography that showcases the artistry and craftsmanship of your projects.",
    image: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/DSC02797.JPG",
    alt: "Architectural geometry 35mm",
    specs: ["Orthogonal Lines", "Structural Detail", "Commercial Real Estate"],
    quote: "Transforming stone, glass, and shadows into timeless structural portraits."
  },
  {
    id: "street",
    title: "Street",
    kicker: "Genre 04",
    description: "Our team is highly skilled at capturing the vibrant energy and unique moments of urban life. We focus on highlighting the candid interactions, architectural beauty, and dynamic scenes that make each city unique. Whether it's for editorial features, marketing materials, or personal collections, our photographers bring a keen eye for detail and a passion for storytelling to every shoot. Trust us to deliver high-quality street photography that captures the essence of the urban experience.",
    image: "https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/DSC03463.jpg",
    alt: "Street candid life 35mm",
    specs: ["35mm Street Lens", "Candid Observations", "Human Stories"],
    quote: "Documenting the genuine, fleeting gestures and unscripted soul of European city streets."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What types of photography do you specialize in?",
    answer: "We specialize in landscape, automotive, architectural, and street photography, working primarily with 35mm optical focal lengths to deliver an authentic cinematic look."
  },
  {
    id: "faq-2",
    question: "How can I book a session?",
    answer: "You can book a session by contacting us through our online contact form, emailing us directly at skifterbytyqi2005@gmail.com, or calling our studio line at 049-325-261."
  },
  {
    id: "faq-3",
    question: "Do you offer digital files, prints, or both?",
    answer: "We offer both high-resolution archival digital files and museum-grade fine art prints. You can select the delivery package that best matches your project requirements."
  },
  {
    id: "faq-4",
    question: "How long does it take to receive the photos after a session?",
    answer: "Our standard turnaround time is approximately 2 to 3 weeks. Each selected photograph undergoes deliberate color grading and exposure calibration."
  },
  {
    id: "faq-5",
    question: "Do you travel for photoshoots? If so, what are the additional costs?",
    answer: "Yes, we travel frequently across Europe, the Balkans, and coastal regions for commissions and commercial shoots. Travel and accommodation expenses are calculated transparently based on destination."
  },
  {
    id: "faq-6",
    question: "Can I see a portfolio of your previous work?",
    answer: "Yes, you can explore our complete curated portfolio here on our website, review our live Flickr stream with 25 recent works, or request a customized portfolio book during your consultation."
  },
  {
    id: "faq-7",
    question: "What equipment do you use?",
    answer: "We shoot with professional-grade high-resolution full-frame bodies paired with fast 35mm and 50mm prime lenses, precision polarizing filters, and dedicated studio lighting systems."
  },
  {
    id: "faq-8",
    question: "How do you ensure the safety and privacy of my photos?",
    answer: "We take client privacy and digital security very seriously. All raw and mastered files are redundantly archived in encrypted cloud storage and are never published without written agreement."
  }
];

export const STUDIO_INFO = {
  name: "35mm Production",
  founder: "Skifter Bytyqi",
  foundedYear: "2022",
  email: "skifterbytyqi2005@gmail.com",
  phone: "049-325-261",
  location: "Prishtina, Kosovo & Adriatic Coast",
  flickrUrl: "https://flic.kr/ps/46iTo7",
  githubUrl: "https://github.com/Skifta40/PhotographyPortfolio"
};
