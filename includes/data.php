<?php
/**
 * 35mm Photography Portfolio - Data Store
 * Photographer: Skifter Bytyqi
 * Studio: 35mm Production (Founded 2022)
 * Flickr Archive: https://flic.kr/ps/46iTo7
 */

$STUDIO_INFO = [
    'name' => '35mm Production',
    'founder' => 'Skifter Bytyqi',
    'foundedYear' => '2022',
    'email' => 'skifterbytyqi2005@gmail.com',
    'phone' => '049-325-261',
    'location' => 'Prishtina, Kosovo & Adriatic Coast',
    'flickrUrl' => 'https://flic.kr/ps/46iTo7',
    'githubUrl' => 'https://github.com/Skifta40/PhotographyPortfolio'
];

// All 25 original high-resolution photographs from https://flic.kr/ps/46iTo7
$FLICKR_PHOTOS = [
    [
        'id' => '55577755365',
        'title' => 'DSC07640',
        'category' => 'Automotive',
        'url' => 'https://live.staticflickr.com/65535/55577755365_958dda1531_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/55577755365_52615620aa_z.jpg',
        'width' => 6000,
        'height' => 4000,
        'aspect' => 1.5,
        'date' => '2026-10-05',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/55577755365/',
        'desc' => 'High-contrast dynamic automotive study with sleek body contour reflection.',
        'camera' => 'Sony Alpha 35mm · f/2.0 · ISO 100'
    ],
    [
        'id' => '55576307542',
        'title' => 'DSC07634',
        'category' => 'Automotive',
        'url' => 'https://live.staticflickr.com/65535/55576307542_88c93f1cac_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/55576307542_7d26ba88e4_z.jpg',
        'width' => 3376,
        'height' => 6000,
        'aspect' => 0.56,
        'date' => '2026-10-05',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/55576307542/',
        'desc' => 'Vertical portrait of engineering craftsmanship and metallic textures.',
        'camera' => 'Sony Alpha 35mm · f/2.8 · ISO 200'
    ],
    [
        'id' => '55576307467',
        'title' => 'DSC07551',
        'category' => 'Automotive',
        'url' => 'https://live.staticflickr.com/65535/55576307467_e965652913_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/55576307467_b3c272484b_z.jpg',
        'width' => 3376,
        'height' => 6000,
        'aspect' => 0.56,
        'date' => '2026-10-05',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/55576307467/',
        'desc' => 'Curated vertical angle emphasizing rim detailing and ambient studio glow.',
        'camera' => 'Sony Alpha 35mm · f/1.8 · ISO 125'
    ],
    [
        'id' => '55577502714',
        'title' => 'DSC07546',
        'category' => 'Automotive',
        'url' => 'https://live.staticflickr.com/65535/55577502714_101124346b_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/55577502714_2f150947e6_z.jpg',
        'width' => 1565,
        'height' => 2781,
        'aspect' => 0.56,
        'date' => '2026-10-05',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/55577502714/',
        'desc' => 'Aerodynamic lines captured with dramatic rim lighting and low angle framing.',
        'camera' => 'Sony Alpha 35mm · f/2.2 · ISO 160'
    ],
    [
        'id' => '55577755315',
        'title' => 'DSC07534',
        'category' => 'Automotive',
        'url' => 'https://live.staticflickr.com/65535/55577755315_ea4f2b2128_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/55577755315_4730168eca_z.jpg',
        'width' => 3701,
        'height' => 5311,
        'aspect' => 0.7,
        'date' => '2026-10-05',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/55577755315/',
        'desc' => 'Precise mechanical detailing shot in monochrome depth.',
        'camera' => 'Sony Alpha 35mm · f/2.8 · ISO 100'
    ],
    [
        'id' => '55577448468',
        'title' => 'DSC07440',
        'category' => 'Street',
        'url' => 'https://live.staticflickr.com/65535/55577448468_a47d378189_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/55577448468_a880c77bc3_z.jpg',
        'width' => 3370,
        'height' => 4000,
        'aspect' => 0.84,
        'date' => '2026-10-05',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/55577448468/',
        'desc' => 'Subtle street narrative capturing everyday human nuance in urban setting.',
        'camera' => 'Sony Alpha 35mm · f/2.5 · ISO 400'
    ],
    [
        'id' => '55577338096',
        'title' => 'DSC07432',
        'category' => 'Street',
        'url' => 'https://live.staticflickr.com/65535/55577338096_d62fc46e02_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/55577338096_e23abdd0bb_z.jpg',
        'width' => 3376,
        'height' => 6000,
        'aspect' => 0.56,
        'date' => '2026-10-05',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/55577338096/',
        'desc' => 'Atmospheric street documentation with authentic natural shadows.',
        'camera' => 'Sony Alpha 35mm · f/2.8 · ISO 320'
    ],
    [
        'id' => '54996496524',
        'title' => 'Another day',
        'category' => 'Street',
        'url' => 'https://live.staticflickr.com/65535/54996496524_f343f40693_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/54996496524_61bd40b814_z.jpg',
        'width' => 3376,
        'height' => 6000,
        'aspect' => 0.56,
        'date' => '2025-11-20',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/54996496524/',
        'desc' => '\'Another day\' — Poignant candid documentary observing quiet urban rhythms.',
        'camera' => 'Sony Alpha 35mm · f/2.0 · ISO 250'
    ],
    [
        'id' => '54996416583',
        'title' => 'Equality',
        'category' => 'Street',
        'url' => 'https://live.staticflickr.com/65535/54996416583_f29fa43e79_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/54996416583_34c3ebb4d2_z.jpg',
        'width' => 2155,
        'height' => 3830,
        'aspect' => 0.56,
        'date' => '2025-11-20',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/54996416583/',
        'desc' => '\'Equality\' — Expressive human emotion and timeless gaze frozen on 35mm lens.',
        'camera' => 'Sony Alpha 35mm · f/1.8 · ISO 200'
    ],
    [
        'id' => '54996329198',
        'title' => 'The old man',
        'category' => 'Street',
        'url' => 'https://live.staticflickr.com/65535/54996329198_3f7512d09a_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/54996329198_39755e1b88_z.jpg',
        'width' => 3376,
        'height' => 6000,
        'aspect' => 0.56,
        'date' => '2025-11-20',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/54996329198/',
        'desc' => '\'The old man\' — Deeply moving character portrait with generational wisdom.',
        'camera' => 'Sony Alpha 35mm · f/2.2 · ISO 400'
    ],
    [
        'id' => '54908766869',
        'title' => 'DSC05197',
        'category' => 'Architectural',
        'url' => 'https://live.staticflickr.com/65535/54908766869_e106287b72_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/54908766869_5b3cf0b520_z.jpg',
        'width' => 3376,
        'height' => 6000,
        'aspect' => 0.56,
        'date' => '2025-10-14',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/54908766869/',
        'desc' => 'Architectural verticality revealing geometric facades and sun angles.',
        'camera' => 'Sony Alpha 35mm · f/4.0 · ISO 100'
    ],
    [
        'id' => '54908767114',
        'title' => 'DSC05130',
        'category' => 'Architectural',
        'url' => 'https://live.staticflickr.com/65535/54908767114_99ddb78280_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/54908767114_457040f961_z.jpg',
        'width' => 3522,
        'height' => 5283,
        'aspect' => 0.67,
        'date' => '2025-10-14',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/54908767114/',
        'desc' => 'Historical masonry and structural harmony in coastal Old Town alleys.',
        'camera' => 'Sony Alpha 35mm · f/3.5 · ISO 100'
    ],
    [
        'id' => '54908739948',
        'title' => 'DSC05123',
        'category' => 'Landscape',
        'url' => 'https://live.staticflickr.com/65535/54908739948_09a54716b7_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/54908739948_f5ef955cfe_z.jpg',
        'width' => 5655,
        'height' => 3770,
        'aspect' => 1.5,
        'date' => '2025-10-14',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/54908739948/',
        'desc' => 'Expansive panoramic perspective over rocky shoreline and deep blue sea.',
        'camera' => 'Sony Alpha 35mm · f/5.6 · ISO 100'
    ],
    [
        'id' => '54908516246',
        'title' => 'DSC05122',
        'category' => 'Architectural',
        'url' => 'https://live.staticflickr.com/65535/54908516246_bb90bc602f_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/54908516246_5514f688d3_z.jpg',
        'width' => 4000,
        'height' => 6000,
        'aspect' => 0.67,
        'date' => '2025-10-14',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/54908516246/',
        'desc' => 'Texture study of weathered stone arches under Mediterranean skies.',
        'camera' => 'Sony Alpha 35mm · f/4.0 · ISO 125'
    ],
    [
        'id' => '54907650432',
        'title' => 'DSC05119',
        'category' => 'Architectural',
        'url' => 'https://live.staticflickr.com/65535/54907650432_23879347dc_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/54907650432_0e11d57c80_z.jpg',
        'width' => 1175,
        'height' => 1762,
        'aspect' => 0.67,
        'date' => '2025-10-14',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/54907650432/',
        'desc' => 'Narrow passageway bathed in filtered golden afternoon light.',
        'camera' => 'Sony Alpha 35mm · f/2.8 · ISO 200'
    ],
    [
        'id' => '54556843484',
        'title' => 'DSC05024',
        'category' => 'Landscape',
        'url' => 'https://live.staticflickr.com/65535/54556843484_2cb1880ba0_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/54556843484_6abb50649a_z.jpg',
        'width' => 3883,
        'height' => 5825,
        'aspect' => 0.67,
        'date' => '2025-05-30',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/54556843484/',
        'desc' => 'Crisp natural elevation and dramatic coastal horizons.',
        'camera' => 'Sony Alpha 35mm · f/5.6 · ISO 100'
    ],
    [
        'id' => '54556998915',
        'title' => 'DSC04959',
        'category' => 'Landscape',
        'url' => 'https://live.staticflickr.com/65535/54556998915_ca6ca6d1b8_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/54556998915_371bdc44d1_z.jpg',
        'width' => 4000,
        'height' => 6000,
        'aspect' => 0.67,
        'date' => '2025-05-30',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/54556998915/',
        'desc' => 'Sunbeam reflection on tranquil tidal waters at dusk.',
        'camera' => 'Sony Alpha 35mm · f/3.2 · ISO 160'
    ],
    [
        'id' => '54555778542',
        'title' => 'DSC04954',
        'category' => 'Landscape',
        'url' => 'https://live.staticflickr.com/65535/54555778542_bb689e138a_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/54555778542_9c8f4453e3_z.jpg',
        'width' => 4000,
        'height' => 6000,
        'aspect' => 0.67,
        'date' => '2025-05-30',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/54555778542/',
        'desc' => 'Subdued tones and ethereal sea mist settling over distant hills.',
        'camera' => 'Sony Alpha 35mm · f/4.0 · ISO 200'
    ],
    [
        'id' => '54556899873',
        'title' => 'DSC04938',
        'category' => 'Landscape',
        'url' => 'https://live.staticflickr.com/65535/54556899873_cdeb91a441_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/54556899873_7c3905970b_z.jpg',
        'width' => 4000,
        'height' => 6000,
        'aspect' => 0.67,
        'date' => '2025-05-30',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/54556899873/',
        'desc' => 'Dynamic interplay of waves crashing against rugged cliffs.',
        'camera' => 'Sony Alpha 35mm · f/2.8 · ISO 100'
    ],
    [
        'id' => '54557003175',
        'title' => 'DSC04926',
        'category' => 'Landscape',
        'url' => 'https://live.staticflickr.com/65535/54557003175_efd58a98cd_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/54557003175_b0a31ff261_z.jpg',
        'width' => 3903,
        'height' => 5855,
        'aspect' => 0.67,
        'date' => '2025-05-30',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/54557003175/',
        'desc' => 'The serene stillness of twilight over Adriatic waters.',
        'camera' => 'Sony Alpha 35mm · f/2.0 · ISO 320'
    ],
    [
        'id' => '54556908438',
        'title' => 'DSC04915',
        'category' => 'Landscape',
        'url' => 'https://live.staticflickr.com/65535/54556908438_403f11c0b2_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/54556908438_38d5c087d9_z.jpg',
        'width' => 4000,
        'height' => 6000,
        'aspect' => 0.67,
        'date' => '2025-05-30',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/54556908438/',
        'desc' => 'Vibrant coastal palette under bright midday Mediterranean sunshine.',
        'camera' => 'Sony Alpha 35mm · f/6.3 · ISO 100'
    ],
    [
        'id' => '54557006840',
        'title' => 'DSC04904',
        'category' => 'Landscape',
        'url' => 'https://live.staticflickr.com/65535/54557006840_9449de2b37_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/54557006840_70a55cf52b_z.jpg',
        'width' => 4000,
        'height' => 6000,
        'aspect' => 0.67,
        'date' => '2025-05-30',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/54557006840/',
        'desc' => 'Serene horizon line splitting sea and sky in natural minimalism.',
        'camera' => 'Sony Alpha 35mm · f/4.5 · ISO 100'
    ],
    [
        'id' => '54556854634',
        'title' => 'DSC04895',
        'category' => 'Landscape',
        'url' => 'https://live.staticflickr.com/65535/54556854634_d76957c594_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/54556854634_b97de8c411_z.jpg',
        'width' => 4000,
        'height' => 6000,
        'aspect' => 0.67,
        'date' => '2025-05-30',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/54556854634/',
        'desc' => 'Golden hour gradient across sea cliffs and pebble beaches.',
        'camera' => 'Sony Alpha 35mm · f/2.8 · ISO 160'
    ],
    [
        'id' => '54556912963',
        'title' => 'DSC04889',
        'category' => 'Landscape',
        'url' => 'https://live.staticflickr.com/65535/54556912963_bf73be2399_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/54556912963_e2ca2ddfb2_z.jpg',
        'width' => 4000,
        'height' => 6000,
        'aspect' => 0.67,
        'date' => '2025-05-30',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/54556912963/',
        'desc' => 'Gentle ripples on emerald Adriatic shallows.',
        'camera' => 'Sony Alpha 35mm · f/4.0 · ISO 100'
    ],
    [
        'id' => '54557015735',
        'title' => 'DSC04883',
        'category' => 'Landscape',
        'url' => 'https://live.staticflickr.com/65535/54557015735_3304f43fc0_h.jpg',
        'thumb' => 'https://live.staticflickr.com/65535/54557015735_276a173442_z.jpg',
        'width' => 4000,
        'height' => 6000,
        'aspect' => 0.67,
        'date' => '2025-05-30',
        'flickr' => 'https://www.flickr.com/photos/202914253@N04/54557015735/',
        'desc' => 'Quiet morning shoreline before the awakening of coastal towns.',
        'camera' => 'Sony Alpha 35mm · f/3.2 · ISO 100'
    ]
];

// Autoshow Collection
$AUTOSHOW_PHOTOS = [
    [
        'title' => 'DSC03604',
        'url' => 'https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/autoshow/DSC03604.jpg',
        'desc' => 'Classic curves and automotive styling under show lights.'
    ],
    [
        'title' => 'DSC03608',
        'url' => 'https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/autoshow/DSC03608.jpg',
        'desc' => 'Polished hood reflections and precision grille design.'
    ],
    [
        'title' => 'DSC03611',
        'url' => 'https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/autoshow/DSC03611.jpg',
        'desc' => 'Custom suspension and low-profile sports car stance.'
    ],
    [
        'title' => 'DSC03615',
        'url' => 'https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/autoshow/DSC03615.jpg',
        'desc' => 'Interior dashboard stitch craftsmanship and steering wheel cockpit view.'
    ],
    [
        'title' => 'DSC03616',
        'url' => 'https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/autoshow/DSC03616.jpg',
        'desc' => 'Aggressive headlamp optics and modern carbon-fiber accents.'
    ],
    [
        'title' => 'DSC03619',
        'url' => 'https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/autoshow/DSC03619.jpg',
        'desc' => 'Crowd atmosphere and enthusiasts observing the automotive exhibit.'
    ],
    [
        'title' => 'DSC03638',
        'url' => 'https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/autoshow/DSC03638.jpg',
        'desc' => 'Wide angle perspective of the automotive showcase pavilion.'
    ]
];

// Adriatic Collection (Dubrovnik & Budva)
$ADRIATIC_PHOTOS = [
    [
        'title' => 'DSC04089',
        'url' => 'https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/adriatic/DSC04089.jpg',
        'desc' => 'Panoramic vistas of Dubrovnik fortress walls touching the crystal Adriatic sea.'
    ],
    [
        'title' => 'DSC04097',
        'url' => 'https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/adriatic/DSC04097.jpg',
        'desc' => 'Centuries-old stone alleys and arched portals in Budva Old Town.'
    ],
    [
        'title' => 'DSC04133',
        'url' => 'https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/adriatic/DSC04133.jpg',
        'desc' => 'Candid coastal moments and afternoon harbor activity.'
    ],
    [
        'title' => 'DSC04146',
        'url' => 'https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/adriatic/DSC04146.jpg',
        'desc' => 'Coastal mountain silhouettes framed against the open horizon.'
    ],
    [
        'title' => 'DSC04151',
        'url' => 'https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/adriatic/DSC04151.jpg',
        'desc' => 'Medieval fortifications overlooking azure waters and red tile rooftops.'
    ]
];

// Featured Hero Prints
$HERO_PRINTS = array_slice($FLICKR_PHOTOS, 0, 12);

// FAQ Items
$FAQ_ITEMS = [
    [
        'q' => 'What types of photography do you specialize in?',
        'a' => 'We specialize in landscape, automotive, architectural, and street photography, working primarily with 35mm optical focal lengths to deliver an authentic cinematic look.'
    ],
    [
        'q' => 'How can I book a session?',
        'a' => 'You can book a session by contacting us through our online contact form, emailing us directly at skifterbytyqi2005@gmail.com, or calling our studio line at 049-325-261.'
    ],
    [
        'q' => 'Do you offer digital files, prints, or both?',
        'a' => 'We offer both high-resolution archival digital files and museum-grade fine art prints. You can select the delivery package that best matches your project requirements.'
    ],
    [
        'q' => 'How long does it take to receive the photos after a session?',
        'a' => 'Our standard turnaround time is approximately 2 to 3 weeks. Each selected photograph undergoes deliberate color grading and exposure calibration.'
    ],
    [
        'q' => 'Do you travel for photoshoots? If so, what are the additional costs?',
        'a' => 'Yes, we travel frequently across Europe, the Balkans, and coastal regions for commissions and commercial shoots. Travel and accommodation expenses are calculated transparently based on destination.'
    ],
    [
        'q' => 'Can I see a portfolio of your previous work?',
        'a' => 'Yes, you can explore our complete curated portfolio here on our website, review our live Flickr stream with 25 recent works, or request a customized portfolio book during your consultation.'
    ],
    [
        'q' => 'What equipment do you use?',
        'a' => 'We shoot with professional-grade high-resolution full-frame bodies paired with fast 35mm and 50mm prime lenses, precision polarizing filters, and dedicated studio lighting systems.'
    ],
    [
        'q' => 'How do you ensure the safety and privacy of my photos?',
        'a' => 'We take client privacy and digital security very seriously. All raw and mastered files are redundantly archived in encrypted cloud storage and are never published without written agreement.'
    ]
];
