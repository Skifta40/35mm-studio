<?php
if (!isset($pageTitle)) {
    $pageTitle = '35mm - Photography Portfolio | Skifter Bytyqi';
}
if (!isset($currentPage)) {
    $currentPage = 'home';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($pageTitle); ?></title>
    <meta name="description" content="Editorial 35mm photography portfolio by Skifter Bytyqi. Automotive, landscape, architectural, and street photography.">
    <meta property="og:title" content="<?php echo htmlspecialchars($pageTitle); ?>">
    <meta property="og:description" content="Editorial 35mm photography portfolio by Skifter Bytyqi.">
    <meta property="og:type" content="website">

    <!-- Fonts: Aktura & Poppins from Fontshare -->
    <link rel="preconnect" href="https://api.fontshare.com">
    <link href="https://api.fontshare.com/v2/css?f[]=aktura@400&display=swap" rel="stylesheet">
    <link href="https://api.fontshare.com/v2/css?f[]=poppins@200,300,400,500,600&display=swap" rel="stylesheet">

    <!-- Pure Vanilla Stylesheet -->
    <link rel="stylesheet" href="style/style.css">
</head>
<body>
    <header class="site-header">
        <div class="nav-container">
            <!-- Brand Wordmark -->
            <a href="index.php" class="brand-link">
                <span class="brand-title">35mm</span>
            </a>

            <!-- Desktop Navigation -->
            <nav class="desktop-nav">
                <a href="index.php" class="<?php echo $currentPage === 'home' ? 'active' : ''; ?>">Home</a>
                <a href="projects.php" class="<?php echo $currentPage === 'projects' ? 'active' : ''; ?>">Projects</a>
                <a href="about.php" class="<?php echo $currentPage === 'about' ? 'active' : ''; ?>">About</a>
                <a href="contact.php" class="<?php echo $currentPage === 'contact' ? 'active' : ''; ?>">Contact</a>
            </nav>

            <!-- Header Action / Flickr Stream Link -->
            <div class="header-actions">
                <a href="<?php echo htmlspecialchars($STUDIO_INFO['flickrUrl']); ?>" target="_blank" rel="noopener noreferrer" class="btn-flickr">
                    <svg class="icon-camera" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                    <span>Flickr Stream</span>
                </a>
                <button class="mobile-toggle" id="mobileMenuToggle" aria-label="Toggle navigation menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </button>
            </div>
        </div>

        <!-- Mobile Drawer Menu -->
        <nav class="mobile-nav" id="mobileNav">
            <a href="index.php" class="<?php echo $currentPage === 'home' ? 'active' : ''; ?>">Home</a>
            <a href="projects.php" class="<?php echo $currentPage === 'projects' ? 'active' : ''; ?>">Projects</a>
            <a href="about.php" class="<?php echo $currentPage === 'about' ? 'active' : ''; ?>">About</a>
            <a href="contact.php" class="<?php echo $currentPage === 'contact' ? 'active' : ''; ?>">Contact</a>
            <a href="<?php echo htmlspecialchars($STUDIO_INFO['flickrUrl']); ?>" target="_blank" rel="noopener noreferrer" class="mobile-flickr-link">
                ↗ Flickr Photostream (25 Photos)
            </a>
        </nav>
    </header>
    <main class="site-main">
