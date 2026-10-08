/**
 * 35mm Photography Portfolio - Pure Vanilla JavaScript
 * Zero external libraries. 100% Native.
 */

document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
    initHeroScatter();
    initCarousels();
    initFlickrFilters();
    initLightbox();
    initFaqAccordion();
    initContactForm();
    initBackToTop();
});

/* ==========================================================================
   1. Mobile Navigation Drawer
   ========================================================================== */
function initMobileNav() {
    const toggleBtn = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');
    if (!toggleBtn || !mobileNav) return;

    toggleBtn.addEventListener('click', function () {
        mobileNav.classList.toggle('open');
    });

    document.addEventListener('click', function (e) {
        if (!mobileNav.contains(e.target) && !toggleBtn.contains(e.target)) {
            mobileNav.classList.remove('open');
        }
    });
}

/* ==========================================================================
   2. Hero Scattered 35mm Prints & Layout Toggles
   ========================================================================== */
function initHeroScatter() {
    const container = document.getElementById('scatterInner');
    const shuffleBtn = document.getElementById('heroShuffleBtn');
    const gridToggle = document.getElementById('heroGridToggle');
    if (!container) return;

    const cards = container.querySelectorAll('.scatter-card');
    let isGrid = false;
    let seed = 1;

    function applyScatterLayout() {
        cards.forEach((card, i) => {
            card.style.position = 'absolute';
            card.style.display = 'block';

            const col = i % 4;
            const row = Math.floor(i / 4);
            const jitterX = Math.sin(i * 13 + seed) * 35;
            const jitterY = Math.cos(i * 17 + seed) * 22;
            const rot = (Math.sin(i * 7 + seed) * 7).toFixed(1);

            const x = col * 245 + jitterX;
            const y = row * 145 + jitterY;

            card.style.left = x + 'px';
            card.style.top = y + 'px';
            card.style.transform = `rotate(${rot}deg)`;
            card.style.zIndex = i + 1;
        });
    }

    function applyGridLayout() {
        cards.forEach((card, i) => {
            const col = i % 4;
            const row = Math.floor(i / 4);
            card.style.left = (col * 240 + 20) + 'px';
            card.style.top = (row * 140 + 10) + 'px';
            card.style.transform = 'rotate(0deg)';
            card.style.zIndex = 1;
        });
    }

    applyScatterLayout();

    if (shuffleBtn) {
        shuffleBtn.addEventListener('click', function () {
            if (isGrid) {
                isGrid = false;
                gridToggle.querySelector('span').textContent = 'Contact Sheet Grid';
            }
            seed += 1;
            applyScatterLayout();
        });
    }

    if (gridToggle) {
        gridToggle.addEventListener('click', function () {
            isGrid = !isGrid;
            if (isGrid) {
                applyGridLayout();
                gridToggle.querySelector('span').textContent = 'Scattered Prints';
            } else {
                applyScatterLayout();
                gridToggle.querySelector('span').textContent = 'Contact Sheet Grid';
            }
        });
    }
}

/* ==========================================================================
   3. Interactive Carousels (Projects Page: Autoshow & Adriatic)
   ========================================================================== */
function initCarousels() {
    setupCarousel('autoshow');
    setupCarousel('adriatic');
}

function setupCarousel(prefix) {
    const stage = document.getElementById(prefix + 'Stage');
    const mainImg = document.getElementById(prefix + 'MainImg');
    const counter = document.getElementById(prefix + 'Counter');
    const thumbsContainer = document.getElementById(prefix + 'Thumbs');
    const prevBtn = document.getElementById(prefix + 'PrevBtn');
    const nextBtn = document.getElementById(prefix + 'NextBtn');
    const playBtn = document.getElementById(prefix + 'PlayBtn');

    if (!stage || !mainImg || !thumbsContainer) return;

    const thumbs = Array.from(thumbsContainer.querySelectorAll('.thumb-btn'));
    let currentIndex = 0;
    let autoInterval = null;

    function showSlide(index) {
        currentIndex = (index + thumbs.length) % thumbs.length;
        const targetThumb = thumbs[currentIndex];
        const newUrl = targetThumb.getAttribute('data-url');
        const newTitle = targetThumb.getAttribute('data-title');
        const newDesc = targetThumb.getAttribute('data-desc');

        mainImg.src = newUrl;
        mainImg.alt = newTitle || '';
        if (counter) counter.textContent = (currentIndex + 1) + ' / ' + thumbs.length;

        thumbs.forEach(t => t.classList.remove('active'));
        targetThumb.classList.add('active');
        targetThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    thumbs.forEach((thumb, idx) => {
        thumb.addEventListener('click', () => showSlide(idx));
    });

    if (prevBtn) prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

    if (playBtn) {
        playBtn.addEventListener('click', function () {
            if (autoInterval) {
                clearInterval(autoInterval);
                autoInterval = null;
                playBtn.innerHTML = '&#9658;';
                playBtn.title = 'Play Slideshow';
            } else {
                autoInterval = setInterval(() => showSlide(currentIndex + 1), 3000);
                playBtn.innerHTML = '&#10074;&#10074;';
                playBtn.title = 'Pause Slideshow';
            }
        });
    }

    // Touch swipe support for stage
    let touchStartX = 0;
    stage.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    stage.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;
        if (Math.abs(diff) > 40) {
            if (diff > 0) showSlide(currentIndex - 1);
            else showSlide(currentIndex + 1);
        }
    }, { passive: true });
}

/* ==========================================================================
   4. Flickr Filters & Search
   ========================================================================== */
function initFlickrFilters() {
    const tabs = document.querySelectorAll('#flickrFilterTabs .filter-btn');
    const searchInput = document.getElementById('flickrSearchInput');
    const cards = document.querySelectorAll('#flickrMasonry .photo-card');
    if (!cards.length) return;

    let activeFilter = 'All';
    let searchQuery = '';

    function filterCards() {
        cards.forEach(card => {
            const cat = card.getAttribute('data-category');
            const title = (card.getAttribute('data-title') || '').toLowerCase();
            const desc = (card.getAttribute('data-desc') || '').toLowerCase();

            const matchesCategory = (activeFilter === 'All' || cat === activeFilter);
            const matchesSearch = !searchQuery || title.includes(searchQuery) || desc.includes(searchQuery);

            if (matchesCategory && matchesSearch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            activeFilter = this.getAttribute('data-filter');
            filterCards();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', function () {
            searchQuery = this.value.trim().toLowerCase();
            filterCards();
        });
    }
}

/* ==========================================================================
   5. Fullscreen Lightbox Modal
   ========================================================================== */
function initLightbox() {
    const modal = document.getElementById('lightboxModal');
    const backdrop = document.getElementById('lightboxBackdrop');
    const img = document.getElementById('lightboxImg');
    const title = document.getElementById('lightboxTitle');
    const cat = document.getElementById('lightboxCategory');
    const desc = document.getElementById('lightboxDesc');
    const counter = document.getElementById('lightboxCounter');
    const flickrLink = document.getElementById('lightboxFlickrLink');
    const closeBtn = document.getElementById('lightboxCloseBtn');
    const zoomBtn = document.getElementById('lightboxZoomBtn');
    const prevBtn = document.getElementById('lightboxPrevBtn');
    const nextBtn = document.getElementById('lightboxNextBtn');

    if (!modal || !img) return;

    let currentList = [];
    let currentIndex = 0;
    let isZoomed = false;

    function openLightbox(list, index) {
        currentList = list;
        currentIndex = index;
        isZoomed = false;
        img.style.transform = 'scale(1)';
        updateModalContent();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        isZoomed = false;
        img.style.transform = 'scale(1)';
    }

    function updateModalContent() {
        const item = currentList[currentIndex];
        if (!item) return;

        img.src = item.url;
        img.alt = item.title || '';
        title.textContent = item.title || '35mm Print';
        cat.textContent = item.category ? `· ${item.category}` : '';
        desc.textContent = item.desc || item.camera || '';
        counter.textContent = `${currentIndex + 1} / ${currentList.length}`;

        if (item.flickr) {
            flickrLink.href = item.flickr;
            flickrLink.style.display = 'flex';
        } else {
            flickrLink.style.display = 'none';
        }
    }

    function prevItem() {
        if (!currentList.length) return;
        currentIndex = (currentIndex - 1 + currentList.length) % currentList.length;
        isZoomed = false;
        img.style.transform = 'scale(1)';
        updateModalContent();
    }

    function nextItem() {
        if (!currentList.length) return;
        currentIndex = (currentIndex + 1) % currentList.length;
        isZoomed = false;
        img.style.transform = 'scale(1)';
        updateModalContent();
    }

    // Attach click triggers to all photo cards and media items
    document.addEventListener('click', function (e) {
        const trigger = e.target.closest('[data-url]');
        if (!trigger || trigger.closest('.lightbox-modal')) return;

        // Collect all sibling items in same container or all photo cards
        const container = trigger.closest('.photo-masonry, .scatter-inner, .mobile-filmstrip, .genre-list, .carousel-thumbs') || document;
        const allItems = Array.from(container.querySelectorAll('[data-url]'));
        
        const listData = allItems.map(el => ({
            url: el.getAttribute('data-url'),
            title: el.getAttribute('data-title'),
            category: el.getAttribute('data-category'),
            desc: el.getAttribute('data-desc'),
            flickr: el.getAttribute('data-flickr'),
            camera: el.getAttribute('data-camera')
        }));

        const clickedIndex = allItems.indexOf(trigger);
        openLightbox(listData, clickedIndex >= 0 ? clickedIndex : 0);
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (backdrop) backdrop.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', prevItem);
    if (nextBtn) nextBtn.addEventListener('click', nextItem);

    if (zoomBtn) {
        zoomBtn.addEventListener('click', function () {
            isZoomed = !isZoomed;
            img.style.transform = isZoomed ? 'scale(1.7)' : 'scale(1)';
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevItem();
        if (e.key === 'ArrowRight') nextItem();
    });
}

/* ==========================================================================
   6. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
    const accordion = document.getElementById('faqAccordion');
    if (!accordion) return;

    accordion.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', function () {
            const item = this.closest('.faq-item');
            const wasOpen = item.classList.contains('open');

            // Optional: close other open items
            accordion.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

            if (!wasOpen) {
                item.classList.add('open');
            }
        });
    });
}

/* ==========================================================================
   7. Contact Form Handling & Copy Utilities
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const feedbackBox = document.getElementById('jsFeedbackBox');
    const emailInput = document.getElementById('contactEmail');
    const validationHint = document.getElementById('emailValidationHint');
    const copyEmailBtn = document.getElementById('copyEmailBtn');

    if (emailInput && validationHint) {
        emailInput.addEventListener('input', function () {
            const val = this.value.trim();
            const valid = /\S+@\S+\.\S+/.test(val);
            if (!val) {
                validationHint.textContent = '';
            } else if (valid) {
                validationHint.textContent = '✓ Valid format';
                validationHint.style.color = '#10b981';
            } else {
                validationHint.textContent = 'Enter valid email';
                validationHint.style.color = '#f59e0b';
            }
        });
    }

    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', function () {
            const textToCopy = this.getAttribute('data-copy');
            if (!textToCopy) return;

            navigator.clipboard.writeText(textToCopy).then(() => {
                const label = copyEmailBtn.querySelector('span');
                if (label) label.textContent = 'Copied!';
                setTimeout(() => {
                    if (label) label.textContent = 'Copy';
                }, 2000);
            });
        });
    }

    if (form) {
        form.addEventListener('submit', function (e) {
            // Check HTML5 validation
            if (!form.checkValidity()) return;

            // AJAX submission attempt to send-email.php
            e.preventDefault();
            const submitBtn = document.getElementById('formSubmitBtn');
            const origText = submitBtn ? submitBtn.textContent : '';
            if (submitBtn) {
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
            }

            const formData = new FormData(form);
            formData.append('is_ajax', '1');

            fetch('send-email.php', {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: formData
            })
            .then(res => res.json())
            .then(data => {
                if (feedbackBox) {
                    feedbackBox.className = 'status-alert alert-success';
                    feedbackBox.innerHTML = `
                        <strong>Inquiry Prepared!</strong><br>
                        ${data.message || 'Thank you! Your message was sent.'}<br>
                        <div style="margin-top: 10px; display: flex; gap: 8px; flex-wrap: wrap;">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=skifterbytyqi2005@gmail.com&su=${encodeURIComponent(data.subject || '')}&body=${encodeURIComponent(data.body || '')}" target="_blank" class="btn-sm" style="display:inline-block; padding: 4px 10px; background:#fff; color:#000;">Open in Gmail &nearr;</a>
                            <a href="mailto:skifterbytyqi2005@gmail.com?subject=${encodeURIComponent(data.subject || '')}&body=${encodeURIComponent(data.body || '')}" class="btn-sm" style="display:inline-block; padding: 4px 10px; background:#222; color:#fff;">Default Mail App &nearr;</a>
                        </div>
                    `;
                    feedbackBox.classList.remove('hidden');
                }

                // Also trigger native mailto
                if (data.subject && data.body) {
                    const mailto = `mailto:skifterbytyqi2005@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(data.body)}`;
                    window.location.href = mailto;
                }

                form.reset();
            })
            .catch(() => {
                // If fetch fails (e.g. no server backend), fallback to direct form POST
                form.submit();
            })
            .finally(() => {
                if (submitBtn) {
                    submitBtn.textContent = origText;
                    submitBtn.disabled = false;
                }
            });
        });
    }
}

/* ==========================================================================
   8. Back to Top Button
   ========================================================================== */
function initBackToTop() {
    const btn = document.getElementById('backToTopBtn');
    if (!btn) return;

    btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
