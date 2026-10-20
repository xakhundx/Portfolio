/* ==========================================================================
   main.js — fills the page from data.js and wires up interactions.
   No dependencies. Loaded as a classic script so it also works from file://.
   ========================================================================== */
(function () {
    'use strict';

    const SITE = window.SITE || {};
    const $  = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    /* ---------- Links: every [data-link="key"] gets its href from SITE.links ---------- */
    function applyLinks() {
        const links = SITE.links || {};
        $$('[data-link]').forEach((el) => {
            const url = links[el.dataset.link];
            if (!url) { el.hidden = true; return; }
            el.href = url;
            if (/^https?:/i.test(url)) {
                el.target = '_blank';
                el.rel = 'noopener noreferrer';
            }
        });
    }

    /* ---------- Optional images: hide if the file isn't there yet, revealing the fallback ---------- */
    function initOptionalImages() {
        $$('img[data-optional]').forEach((img) => {
            const hide = () => { img.hidden = true; };
            if (img.complete && img.naturalWidth === 0) hide();
            else img.addEventListener('error', hide, { once: true });
        });
    }

    /* ---------- Nav: hairline border once the page scrolls ---------- */
    function initNav() {
        const nav = $('.nav');
        if (!nav) return;
        const update = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
        update();
        window.addEventListener('scroll', update, { passive: true });
    }

    /* ---------- Hero video: muted autoplay loop, tap for sound ---------- */
    function initHeroVideo() {
        const fig = $('[data-hero-media]');
        const video = fig && $('video', fig);
        if (!video) return;

        const btn = $('.media__sound', fig);
        const label = btn && $('.media__sound-label', btn);
        let restartedWithSound = false;

        const render = () => {
            if (!btn) return;
            const soundOn = !video.muted && !video.paused;
            btn.setAttribute('aria-pressed', String(soundOn));
            label.textContent = soundOn ? 'Sound on' : (video.paused ? 'Play intro' : 'Tap for sound');
        };

        const setSound = (on) => {
            video.muted = !on;
            if (on) {
                // First unmute restarts the clip so people hear the intro from the top
                if (!restartedWithSound) { video.currentTime = 0; restartedWithSound = true; }
                video.play().catch(() => {});
            }
            render();
        };

        const toggle = () => setSound(video.muted || video.paused);

        // Respect reduced motion: no autoplay, the button becomes "Play intro"
        if (reduceMotion.matches) { video.removeAttribute('autoplay'); video.pause(); }

        // Only reveal the video (and its button) once a real frame exists
        const ready = () => {
            fig.classList.add('has-video');
            if (btn) btn.hidden = false;
            render();
        };
        if (video.readyState >= 2) ready();
        else video.addEventListener('loadeddata', ready, { once: true });

        btn && btn.addEventListener('click', toggle);
        video.addEventListener('click', toggle);
        video.addEventListener('play', render);
        video.addEventListener('pause', render);

        // Save battery: pause the muted loop while it's off-screen
        if ('IntersectionObserver' in window) {
            new IntersectionObserver(([entry]) => {
                if (!fig.classList.contains('has-video') || !video.muted) return;
                if (entry.isIntersecting && !reduceMotion.matches) video.play().catch(() => {});
                else if (!entry.isIntersecting) video.pause();
            }, { threshold: 0.15 }).observe(fig);
        }
    }

    /* ---------- ID card: hover (mouse), tap (touch), Enter/Space (keyboard), Esc ---------- */
    function initIdCard() {
        const card = $('[data-idcard]');
        if (!card) return;

        const front = $('.idcard__front', card);
        const back = $('.idcard__back', card);
        const unflip = $('[data-unflip]', card);
        const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');

        const flip = (on, { focus = false } = {}) => {
            card.classList.toggle('is-flipped', on);
            // Keep the hidden face out of the tab order and the accessibility tree
            front.inert = on;
            back.inert = !on;
            if (focus) (on ? unflip : front).focus({ preventScroll: true });
        };
        flip(false);

        front.addEventListener('click', () => flip(true, { focus: true }));
        unflip.addEventListener('click', () => flip(false, { focus: true }));

        // Tapping empty space on the back also flips it back (links still work)
        back.addEventListener('click', (e) => {
            if (!e.target.closest('a, button')) flip(false);
        });

        // Hover is bound to the static wrapper, not the rotating face, so it never flickers
        card.addEventListener('mouseenter', () => { if (canHover.matches) flip(true); });
        card.addEventListener('mouseleave', () => {
            if (canHover.matches && !card.querySelector(':focus-visible')) flip(false);
        });

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && card.classList.contains('is-flipped')) flip(false, { focus: true });
        });
    }

    /* ---------- Scroll reveal for elements with .reveal (used by later sections) ---------- */
    function initReveal() {
        const els = $$('.reveal');
        if (!els.length) return;
        if (!('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add('is-visible')); return; }
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                io.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -10% 0px' });
        els.forEach((el) => io.observe(el));
    }

    applyLinks();
    initOptionalImages();
    initNav();
    initHeroVideo();
    initIdCard();
    initReveal();
})();
