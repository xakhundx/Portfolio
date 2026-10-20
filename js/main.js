/* ==========================================================================
   main.js — renders all sections from data.js and wires up interactions.
   No external dependencies.
   ========================================================================== */
(function () {
    'use strict';

    const SITE = window.SITE || {};
    const $  = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const esc = (str) => String(str ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

    /* ---------- 1. Render Proof Strip ---------- */
    function renderProof() {
        const grid = $('[data-proof-grid]');
        const items = SITE.proof || [];
        if (!grid || !items.length) return;
        grid.innerHTML = items.map((item) => `
            <div class="proof__item reveal">
                <span class="proof__value">${esc(item.value)}</span>
                <span class="proof__label">${esc(item.label)}</span>
            </div>
        `).join('');
    }

    /* ---------- 2. Render Projects ---------- */
    function renderProjects() {
        const grid = $('[data-projects-grid]');
        const items = SITE.projects || [];
        if (!grid || !items.length) return;

        grid.innerHTML = items.map((p) => {
            const mediaHtml = p.image
                ? `<img class="project__img" src="${esc(p.image)}" alt="${esc(p.imageAlt || p.title)}" loading="lazy" data-optional>`
                : '';
            const glyph = p.glyph || 'AI · DATA';
            const bulletsHtml = (p.bullets || []).map((b) => `<li>${esc(b)}</li>`).join('');
            const tagsHtml = (p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join('');
            const liveBtn = p.liveUrl
                ? `<a class="btn btn--solid btn--sm" href="${esc(p.liveUrl)}" target="_blank" rel="noopener noreferrer">Live App <svg class="icon" aria-hidden="true"><use href="#i-external"/></svg></a>`
                : '';
            const codeBtn = p.codeUrl
                ? `<a class="btn btn--ghost btn--sm" href="${esc(p.codeUrl)}" target="_blank" rel="noopener noreferrer"><svg class="icon" aria-hidden="true"><use href="#i-github"/></svg> Source Code</a>`
                : '';

            return `
                <article class="project-card ${p.featured ? 'project-card--featured' : ''} reveal">
                    <div class="project__media">
                        <div class="project__fallback" aria-hidden="true">
                            <span class="project__glyph">${esc(glyph)}</span>
                            <span class="project__sub">${esc(p.subtitle || '')}</span>
                        </div>
                        ${mediaHtml}
                    </div>
                    <div class="project__body">
                        <div class="project__meta">
                            <span class="project__date">${esc(p.date)}</span>
                            ${p.subtitle ? `<span class="project__badge">${esc(p.subtitle)}</span>` : ''}
                        </div>
                        <h3 class="project__title">${esc(p.title)}</h3>
                        <p class="project__pitch">${esc(p.pitch)}</p>
                        ${p.aiFeature ? `<p class="project__ai"><span>Key System</span> ${esc(p.aiFeature)}</p>` : ''}
                        ${bulletsHtml ? `<ul class="project__bullets">${bulletsHtml}</ul>` : ''}
                        <div class="project__footer">
                            <div class="project__tags">${tagsHtml}</div>
                            ${(liveBtn || codeBtn) ? `<div class="project__actions">${liveBtn}${codeBtn}</div>` : ''}
                        </div>
                    </div>
                </article>
            `;
        }).join('');
    }

    /* ---------- 3. Render Experience, Education & Community ---------- */
    function renderExperience() {
        const grid = $('[data-experience-grid]');
        const items = SITE.experience || [];
        if (grid && items.length) {
            grid.innerHTML = items.map((e) => `
                <article class="exp-card reveal">
                    <div class="exp-card__top">
                        <span class="exp-card__cat">${esc(e.category)}</span>
                        <span class="exp-card__period">${esc(e.period)} · ${esc(e.location)}</span>
                    </div>
                    <div class="exp-card__head">
                        <div>
                            <h3 class="exp-card__role">${esc(e.role)}</h3>
                            <p class="exp-card__org">${esc(e.org)}</p>
                        </div>
                        ${e.badge ? `<span class="exp-card__badge">${esc(e.badge)}</span>` : ''}
                    </div>
                    <ul class="exp-card__bullets">
                        ${(e.bullets || []).map((b) => `<li>${esc(b)}</li>`).join('')}
                    </ul>
                </article>
            `).join('');
        }

        const eduEl = $('[data-education-card]');
        const edu = SITE.education;
        if (eduEl && edu) {
            eduEl.innerHTML = `
                <span class="eyebrow">Education</span>
                <h3 class="edu-card__school">${esc(edu.school)}</h3>
                <p class="edu-card__degree">${esc(edu.degree)}</p>
                <p class="edu-card__meta">${esc(edu.period)} · ${esc(edu.location)}</p>
                <div class="edu-card__group">
                    <span class="edu-card__label">Relevant Coursework</span>
                    <div class="edu-card__tags">
                        ${(edu.coursework || []).map((c) => `<span class="tag">${esc(c)}</span>`).join('')}
                    </div>
                </div>
                <div class="edu-card__group">
                    <span class="edu-card__label">Clubs, Societies &amp; Hackathons</span>
                    <div class="edu-card__tags">
                        ${(edu.societies || []).map((s) => `<span class="tag">${esc(s)}</span>`).join('')}
                    </div>
                </div>
                ${edu.prior ? `<p class="edu-card__prior">Prior: ${esc(edu.prior)}</p>` : ''}
            `;
        }

        const commEl = $('[data-community-card]');
        const comm = SITE.community || [];
        if (commEl && comm.length) {
            commEl.innerHTML = `
                <span class="eyebrow">Volunteer &amp; Community Impact</span>
                <h3 class="edu-card__school">Winnipeg &amp; Karachi</h3>
                <ul class="comm__list">
                    ${comm.map((c) => `
                        <li class="comm__item">
                            <span class="comm__role">${esc(c.role)}</span>
                            <span class="comm__org">${esc(c.org)}</span>
                            <span class="comm__period">${esc(c.period)}</span>
                        </li>
                    `).join('')}
                </ul>
            `;
        }
    }

    /* ---------- 4. Render Periodic Table of Skills, Certifications & Languages ---------- */
    function renderSkills() {
        const grid = $('[data-skills-grid]');
        const inspector = $('[data-skill-inspector]');
        const skills = SITE.skills || [];

        if (grid && skills.length) {
            grid.innerHTML = skills.map((s, idx) => `
                <button
                    type="button"
                    role="listitem"
                    class="ptile ptile--${esc(s.group)} reveal"
                    data-skill-idx="${idx}"
                    aria-label="${esc(s.name)}: ${esc(s.detail || '')}">
                    <span class="ptile__num">${String(idx + 1).padStart(2, '0')}</span>
                    <span class="ptile__sym">${esc(s.sym)}</span>
                    <span class="ptile__name">${esc(s.name)}</span>
                </button>
            `).join('');

            const showDetail = (s, btn) => {
                $$('.ptile.is-active', grid).forEach((el) => el.classList.remove('is-active'));
                if (btn) btn.classList.add('is-active');
                if (inspector && s) {
                    inspector.innerHTML = `<strong>[${esc(s.sym)}] ${esc(s.name)}</strong> — ${esc(s.detail || '')}`;
                }
            };

            $$('.ptile', grid).forEach((btn) => {
                const s = skills[Number(btn.dataset.skillIdx)];
                btn.addEventListener('mouseenter', () => showDetail(s, btn));
                btn.addEventListener('focus', () => showDetail(s, btn));
                btn.addEventListener('click', () => showDetail(s, btn));
            });

            // Initialize inspector with the first tile
            showDetail(skills[0], $('.ptile', grid));
        }

        const certsList = $('[data-certs-list]');
        const certs = SITE.certifications || [];
        if (certsList && certs.length) {
            certsList.innerHTML = certs.map((c) => `
                <li class="creds__item">
                    <div>
                        <span class="creds__name">${esc(c.name)}</span>
                        <span class="creds__org">${esc(c.org)}${c.id ? ` · ID ${esc(c.id)}` : ''}</span>
                    </div>
                    <span class="creds__date">${esc(c.date)}</span>
                </li>
            `).join('');
        }

        const langsList = $('[data-langs-list]');
        const langs = SITE.languages || [];
        if (langsList && langs.length) {
            langsList.innerHTML = langs.map((l) => `
                <li class="langs__item">
                    <span class="langs__name">${esc(l.name)}</span>
                    <span class="langs__level">${esc(l.level)}</span>
                </li>
            `).join('');
        }
    }

    /* ---------- 5. Render Horizontal Journey Timeline ---------- */
    function renderJourney() {
        const track = $('[data-journey-track]');
        const bar = $('[data-journey-bar]');
        const prevBtn = $('[data-journey-prev]');
        const nextBtn = $('[data-journey-next]');
        const items = SITE.journey || [];
        if (!track || !items.length) return;

        track.innerHTML = items.map((j) => `
            <article class="jcard">
                <div class="jcard__top">
                    <span class="jcard__step">${esc(j.step)}</span>
                    <span class="jcard__date">${esc(j.date)}</span>
                </div>
                <h3 class="jcard__title">${esc(j.title)}</h3>
                <p class="jcard__body">${esc(j.body)}</p>
            </article>
        `).join('');

        const updateProgress = () => {
            const max = track.scrollWidth - track.clientWidth;
            const ratio = max > 0 ? Math.min(1, Math.max(0, track.scrollLeft / max)) : 1;
            if (bar) bar.style.transform = `scaleX(${Math.max(0.15, ratio)})`;
            if (prevBtn) prevBtn.disabled = track.scrollLeft <= 4;
            if (nextBtn) nextBtn.disabled = track.scrollLeft >= max - 4;
        };

        const scrollByCard = (dir) => {
            const card = $('.jcard', track);
            const step = card ? card.offsetWidth + 20 : 320;
            track.scrollBy({ left: dir * step, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
        };

        prevBtn && prevBtn.addEventListener('click', () => scrollByCard(-1));
        nextBtn && nextBtn.addEventListener('click', () => scrollByCard(1));
        track.addEventListener('scroll', updateProgress, { passive: true });
        window.addEventListener('resize', updateProgress, { passive: true });
        requestAnimationFrame(updateProgress);
    }

    /* ---------- 6. Render Services ---------- */
    function renderServices() {
        const panel = $('[data-services-panel]');
        const s = SITE.services;
        if (!panel || !s) return;

        const itemsHtml = (s.items || []).map((item) => `
            <div class="services__card">
                <span class="services__tag">${esc(item.tag)}</span>
                <h3 class="services__card-title">${esc(item.title)}</h3>
                <p class="services__card-desc">${esc(item.desc)}</p>
            </div>
        `).join('');

        panel.innerHTML = `
            <div class="services__head">
                <div>
                    <p class="services__eyebrow">${esc(s.eyebrow)}</p>
                    <h2 id="services-title" class="services__title">${esc(s.headline)}</h2>
                    <p class="services__sub">${esc(s.sub)}</p>
                </div>
                <div class="services__cta">
                    <a class="btn btn--inv" data-link="contactForm" href="#">
                        <span>Get in Touch</span>
                        <svg class="icon" aria-hidden="true"><use href="#i-arrow"/></svg>
                    </a>
                </div>
            </div>
            <div class="services__grid">${itemsHtml}</div>
        `;
    }

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
                if (!restartedWithSound) { video.currentTime = 0; restartedWithSound = true; }
                video.play().catch(() => {});
            }
            render();
        };

        const toggle = () => setSound(video.muted || video.paused);

        if (reduceMotion.matches) { video.removeAttribute('autoplay'); video.pause(); }

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
            front.inert = on;
            back.inert = !on;
            if (focus) (on ? unflip : front).focus({ preventScroll: true });
        };
        flip(false);

        front.addEventListener('click', () => flip(true, { focus: true }));
        unflip.addEventListener('click', () => flip(false, { focus: true }));

        back.addEventListener('click', (e) => {
            if (!e.target.closest('a, button')) flip(false);
        });

        card.addEventListener('mouseenter', () => { if (canHover.matches) flip(true); });
        card.addEventListener('mouseleave', () => {
            if (canHover.matches && !card.querySelector(':focus-visible')) flip(false);
        });

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && card.classList.contains('is-flipped')) flip(false, { focus: true });
        });
    }

    /* ---------- Scroll reveal for elements with .reveal ---------- */
    function initReveal() {
        const els = $$('.reveal');
        if (!els.length) return;
        if (!('IntersectionObserver' in window)) {
            els.forEach((el) => el.classList.add('is-visible'));
            return;
        }
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                io.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -8% 0px' });
        els.forEach((el) => io.observe(el));
    }

    renderProof();
    renderProjects();
    renderExperience();
    renderSkills();
    renderJourney();
    renderServices();
    applyLinks();
    initOptionalImages();
    initNav();
    initHeroVideo();
    initIdCard();
    initReveal();
})();
