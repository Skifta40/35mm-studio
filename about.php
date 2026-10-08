<?php
require_once __DIR__ . '/includes/data.php';

$pageTitle = 'About Us | 35mm Photography Portfolio';
$currentPage = 'about';

require_once __DIR__ . '/includes/header.php';
?>

<div class="page-container page-narrow">
    <div class="page-header text-center">
        <span class="section-eyebrow">The Story &amp; Vision</span>
        <h1 class="page-title">About us</h1>
        <p class="page-desc">Founded in <?php echo htmlspecialchars($STUDIO_INFO['foundedYear']); ?> by <?php echo htmlspecialchars($STUDIO_INFO['founder']); ?>. Dedicated to the enduring art of 35mm optical storytelling.</p>
    </div>

    <!-- Who Are We -->
    <section class="about-card text-center">
        <div class="icon-circle">
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
        </div>
        <h2 class="about-card-title">Who are we?</h2>
        <p class="about-card-text">35mm Production, founded in 2022, began as a small, passionate team of photographers who shared a love for capturing the world through their lenses. Our founder, driven by an unwavering passion for photography, envisioned a company that could capture the beauty and essence of the world around us. Over the years, we have grown and evolved, expanding our services to include various genres such as landscape, automotive, architectural, and street photography. Our dedication to quality and creativity has earned us a reputation for delivering stunning images that resonate with our clients. Today, we continue to explore new techniques and push the boundaries of our craft, always striving to capture the beauty and essence of the world around us.</p>
    </section>

    <!-- Why Us -->
    <section class="about-card text-center">
        <div class="icon-circle">
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
        </div>
        <h2 class="about-card-title">Why us?</h2>
        <p class="about-card-text">35mm Production is a passionate team of photographers who share a love for capturing the world through their lenses. We specialize in various genres such as landscape, automotive, architectural, and street photography. Our dedication to quality and creativity has earned us a reputation for delivering stunning images that resonate with our clients. We continue to explore new techniques and push the boundaries of our craft, always striving to capture the beauty and essence of the world around us.</p>

        <div class="feature-grid text-left">
            <div class="feature-card">
                <h4>35mm Perspective</h4>
                <p>Natural optical compression that mirrors authentic human sight without digital distortion.</p>
            </div>
            <div class="feature-card">
                <h4>Location Agnostic</h4>
                <p>Commissions undertaken throughout the Adriatic Coast, Montenegro, Croatia, and the Balkans.</p>
            </div>
            <div class="feature-card">
                <h4>Archival Quality</h4>
                <p>Delivered in uncompressed master digital RAW files and exhibition fine art prints.</p>
            </div>
        </div>
    </section>

    <!-- FAQ Accordion -->
    <section class="faq-section">
        <div class="text-center">
            <span class="section-eyebrow">Need Clarification?</span>
            <h2 class="faq-title">Frequently Asked Questions</h2>
        </div>

        <div class="faq-accordion" id="faqAccordion">
            <?php foreach ($FAQ_ITEMS as $idx => $item): ?>
                <div class="faq-item <?php echo $idx === 0 ? 'open' : ''; ?>">
                    <button class="faq-question">
                        <span><?php echo htmlspecialchars($item['q']); ?></span>
                        <span class="faq-arrow">&darr;</span>
                    </button>
                    <div class="faq-answer">
                        <p><?php echo htmlspecialchars($item['a']); ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>
</div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
