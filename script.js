/**
 * Yogesh Yadav (heyogeshcode) — Personal Website Script
 * Clean, lightweight, performant interactions
 */

(function() {
    'use strict';

    const root = document.documentElement;
    const scrollProgress = document.getElementById('scrollProgress');
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const navBackdrop = document.getElementById('navBackdrop');
    const backToTop = document.getElementById('backToTop');
    const sections = document.querySelectorAll('.section');
    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    let lastScrollY = window.scrollY;
    let scrollTicking = false;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight * 0.35;
    let glowX = mouseX;
    let glowY = mouseY;
    let glowFrame = null;

    /* -------------------------------------------------------------------------- */
    /* Scroll Updates                                                             */
    /* -------------------------------------------------------------------------- */
    function updateScrollState() {
        const scrollY = window.scrollY;
        const docHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        const scrollPercent = Math.min((scrollY / docHeight) * 100, 100);

        if (scrollProgress) {
            scrollProgress.style.width = scrollPercent + '%';
        }

        if (nav) {
            nav.classList.toggle('scrolled', scrollY > 35);
            nav.classList.toggle('hidden', scrollY > lastScrollY && scrollY > 160 && !navLinks.classList.contains('active'));
        }

        if (backToTop) {
            backToTop.classList.toggle('visible', scrollY > 480);
        }

        lastScrollY = Math.max(scrollY, 0);
        scrollTicking = false;
    }

    function requestScrollUpdate() {
        if (!scrollTicking) {
            window.requestAnimationFrame(updateScrollState);
            scrollTicking = true;
        }
    }

    /* -------------------------------------------------------------------------- */
    /* Mobile Menu                                                                */
    /* -------------------------------------------------------------------------- */
    function closeMenu() {
        if (!navLinks || !navToggle) return;
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
        if (navBackdrop) navBackdrop.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    function openMenu() {
        if (!navLinks || !navToggle) return;
        navLinks.classList.add('active');
        navToggle.classList.add('active');
        if (navBackdrop) navBackdrop.classList.add('active');
        navToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    /* -------------------------------------------------------------------------- */
    /* Ambient Mouse Glow                                                         */
    /* -------------------------------------------------------------------------- */
    function animateGlow() {
        glowX += (mouseX - glowX) * 0.12;
        glowY += (mouseY - glowY) * 0.12;
        root.style.setProperty('--mouse-x', glowX + 'px');
        root.style.setProperty('--mouse-y', glowY + 'px');
        glowFrame = window.requestAnimationFrame(animateGlow);
    }

    /* -------------------------------------------------------------------------- */
    /* Staggered Child Reveal                                                     */
    /* -------------------------------------------------------------------------- */
    function primeRevealChildren() {
        sections.forEach(function(section) {
            const children = section.querySelectorAll('.section-header, .about-card, .tool-item, .distros-section, .terminal-card, .vibe-card, .quote-block');
            children.forEach(function(child, index) {
                child.classList.add('reveal-child');
                child.style.setProperty('--delay', Math.min(index, 10));
            });
        });
    }

    /* -------------------------------------------------------------------------- */
    /* 3D Card Hover & Tilt Light Effect                                          */
    /* -------------------------------------------------------------------------- */
    function setupCardLight() {
        if (!canHover || motionMedia.matches) return;

        const interactiveCards = document.querySelectorAll('.tool-item, .vibe-card, .quote-block, .about-card, .terminal-card, .hero-avatar-frame');
        interactiveCards.forEach(function(card) {
            card.addEventListener('pointermove', function(event) {
                const rect = card.getBoundingClientRect();
                const x = ((event.clientX - rect.left) / rect.width) * 100;
                const y = ((event.clientY - rect.top) / rect.height) * 100;
                const tiltY = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
                const tiltX = (((event.clientY - rect.top) / rect.height - 0.5) * -8);
                card.style.setProperty('--card-x', x + '%');
                card.style.setProperty('--card-y', y + '%');
                card.style.setProperty('--tilt-x', tiltX.toFixed(2) + 'deg');
                card.style.setProperty('--tilt-y', tiltY.toFixed(2) + 'deg');
            });

            card.addEventListener('pointerleave', function() {
                card.style.setProperty('--tilt-x', '0deg');
                card.style.setProperty('--tilt-y', '0deg');
            });
        });
    }

    /* -------------------------------------------------------------------------- */
    /* Magnetic Buttons                                                           */
    /* -------------------------------------------------------------------------- */
    function setupMagneticButtons() {
        if (!canHover || motionMedia.matches) return;

        document.querySelectorAll('.btn').forEach(function(button) {
            button.addEventListener('pointermove', function(event) {
                const rect = button.getBoundingClientRect();
                const x = (event.clientX - rect.left - rect.width / 2) * 0.16;
                const y = (event.clientY - rect.top - rect.height / 2) * 0.2;
                button.style.setProperty('--magnet-x', x.toFixed(2) + 'px');
                button.style.setProperty('--magnet-y', y.toFixed(2) + 'px');
            });

            button.addEventListener('pointerleave', function() {
                button.style.setProperty('--magnet-x', '0px');
                button.style.setProperty('--magnet-y', '0px');
            });
        });
    }

    /* -------------------------------------------------------------------------- */
    /* Event Listeners & Initialization                                           */
    /* -------------------------------------------------------------------------- */
    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    window.addEventListener('resize', requestScrollUpdate);

    if (canHover && !motionMedia.matches) {
        window.addEventListener('pointermove', function(event) {
            mouseX = event.clientX;
            mouseY = event.clientY;
            root.style.setProperty('--glow-opacity', '0.5');
        }, { passive: true });

        document.addEventListener('mouseleave', function() {
            root.style.setProperty('--glow-opacity', '0.22');
        });

        glowFrame = window.requestAnimationFrame(animateGlow);
    }

    if (navToggle) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            if (navLinks && navLinks.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    if (navBackdrop) {
        navBackdrop.addEventListener('click', function() {
            closeMenu();
        });
    }

    if (navLinks) {
        navLinks.querySelectorAll('.nav-link').forEach(function(link) {
            link.addEventListener('click', closeMenu);
        });
    }

    // Smooth scroll for in-page anchors
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: motionMedia.matches ? 'auto' : 'smooth' });
                return;
            }

            const target = document.querySelector(targetId);
            if (!target) return;

            event.preventDefault();
            closeMenu();
            target.scrollIntoView({
                behavior: motionMedia.matches ? 'auto' : 'smooth',
                block: 'start'
            });
        });
    });

    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: motionMedia.matches ? 'auto' : 'smooth'
            });
        });
    }

    // Terminal copy button interaction
    const terminalCopyBtn = document.getElementById('terminalCopyBtn');
    if (terminalCopyBtn) {
        terminalCopyBtn.addEventListener('click', function() {
            const terminalBody = document.querySelector('.terminal-body');
            if (!terminalBody) return;

            const textToCopy = terminalBody.innerText.trim();
            navigator.clipboard.writeText(textToCopy).then(function() {
                const copyTextSpan = terminalCopyBtn.querySelector('.copy-text');
                const originalText = copyTextSpan ? copyTextSpan.textContent : 'Copy';
                terminalCopyBtn.classList.add('copied');
                if (copyTextSpan) copyTextSpan.textContent = 'Copied!';
                setTimeout(function() {
                    terminalCopyBtn.classList.remove('copied');
                    if (copyTextSpan) copyTextSpan.textContent = originalText;
                }, 2000);
            }).catch(function(err) {
                console.error('Failed to copy terminal text: ', err);
            });
        });
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
            closeMenu();
            if (navToggle) navToggle.focus();
        }
    });

    // Close menu when tapping outside of it on touch/click
    document.addEventListener('click', function(event) {
        if (navLinks && navLinks.classList.contains('active')) {
            if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
                closeMenu();
            }
        }
    });

    // Automatically close mobile menu if viewport widens above 780px
    window.addEventListener('resize', function() {
        if (window.innerWidth > 780 && navLinks && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });

    // Initialize effects
    primeRevealChildren();
    setupCardLight();
    setupMagneticButtons();

    // IntersectionObserver for Section Reveal
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.12
    });

    sections.forEach(function(section) {
        sectionObserver.observe(section);
    });

    updateScrollState();

    window.addEventListener('pagehide', function() {
        if (glowFrame) {
            window.cancelAnimationFrame(glowFrame);
        }
    });
})();
