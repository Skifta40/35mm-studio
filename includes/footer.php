    </main>

    <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-brand">
                <a href="index.php" class="brand-title">35mm</a>
                <p class="brand-sub">Analog Craft · High Resolution Full-Frame Editorial</p>
            </div>

            <div class="footer-contacts">
                <a href="mailto:<?php echo htmlspecialchars($STUDIO_INFO['email']); ?>" class="contact-item">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    <span><?php echo htmlspecialchars($STUDIO_INFO['email']); ?></span>
                </a>

                <a href="tel:<?php echo htmlspecialchars($STUDIO_INFO['phone']); ?>" class="contact-item">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span class="mono"><?php echo htmlspecialchars($STUDIO_INFO['phone']); ?></span>
                </a>

                <a href="<?php echo htmlspecialchars($STUDIO_INFO['flickrUrl']); ?>" target="_blank" rel="noopener noreferrer" class="contact-item">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                    <span>Flickr Stream</span>
                </a>
            </div>

            <div class="footer-nav">
                <a href="index.php">Home</a>
                <a href="projects.php">Projects</a>
                <a href="about.php">About</a>
                <a href="contact.php">Contact</a>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2024&ndash;2026 <?php echo htmlspecialchars($STUDIO_INFO['name']); ?>. Photography by <?php echo htmlspecialchars($STUDIO_INFO['founder']); ?>.</p>
                <button class="back-to-top" id="backToTopBtn" aria-label="Back to top">
                    <span>Back to top &uarr;</span>
                </button>
            </div>
        </div>
    </footer>

    <!-- Fullscreen Lightbox Modal -->
    <div class="lightbox-modal" id="lightboxModal" role="dialog" aria-hidden="true">
        <div class="lightbox-backdrop" id="lightboxBackdrop"></div>
        <div class="lightbox-header">
            <div class="lightbox-title-wrap">
                <span id="lightboxTitle">Photo</span>
                <span class="lightbox-category" id="lightboxCategory">35mm</span>
            </div>
            <div class="lightbox-actions">
                <a href="#" target="_blank" rel="noopener noreferrer" id="lightboxFlickrLink" class="lightbox-btn" title="View on Flickr">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
                <button class="lightbox-btn" id="lightboxZoomBtn" title="Toggle zoom">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                </button>
                <button class="lightbox-btn" id="lightboxCloseBtn" title="Close (Esc)">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
            </div>
        </div>

        <div class="lightbox-content">
            <button class="lightbox-nav-btn prev" id="lightboxPrevBtn" aria-label="Previous photo">&lsaquo;</button>
            <div class="lightbox-img-wrap">
                <img src="" alt="" id="lightboxImg">
            </div>
            <button class="lightbox-nav-btn next" id="lightboxNextBtn" aria-label="Next photo">&rsaquo;</button>
        </div>

        <div class="lightbox-footer">
            <span id="lightboxCounter">1 / 1</span>
            <p id="lightboxDesc" class="lightbox-desc"></p>
        </div>
    </div>

    <!-- Vanilla Javascript -->
    <script src="scripts/main.js"></script>
</body>
</html>
