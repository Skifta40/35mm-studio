<?php
require_once __DIR__ . '/includes/data.php';

$pageTitle = '35mm - Photography Portfolio | Skifter Bytyqi';
$currentPage = 'home';

require_once __DIR__ . '/includes/header.php';
?>

<!-- Hero Section -->
<section class="hero-section">
    <div class="hero-header">
        <span class="hero-eyebrow">Editorial Portfolio &amp; Archive</span>
        <h1 class="hero-title">35mm</h1>
        <p class="hero-tagline">Analog Aesthetics &middot; Full Frame Primes &middot; Prishtina &amp; Adriatic Coastline</p>
    </div>

    <!-- Interactive Hero Controls -->
    <div class="hero-controls-bar">
        <div class="status-indicator">
            <span class="pulse-dot"></span>
            <span>Interactive Film Strip &middot; <?php echo count($HERO_PRINTS); ?> Selected Works</span>
        </div>
        <div class="hero-actions">
            <button id="heroGridToggle" class="btn-sm">
                <span>Contact Sheet Grid</span>
            </button>
            <button id="heroShuffleBtn" class="btn-sm">
                <span>Shuffle Stack</span>
            </button>
        </div>
    </div>

    <!-- Desktop Scattered Prints Container -->
    <div class="hero-scatter-container desktop-only" id="heroScatterArea">
        <div class="film-grain-overlay"></div>
        <div class="darkroom-label top-left">35MM PRODUCTION &middot; PROOF SHEET</div>
        <div class="darkroom-label bottom-right">HOVER TO ENLARGE &middot; CLICK TO INSPECT</div>

        <div class="scatter-inner" id="scatterInner">
            <?php foreach ($HERO_PRINTS as $idx => $photo): ?>
                <div class="scatter-card" 
                     data-id="<?php echo htmlspecialchars($photo['id']); ?>"
                     data-url="<?php echo htmlspecialchars($photo['url']); ?>"
                     data-title="<?php echo htmlspecialchars($photo['title']); ?>"
                     data-category="<?php echo htmlspecialchars($photo['category']); ?>"
                     data-desc="<?php echo htmlspecialchars($photo['desc']); ?>"
                     data-flickr="<?php echo htmlspecialchars($photo['flickr']); ?>">
                    <div class="card-img-wrap">
                        <img src="<?php echo htmlspecialchars($photo['thumb']); ?>" alt="<?php echo htmlspecialchars($photo['title']); ?>" loading="lazy">
                    </div>
                    <div class="card-meta">
                        <span class="card-name"><?php echo htmlspecialchars($photo['title']); ?></span>
                        <span class="card-num">#<?php echo $idx + 1; ?></span>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>

    <!-- Mobile Horizontal Touch Scroll Film Strip -->
    <div class="mobile-filmstrip mobile-only">
        <div class="filmstrip-track">
            <?php foreach ($HERO_PRINTS as $idx => $photo): ?>
                <div class="mobile-card"
                     data-id="<?php echo htmlspecialchars($photo['id']); ?>"
                     data-url="<?php echo htmlspecialchars($photo['url']); ?>"
                     data-title="<?php echo htmlspecialchars($photo['title']); ?>"
                     data-category="<?php echo htmlspecialchars($photo['category']); ?>"
                     data-desc="<?php echo htmlspecialchars($photo['desc']); ?>"
                     data-flickr="<?php echo htmlspecialchars($photo['flickr']); ?>">
                    <div class="mobile-card-img">
                        <img src="<?php echo htmlspecialchars($photo['thumb']); ?>" alt="<?php echo htmlspecialchars($photo['title']); ?>" loading="lazy">
                        <div class="mobile-card-scrim">
                            <span class="mobile-card-title"><?php echo htmlspecialchars($photo['title']); ?></span>
                            <span class="mobile-card-cat"><?php echo htmlspecialchars($photo['category']); ?></span>
                        </div>
                    </div>
                    <div class="mobile-card-footer">
                        <span>35mm EXP #<?php echo str_pad($idx + 1, 2, '0', STR_PAD_LEFT); ?></span>
                        <span>ISO 100</span>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
        <p class="swipe-hint">&larr; Swipe to explore prints &middot; Tap any image to expand &rarr;</p>
    </div>

    <!-- Statement Banner -->
    <div class="hero-statement">
        <div>
            <h2 class="statement-heading">Capturing the pulse of light and machine.</h2>
            <p class="statement-sub">Full-frame photography by <?php echo htmlspecialchars($STUDIO_INFO['founder']); ?> &middot; Founded in <?php echo htmlspecialchars($STUDIO_INFO['foundedYear']); ?></p>
        </div>
        <a href="projects.php" class="btn-primary">View Selected Projects &rarr;</a>
    </div>
</section>

<!-- Featured Genres Section (Alternating Editorial Rows) -->
<section class="genres-section">
    <div class="section-heading text-center">
        <span class="section-eyebrow">Specialized Disciplines</span>
        <h2 class="section-title">Featured Genres</h2>
        <div class="title-divider"></div>
    </div>

    <div class="genre-list">
        <!-- Genre 1: Land-scape -->
        <article class="genre-row">
            <div class="genre-text">
                <span class="genre-kicker">Genre 01 / 35mm Production</span>
                <h3 class="genre-title">Land-scape</h3>
                <p class="genre-desc">At our company, we take pride in our landscape photography services. While we may not specialize exclusively in this genre, our team is quite adept at capturing the natural beauty of various landscapes. We strive to create stunning images that highlight the majesty of nature, from serene coastal scenes to breathtaking mountain vistas. Whether you're looking to enhance your space with beautiful landscape prints or need professional photography for your projects, our skilled photographers are ready to deliver exceptional results. Let us bring the beauty of the outdoors to you.</p>
                <blockquote class="genre-quote">"Capturing serene coastlines and alpine horizon lines across the Mediterranean and Balkans."</blockquote>
                <div class="genre-specs">
                    <span>Natural Light</span> &middot; <span>Adriatic &amp; Mountain Ranges</span> &middot; <span>Print Grade</span>
                </div>
            </div>
            <div class="genre-media" 
                 data-url="https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/DSC03087.JPG"
                 data-title="Land-scape"
                 data-category="Landscape"
                 data-desc="Majestic natural landscape and mountain vista in 35mm.">
                <img src="https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/DSC03087.JPG" alt="Landscape photography 35mm" loading="lazy">
                <div class="genre-media-overlay">
                    <span>Click to view full print</span>
                    <span class="zoom-icon">&oplus;</span>
                </div>
            </div>
        </article>

        <!-- Genre 2: Automotive (Flipped) -->
        <article class="genre-row row-reverse">
            <div class="genre-text">
                <span class="genre-kicker">Genre 02 / 35mm Production</span>
                <h3 class="genre-title">Automotive</h3>
                <p class="genre-desc">Whether it's for marketing materials, personal collections, or editorial features, we bring a keen eye for detail and a passion for cars to every shoot. Our goal is to highlight the unique design and craftsmanship of each vehicle, creating images that resonate with car enthusiasts and potential buyers alike. Trust us to deliver high-quality automotive photography that drives your vision forward.</p>
                <blockquote class="genre-quote">"Highlighting mechanical sculpture, craftsmanship, and the kinetic spirit of modern and classic automobiles."</blockquote>
                <div class="genre-specs">
                    <span>Precision Reflections</span> &middot; <span>Trackside &amp; Rig</span> &middot; <span>Editorial Formats</span>
                </div>
            </div>
            <div class="genre-media"
                 data-url="https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/DSC03611.jpg"
                 data-title="Automotive"
                 data-category="Automotive"
                 data-desc="Automotive styling and craftsmanship on 35mm.">
                <img src="https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/DSC03611.jpg" alt="Automotive photography 35mm" loading="lazy">
                <div class="genre-media-overlay">
                    <span>Click to view full print</span>
                    <span class="zoom-icon">&oplus;</span>
                </div>
            </div>
        </article>

        <!-- Genre 3: Architectural -->
        <article class="genre-row">
            <div class="genre-text">
                <span class="genre-kicker">Genre 03 / 35mm Production</span>
                <h3 class="genre-title">Architectural</h3>
                <p class="genre-desc">We focus on highlighting the intricate details, unique structures, and aesthetic beauty of buildings and spaces. Whether it's for real estate, commercial projects, or personal collections, our photographers bring a keen eye for composition and lighting to every shoot. Trust us to deliver high-quality architectural photography that showcases the artistry and craftsmanship of your projects.</p>
                <blockquote class="genre-quote">"Transforming stone, glass, and shadows into timeless structural portraits."</blockquote>
                <div class="genre-specs">
                    <span>Orthogonal Lines</span> &middot; <span>Structural Detail</span> &middot; <span>Commercial Real Estate</span>
                </div>
            </div>
            <div class="genre-media"
                 data-url="https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/DSC02797.JPG"
                 data-title="Architectural"
                 data-category="Architectural"
                 data-desc="Architectural geometry and form on 35mm.">
                <img src="https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/DSC02797.JPG" alt="Architectural photography 35mm" loading="lazy">
                <div class="genre-media-overlay">
                    <span>Click to view full print</span>
                    <span class="zoom-icon">&oplus;</span>
                </div>
            </div>
        </article>

        <!-- Genre 4: Street (Flipped) -->
        <article class="genre-row row-reverse">
            <div class="genre-text">
                <span class="genre-kicker">Genre 04 / 35mm Production</span>
                <h3 class="genre-title">Street</h3>
                <p class="genre-desc">Our team is highly skilled at capturing the vibrant energy and unique moments of urban life. We focus on highlighting the candid interactions, architectural beauty, and dynamic scenes that make each city unique. Whether it's for editorial features, marketing materials, or personal collections, our photographers bring a keen eye for detail and a passion for storytelling to every shoot. Trust us to deliver high-quality street photography that captures the essence of the urban experience.</p>
                <blockquote class="genre-quote">"Documenting genuine, fleeting gestures and unscripted soul of European city streets."</blockquote>
                <div class="genre-specs">
                    <span>35mm Street Lens</span> &middot; <span>Candid Observations</span> &middot; <span>Human Stories</span>
                </div>
            </div>
            <div class="genre-media"
                 data-url="https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/DSC03463.jpg"
                 data-title="Street"
                 data-category="Street"
                 data-desc="Candid street documentary on 35mm.">
                <img src="https://raw.githubusercontent.com/Skifta40/PhotographyPortfolio/main/img/DSC03463.jpg" alt="Street photography 35mm" loading="lazy">
                <div class="genre-media-overlay">
                    <span>Click to view full print</span>
                    <span class="zoom-icon">&oplus;</span>
                </div>
            </div>
        </article>
    </div>
</section>

<!-- Flickr Stream Section (All 25 photographs from https://flic.kr/ps/46iTo7) -->
<section class="flickr-section" id="flickrSection">
    <div class="flickr-header">
        <div>
            <span class="section-eyebrow">&bull; Official Archive &bull; 25 Photographs</span>
            <h2 class="section-title">Flickr Photostream</h2>
            <p class="section-desc">Direct from <a href="<?php echo htmlspecialchars($STUDIO_INFO['flickrUrl']); ?>" target="_blank" rel="noopener noreferrer">flic.kr/ps/46iTo7</a>. Uncompressed 35mm optical captures featuring candid street portraits, automotive details, and coastal vistas.</p>
        </div>
        <a href="<?php echo htmlspecialchars($STUDIO_INFO['flickrUrl']); ?>" target="_blank" rel="noopener noreferrer" class="btn-outline">
            <span>Open on Flickr &nearr;</span>
        </a>
    </div>

    <!-- Filters & Search Bar -->
    <div class="filter-bar">
        <div class="filter-tabs" id="flickrFilterTabs">
            <button class="filter-btn active" data-filter="All">All (<?php echo count($FLICKR_PHOTOS); ?>)</button>
            <button class="filter-btn" data-filter="Street">Street</button>
            <button class="filter-btn" data-filter="Automotive">Automotive</button>
            <button class="filter-btn" data-filter="Architectural">Architectural</button>
            <button class="filter-btn" data-filter="Landscape">Landscape</button>
        </div>
        <div class="filter-search">
            <input type="text" id="flickrSearchInput" placeholder="Search photos...">
        </div>
    </div>

    <!-- Masonry Photo Grid -->
    <div class="photo-masonry" id="flickrMasonry">
        <?php foreach ($FLICKR_PHOTOS as $photo): ?>
            <div class="photo-card" 
                 data-id="<?php echo htmlspecialchars($photo['id']); ?>"
                 data-category="<?php echo htmlspecialchars($photo['category']); ?>"
                 data-title="<?php echo htmlspecialchars($photo['title']); ?>"
                 data-url="<?php echo htmlspecialchars($photo['url']); ?>"
                 data-thumb="<?php echo htmlspecialchars($photo['thumb']); ?>"
                 data-desc="<?php echo htmlspecialchars($photo['desc']); ?>"
                 data-flickr="<?php echo htmlspecialchars($photo['flickr']); ?>"
                 data-camera="<?php echo htmlspecialchars($photo['camera']); ?>"
                 data-date="<?php echo htmlspecialchars($photo['date']); ?>">
                <div class="photo-card-img">
                    <img src="<?php echo htmlspecialchars($photo['thumb']); ?>" alt="<?php echo htmlspecialchars($photo['title']); ?>" loading="lazy">
                    <div class="photo-overlay">
                        <div>
                            <h4><?php echo htmlspecialchars($photo['title']); ?></h4>
                            <p><?php echo htmlspecialchars($photo['desc']); ?></p>
                        </div>
                        <span class="zoom-pill">&oplus; High-Res</span>
                    </div>
                </div>
                <div class="photo-card-footer">
                    <div>
                        <strong><?php echo htmlspecialchars($photo['title']); ?></strong>
                        <span class="meta-sub"><?php echo htmlspecialchars($photo['category']); ?> &middot; <?php echo htmlspecialchars($photo['date']); ?></span>
                    </div>
                    <a href="<?php echo htmlspecialchars($photo['flickr']); ?>" target="_blank" rel="noopener noreferrer" class="link-flickr" title="View on Flickr" onclick="event.stopPropagation();">
                        &nearr;
                    </a>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</section>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
