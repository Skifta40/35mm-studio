<?php
require_once __DIR__ . '/includes/data.php';

$pageTitle = 'Contact Us | 35mm Photography Portfolio';
$currentPage = 'contact';

$status = isset($_GET['status']) ? $_GET['status'] : '';
$statusMsg = '';
if ($status === 'success') {
    $statusMsg = 'Thank you! Your inquiry was sent to ' . htmlspecialchars($STUDIO_INFO['email']) . '.';
} elseif ($status === 'error') {
    $statusMsg = 'Please complete all required fields with a valid email address.';
}

require_once __DIR__ . '/includes/header.php';
?>

<div class="page-container page-narrow">
    <div class="page-header text-center">
        <span class="section-eyebrow">Commission &amp; Consultation</span>
        <h1 class="page-title">Contact us</h1>
        <p class="page-desc">Inquire about commercial automotive shoots, landscape print editions, architectural documentation, or private editorial portraiture.</p>
    </div>

    <div class="contact-layout">
        <!-- Contact Form Box -->
        <div class="contact-form-box">
            <?php if ($statusMsg): ?>
                <div class="status-alert <?php echo $status === 'success' ? 'alert-success' : 'alert-error'; ?>">
                    <?php echo $statusMsg; ?>
                </div>
            <?php endif; ?>

            <div id="jsFeedbackBox" class="hidden"></div>

            <form id="contactForm" action="send-email.php" method="POST" class="contact-form">
                <div class="form-group">
                    <label for="contactName">Your Name</label>
                    <input type="text" id="contactName" name="name" placeholder="e.g. Alex Henderson">
                </div>

                <div class="form-group">
                    <div class="label-row">
                        <label for="contactEmail">Your Email Address *</label>
                        <span id="emailValidationHint" class="validation-hint"></span>
                    </div>
                    <input type="email" id="contactEmail" name="email" required placeholder="e.g. client@example.com">
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="contactGenre">Genre / Project</label>
                        <select id="contactGenre" name="genre">
                            <option value="Automotive">Automotive</option>
                            <option value="Land-scape">Land-scape</option>
                            <option value="Architectural">Architectural</option>
                            <option value="Street">Street / Documentary</option>
                            <option value="Fine Art Print">Fine Art Print Order</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="contactSubject">Subject / Title</label>
                        <input type="text" id="contactSubject" name="subject" placeholder="e.g. Commercial Shoot">
                    </div>
                </div>

                <div class="form-group">
                    <label for="contactMessage">Inquiry Description *</label>
                    <textarea id="contactMessage" name="message" rows="5" required placeholder="Describe your project vision, timeline, location, or requested prints..."></textarea>
                </div>

                <div class="form-actions">
                    <button type="reset" class="btn-reset" id="formResetBtn">Clear</button>
                    <button type="submit" class="btn-submit" id="formSubmitBtn">Send Message</button>
                </div>
            </form>
        </div>

        <!-- Studio Details Box -->
        <div class="studio-details-box">
            <h3 class="studio-heading">Studio Details</h3>

            <div class="detail-cards">
                <div class="detail-card">
                    <a href="mailto:<?php echo htmlspecialchars($STUDIO_INFO['email']); ?>" class="detail-link">
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        <div>
                            <span class="detail-sub">Email</span>
                            <span class="detail-val mono"><?php echo htmlspecialchars($STUDIO_INFO['email']); ?></span>
                        </div>
                    </a>
                    <button class="copy-btn" id="copyEmailBtn" data-copy="<?php echo htmlspecialchars($STUDIO_INFO['email']); ?>" title="Copy email address">
                        <span>Copy</span>
                    </button>
                </div>

                <div class="detail-card">
                    <a href="tel:<?php echo htmlspecialchars($STUDIO_INFO['phone']); ?>" class="detail-link">
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        <div>
                            <span class="detail-sub">Phone</span>
                            <span class="detail-val mono"><?php echo htmlspecialchars($STUDIO_INFO['phone']); ?></span>
                        </div>
                    </a>
                </div>

                <div class="detail-card plain">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <div>
                        <span class="detail-sub">Studio Base</span>
                        <span class="detail-val"><?php echo htmlspecialchars($STUDIO_INFO['location']); ?></span>
                    </div>
                </div>
            </div>

            <div class="studio-socials">
                <span class="detail-sub">Live Profiles</span>
                <a href="<?php echo htmlspecialchars($STUDIO_INFO['flickrUrl']); ?>" target="_blank" rel="noopener noreferrer" class="social-link">
                    <span>Flickr Archive (flic.kr/ps/46iTo7)</span>
                    <span>&nearr;</span>
                </a>
            </div>
        </div>
    </div>
</div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
