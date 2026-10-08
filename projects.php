<?php
require_once __DIR__ . '/includes/data.php';

$pageTitle = 'Our Projects | 35mm Photography Portfolio';
$currentPage = 'projects';

require_once __DIR__ . '/includes/header.php';
?>

<div class="page-container">
    <div class="page-header text-center">
        <span class="section-eyebrow">Curated Portfolios</span>
        <h1 class="page-title">Our Projects</h1>
        <p class="page-desc">Multi-format photo essays exploring speed, coastal architecture, and authentic 35mm street life.</p>
    </div>

    <!-- Project 1: Autoshow -->
    <article class="project-block" id="project-autoshow">
        <div class="project-header text-center">
            <span class="project-badge">PROJECT 01 &middot; Automotive</span>
            <h2 class="project-title">Autoshow</h2>
            <p class="project-subtitle">Precision Engineering &amp; Mechanical Form</p>
        </div>

        <div class="carousel-container" data-carousel="autoshow">
            <div class="carousel-stage" id="autoshowStage">
                <img src="<?php echo htmlspecialchars($AUTOSHOW_PHOTOS[0]['url']); ?>" alt="Autoshow" class="carousel-main-img" id="autoshowMainImg">
                <div class="carousel-stage-overlay">
                    <span class="carousel-counter" id="autoshowCounter">1 / <?php echo count($AUTOSHOW_PHOTOS); ?></span>
                    <span class="zoom-pill">&oplus; Full View</span>
                </div>
            </div>

            <div class="carousel-controls">
                <div class="carousel-thumbs" id="autoshowThumbs">
                    <?php foreach ($AUTOSHOW_PHOTOS as $idx => $photo): ?>
                        <button class="thumb-btn <?php echo $idx === 0 ? 'active' : ''; ?>" 
                                data-index="<?php echo $idx; ?>"
                                data-url="<?php echo htmlspecialchars($photo['url']); ?>"
                                data-title="<?php echo htmlspecialchars($photo['title']); ?>"
                                data-desc="<?php echo htmlspecialchars($photo['desc']); ?>">
                            <img src="<?php echo htmlspecialchars($photo['url']); ?>" alt="" loading="lazy">
                        </button>
                    <?php endforeach; ?>
                </div>

                <div class="carousel-buttons">
                    <button class="btn-icon carousel-play" id="autoshowPlayBtn" title="Play Slideshow">&#9658;</button>
                    <button class="btn-icon carousel-prev" id="autoshowPrevBtn" title="Previous">&lsaquo;</button>
                    <button class="btn-icon carousel-next" id="autoshowNextBtn" title="Next">&rsaquo;</button>
                </div>
            </div>
        </div>

        <div class="project-narrative text-center">
            <p>The AutoShow project captures the essence and excitement of a car show through a series of high-quality photographs. This collection showcases the unique features, designs, and atmosphere of the event, highlighting the variety of cars from classic models to modern supercars. The project includes detailed shots of unique features such as hood ornaments, interiors, and custom modifications, as well as action shots of cars in motion during demonstrations and parades. The vibrant event atmosphere is also captured, with images of the crowd, interactions, and overall vibe of the car show. The final deliverables include a curated photo gallery, a printed photo book, and an online portfolio, all of which beautifully narrate the story of the car show.</p>
            <div class="project-tags">
                <span>#Automotive</span> &middot; <span>#Supercars</span> &middot; <span>#Showcase</span> &middot; <span>#Trackside</span>
            </div>
        </div>
    </article>

    <!-- Project 2: Adriatic -->
    <article class="project-block" id="project-adriatic">
        <div class="project-header text-center">
            <span class="project-badge">PROJECT 02 &middot; Landscape &amp; Architecture</span>
            <h2 class="project-title">Adriatic</h2>
            <p class="project-subtitle">Dubrovnik &amp; Budva Coastal Chronicles</p>
        </div>

        <div class="carousel-container" data-carousel="adriatic">
            <div class="carousel-stage" id="adriaticStage">
                <img src="<?php echo htmlspecialchars($ADRIATIC_PHOTOS[0]['url']); ?>" alt="Adriatic" class="carousel-main-img" id="adriaticMainImg">
                <div class="carousel-stage-overlay">
                    <span class="carousel-counter" id="adriaticCounter">1 / <?php echo count($ADRIATIC_PHOTOS); ?></span>
                    <span class="zoom-pill">&oplus; Full View</span>
                </div>
            </div>

            <div class="carousel-controls">
                <div class="carousel-thumbs" id="adriaticThumbs">
                    <?php foreach ($ADRIATIC_PHOTOS as $idx => $photo): ?>
                        <button class="thumb-btn <?php echo $idx === 0 ? 'active' : ''; ?>" 
                                data-index="<?php echo $idx; ?>"
                                data-url="<?php echo htmlspecialchars($photo['url']); ?>"
                                data-title="<?php echo htmlspecialchars($photo['title']); ?>"
                                data-desc="<?php echo htmlspecialchars($photo['desc']); ?>">
                            <img src="<?php echo htmlspecialchars($photo['url']); ?>" alt="" loading="lazy">
                        </button>
                    <?php endforeach; ?>
                </div>

                <div class="carousel-buttons">
                    <button class="btn-icon carousel-play" id="adriaticPlayBtn" title="Play Slideshow">&#9658;</button>
                    <button class="btn-icon carousel-prev" id="adriaticPrevBtn" title="Previous">&lsaquo;</button>
                    <button class="btn-icon carousel-next" id="adriaticNextBtn" title="Next">&rsaquo;</button>
                </div>
            </div>
        </div>

        <div class="project-narrative text-center">
            <p>The Dubrovnik and Budva Photoshoot Project captures the stunning beauty and rich history of these two coastal cities through a series of high-quality photographs. This collection showcases the unique architecture, vibrant culture, and breathtaking landscapes of Dubrovnik, Croatia, and Budva, Montenegro. The project includes detailed shots of architectural elements, street art, and traditional features, as well as scenic views of the Adriatic Sea and panoramic cityscapes. The vibrant local culture is also captured, with images of street markets, local festivals, and everyday life in both cities. The final deliverables include a curated photo gallery, a printed photo book, and an online portfolio, all of which beautifully narrate the story of Dubrovnik and Budva.</p>
            <div class="project-tags">
                <span>#Adriatic</span> &middot; <span>#Croatia</span> &middot; <span>#Montenegro</span> &middot; <span>#Coastline</span> &middot; <span>#StoneArchitecture</span>
            </div>
        </div>
    </article>

    <!-- Project 3: Flickr 35mm Photostream Series -->
    <article class="project-block" id="project-flickr">
        <div class="project-header text-center">
            <span class="project-badge">PROJECT 03 &middot; Street, Portraits &amp; Nature</span>
            <h2 class="project-title">35mm Archive</h2>
            <p class="project-subtitle">Complete Photostream (25 Photographs from flic.kr/ps/46iTo7)</p>
        </div>

        <div class="photo-masonry">
            <?php foreach ($FLICKR_PHOTOS as $photo): ?>
                <div class="photo-card"
                     data-id="<?php echo htmlspecialchars($photo['id']); ?>"
                     data-category="<?php echo htmlspecialchars($photo['category']); ?>"
                     data-title="<?php echo htmlspecialchars($photo['title']); ?>"
                     data-url="<?php echo htmlspecialchars($photo['url']); ?>"
                     data-thumb="<?php echo htmlspecialchars($photo['thumb']); ?>"
                     data-desc="<?php echo htmlspecialchars($photo['desc']); ?>"
                     data-flickr="<?php echo htmlspecialchars($photo['flickr']); ?>"
                     data-camera="<?php echo htmlspecialchars($photo['camera']); ?>">
                    <div class="photo-card-img">
                        <img src="<?php echo htmlspecialchars($photo['thumb']); ?>" alt="<?php echo htmlspecialchars($photo['title']); ?>" loading="lazy">
                        <div class="photo-overlay">
                            <div>
                                <h4><?php echo htmlspecialchars($photo['title']); ?></h4>
                                <p><?php echo htmlspecialchars($photo['desc']); ?></p>
                            </div>
                            <span class="zoom-pill">&oplus; Inspect</span>
                        </div>
                    </div>
                    <div class="photo-card-footer">
                        <div>
                            <strong><?php echo htmlspecialchars($photo['title']); ?></strong>
                            <span class="meta-sub"><?php echo htmlspecialchars($photo['category']); ?> &middot; <?php echo htmlspecialchars($photo['date']); ?></span>
                        </div>
                        <a href="<?php echo htmlspecialchars($photo['flickr']); ?>" target="_blank" rel="noopener noreferrer" class="link-flickr" onclick="event.stopPropagation();">&nearr;</a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </article>
</div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
