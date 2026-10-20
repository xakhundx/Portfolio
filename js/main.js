/* ==========================================================================
   main.js — renders all sections from data.js and wires up:
   - Liquid-metal water-fill preloader (Preloader)
   - Interactive ShaderGradient + 3D Constellation background canvas
   - Apple Liquid-Glass cursor refraction & 3D Hero Stage tilt
   - Hero Presentation Deck + Video / Live Voice Briefing controller
   - 3D Lanyard ID card flip
   - 30-element 3D Flipping Periodic Table + Category Filters + Flip-All
   - 3D Flipping Credential Verification Cards (System Badges)
   - Scroll-drawn SVG path on Experience + Horizontal Journey Timeline
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

    /* ---------- 0. Liquid-Metal Water-Fill Preloader ---------- */
    function initPreloader() {
        const preloader = $('[data-preloader]');
        if (!preloader) return;

        const pctEl = $('[data-preloader-pct]', preloader);
        const waveEl = $('[data-preloader-wave]', preloader);
        let dismissed = false;

        const finish = () => {
            if (dismissed) return;
            dismissed = true;
            preloader.classList.add('is-done');
            document.body.classList.add('is-loaded');
            setTimeout(() => {
                preloader.hidden = true;
            }, 650);
        };

        preloader.addEventListener('click', finish);

        if (reduceMotion.matches) {
            finish();
            return;
        }

        const duration = 850;
        const start = performance.now();

        const tick = (now) => {
            if (dismissed) return;
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            const pct = Math.round(eased * 100);
            if (pctEl) pctEl.textContent = `${String(pct).padStart(2, '0')}%`;
            if (waveEl) {
                const y = 135 - eased * 130;
                const xShift = -(now * 0.12) % 280;
                waveEl.setAttribute('transform', `translate(${xShift.toFixed(1)}, ${y.toFixed(1)})`);
            }
            if (t < 1) {
                requestAnimationFrame(tick);
            } else {
                setTimeout(finish, 120);
            }
        };

        requestAnimationFrame(tick);
    }

    /* ---------- 1. Render Proof Strip ---------- */
    function renderProof() {
        const grid = $('[data-proof-grid]');
        const items = SITE.proof || [];
        if (!grid || !items.length) return;
        grid.innerHTML = items.map((item) => `
            <div class="proof__item glass-surface reveal">
                <span class="proof__value">${esc(item.value)}</span>
                <span class="proof__label">${esc(item.label)}</span>
            </div>
        `).join('');
    }

    /* ---------- 2. Render Projects + Upcoming Lab Builds ---------- */
    function renderProjects() {
        const grid = $('[data-projects-grid]');
        const items = SITE.projects || [];
        if (grid && items.length) {
            grid.innerHTML = items.map((p, idx) => {
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
                    ? `<a class="btn btn--ghost btn--sm glass-pill" href="${esc(p.codeUrl)}" target="_blank" rel="noopener noreferrer"><svg class="icon" aria-hidden="true"><use href="#i-github"/></svg> Source Code</a>`
                    : '';

                return `
                    <article class="project-card glass-card ${p.featured ? 'project-card--featured' : ''} reveal">
                        <div class="project__media">
                            <div class="project__fallback" aria-hidden="true">
                                <span class="project__index">BUILD // 0${idx + 1}</span>
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
                            ${p.aiFeature ? `<p class="project__ai"><span>Architecture</span> ${esc(p.aiFeature)}</p>` : ''}
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

        const upGrid = $('[data-upcoming-grid]');
        const upcoming = SITE.upcomingProjects || [];
        if (upGrid && upcoming.length) {
            upGrid.innerHTML = upcoming.map((u) => `
                <article class="lab-card glass-card">
                    <div class="lab-card__top">
                        <span class="lab-card__slot">${esc(u.slot)}</span>
                        <span class="lab-card__status"><span class="lab-card__dot"></span>${esc(u.status)}</span>
                    </div>
                    <h4 class="lab-card__title">${esc(u.title)}</h4>
                    <p class="lab-card__desc">${esc(u.desc)}</p>
                </article>
            `).join('');
        }
    }

    /* ---------- 3. Render Experience, Education & Community ---------- */
    function renderExperience() {
        const grid = $('[data-experience-grid]');
        const items = SITE.experience || [];
        if (grid && items.length) {
            grid.innerHTML = items.map((e, i) => `
                <article class="exp-card glass-card reveal">
                    <span class="exp-card__node" aria-hidden="true">0${i + 1}</span>
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
                <span class="eyebrow">Academic Foundation</span>
                <h3 class="edu-card__school">${esc(edu.school)}</h3>
                <p class="edu-card__degree">${esc(edu.degree)}</p>
                <p class="edu-card__meta">${esc(edu.period)} · ${esc(edu.location)}</p>
                <div class="edu-card__group">
                    <span class="edu-card__label">Quantitative Coursework</span>
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
                ${edu.prior ? `<p class="edu-card__prior">Prior Education: ${esc(edu.prior)}</p>` : ''}
            `;
        }

        const commEl = $('[data-community-card]');
        const comm = SITE.community || [];
        if (commEl && comm.length) {
            commEl.innerHTML = `
                <span class="eyebrow">Volunteer &amp; Civic Impact</span>
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

    /* ---------- 4. Render 3D Flipping Periodic Table of Skills, Flipping Certifications & Languages ---------- */
    function renderSkills() {
        const grid = $('[data-skills-grid]');
        const inspector = $('[data-skill-inspector]');
        const filterWrap = $('[data-skill-filters]');
        const flipAllBtn = $('[data-flip-all-skills]');
        const skills = SITE.skills || [];

        if (grid && skills.length) {
            grid.innerHTML = skills.map((s, idx) => `
                <button
                    type="button"
                    role="listitem"
                    class="ptile ptile--${esc(s.group)} reveal"
                    data-skill-idx="${idx}"
                    data-skill-group="${esc(s.group)}"
                    aria-label="${esc(s.name)} (${esc(s.groupLabel || s.group)}): ${esc(s.detail || '')}">
                    <span class="ptile__inner">
                        <span class="ptile__face ptile__front">
                            <span class="ptile__top">
                                <span class="ptile__num">${String(idx + 1).padStart(2, '0')}</span>
                                <span class="ptile__flip-icon" aria-hidden="true">↻</span>
                            </span>
                            <span class="ptile__sym">${esc(s.sym)}</span>
                            <span class="ptile__name">${esc(s.name)}</span>
                        </span>
                        <span class="ptile__face ptile__back">
                            <span class="ptile__back-head">
                                <span class="ptile__back-sym">${esc(s.sym)}</span>
                                <span class="ptile__back-cat">${esc(s.groupLabel || s.group)}</span>
                            </span>
                            <span class="ptile__back-detail">${esc(s.detail || '')}</span>
                        </span>
                    </span>
                </button>
            `).join('');

            const showDetail = (s, btn) => {
                $$('.ptile.is-active', grid).forEach((el) => el.classList.remove('is-active'));
                if (btn) btn.classList.add('is-active');
                if (inspector && s) {
                    inspector.innerHTML = `
                        <span class="inspector__badge">[${esc(s.sym)}] ELEMENT #${String(skills.indexOf(s) + 1).padStart(2, '0')}</span>
                        <strong>${esc(s.name)}</strong>
                        <span class="inspector__sep">·</span>
                        <span>${esc(s.detail || '')}</span>
                    `;
                }
            };

            $$('.ptile', grid).forEach((btn) => {
                const s = skills[Number(btn.dataset.skillIdx)];
                btn.addEventListener('mouseenter', () => showDetail(s, btn));
                btn.addEventListener('focus', () => showDetail(s, btn));
                btn.addEventListener('click', () => {
                    btn.classList.toggle('is-flipped');
                    showDetail(s, btn);
                });
            });

            // Category filter tabs
            if (filterWrap) {
                $$('[data-filter]', filterWrap).forEach((tab) => {
                    tab.addEventListener('click', () => {
                        const target = tab.dataset.filter;
                        $$('[data-filter]', filterWrap).forEach((t) => {
                            const active = t === tab;
                            t.classList.toggle('is-active', active);
                            t.setAttribute('aria-selected', String(active));
                        });
                        $$('.ptile', grid).forEach((tile) => {
                            const match = target === 'all' || tile.dataset.skillGroup === target;
                            tile.classList.toggle('is-dimmed', !match);
                        });
                    });
                });
            }

            // Flip All 30 Tiles button
            if (flipAllBtn) {
                let allFlipped = false;
                flipAllBtn.addEventListener('click', () => {
                    allFlipped = !allFlipped;
                    flipAllBtn.setAttribute('aria-pressed', String(allFlipped));
                    flipAllBtn.classList.toggle('is-active', allFlipped);
                    flipAllBtn.querySelector('span').textContent = allFlipped ? 'Reset All 30 Tiles ↺' : 'Flip All 30 Tiles ↻';
                    $$('.ptile', grid).forEach((tile) => {
                        tile.classList.toggle('is-flipped', allFlipped);
                    });
                });
            }

            // Initialize inspector with the first tile
            showDetail(skills[0], $('.ptile', grid));
        }

        // 3D Flipping Certification Cards (inspired by Sushmita's System Badges)
        const certsList = $('[data-certs-list]');
        const certs = SITE.certifications || [];
        if (certsList && certs.length) {
            certsList.innerHTML = certs.map((c, idx) => `
                <button type="button" class="cert-card" data-cert-flip aria-label="${esc(c.name)} — ${esc(c.org)}. Click or hover to flip and verify credential.">
                    <span class="cert-card__inner">
                        <span class="cert-card__face cert-card__front">
                            <span class="cert-card__top">
                                <span class="cert-card__sys">${esc(c.sysId || `CERT // 0${idx + 1}`)}</span>
                                <span class="cert-card__date">${esc(c.date)}</span>
                            </span>
                            <span class="cert-card__name">${esc(c.name)}</span>
                            <span class="cert-card__bottom">
                                <span class="cert-card__org">${esc(c.org)}</span>
                                <span class="cert-card__flip-hint">Verify ↻</span>
                            </span>
                        </span>
                        <span class="cert-card__face cert-card__back">
                            <span class="cert-card__top">
                                <span class="cert-card__verified"><svg class="icon" aria-hidden="true"><use href="#i-check"/></svg> VERIFIED CREDENTIAL</span>
                                <span class="cert-card__id">ID: ${esc(c.id || 'VERIFIED')}</span>
                            </span>
                            <span class="cert-card__scope">${esc(c.scope || c.name)}</span>
                            <span class="cert-card__bottom">
                                <span class="cert-card__org">${esc(c.org)} · ${esc(c.date)}</span>
                                <span class="cert-card__flip-hint">↺ Back</span>
                            </span>
                        </span>
                    </span>
                </button>
            `).join('');

            $$('[data-cert-flip]', certsList).forEach((card) => {
                card.addEventListener('click', () => card.classList.toggle('is-flipped'));
            });
        }

        const langsList = $('[data-langs-list]');
        const langs = SITE.languages || [];
        if (langsList && langs.length) {
            langsList.innerHTML = langs.map((l) => `
                <li class="langs__item">
                    <div class="langs__top">
                        <span class="langs__name">${esc(l.name)}</span>
                        <span class="langs__pct">${esc(l.pct || 80)}%</span>
                    </div>
                    <span class="langs__level">${esc(l.level)}</span>
                    <span class="langs__bar" aria-hidden="true"><span class="langs__fill" style="width:${esc(l.pct || 80)}%"></span></span>
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
            <article class="jcard glass-card">
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
            if (bar) bar.style.transform = `scaleX(${Math.max(0.16, ratio)})`;
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

    /* ---------- 6. Render Venture Studio & Services ---------- */
    function renderServices() {
        const panel = $('[data-services-panel]');
        const s = SITE.services;
        if (!panel || !s) return;

        const itemsHtml = (s.items || []).map((item) => {
            const delivHtml = (item.deliverables || []).map((d) => `
                <li><svg class="icon" aria-hidden="true"><use href="#i-check"/></svg><span>${esc(d)}</span></li>
            `).join('');
            return `
                <div class="services__card">
                    <span class="services__tag">${esc(item.tag)}</span>
                    <h3 class="services__card-title">${esc(item.title)}</h3>
                    <p class="services__card-desc">${esc(item.desc)}</p>
                    ${delivHtml ? `<ul class="services__deliv">${delivHtml}</ul>` : ''}
                </div>
            `;
        }).join('');

        panel.innerHTML = `
            <div class="services__head">
                <div>
                    <p class="services__eyebrow">${esc(s.eyebrow)}</p>
                    <h2 id="services-title" class="services__title">${esc(s.headline)}</h2>
                    <p class="services__sub">${esc(s.sub)}</p>
                </div>
                <div class="services__cta">
                    <a class="btn btn--inv" data-link="contactForm" href="#">
                        <span>Start a Conversation</span>
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

    /* ---------- Hero Presentation Stage + Video / Live Briefing ---------- */
    function initHeroStage() {
        const fig = $('[data-hero-media]');
        if (!fig) return;

        const video = $('video', fig);
        const audioBtn = $('[data-stage-audio-btn]', fig);
        const audioLabel = $('[data-stage-audio-label]', fig);
        const modeLabel = $('[data-stage-mode-label]', fig);
        const dotsWrap = $('[data-slide-dots]', fig);
        const deckBtn = $('[data-slide-next]', fig);
        const codeEl = $('[data-slide-code]', fig);
        const titleEl = $('[data-slide-title]', fig);
        const metricEl = $('[data-slide-metric]', fig);
        const briefingBox = $('[data-briefing-box]', fig);
        const briefingText = $('[data-briefing-text]', fig);

        const slides = SITE.heroSlides || [];
        let activeSlide = 0;
        let hasVideoFile = false;
        let briefingActive = false;
        let briefingTimer = null;

        const briefingLines = [
            "Hey, I'm Ammar — I turn data into decisions and my thoughts into actions.",
            "I serve at the Government of Manitoba in Housing, Addictions & Homelessness (NPN '26 Conference Nominee) while completing my final year in Economics & Statistics at the University of Manitoba.",
            "I built Focus Arena — a live 3D AI Pomodoro workspace where signing in with Gmail and typing any interest creates a custom 3D world and AI mentor.",
            "From 24-hour wholesale electricity price forecasting in XGBoost to executive Power BI dashboards and small-business AI automations — scroll down to explore everything I've shipped."
        ];

        const setSlide = (idx) => {
            if (!slides.length) return;
            activeSlide = (idx + slides.length) % slides.length;
            const s = slides[activeSlide];
            if (codeEl) codeEl.textContent = s.code;
            if (titleEl) titleEl.textContent = s.title;
            if (metricEl) metricEl.textContent = `${s.metric} · Tap to cycle →`;
            if (dotsWrap) {
                $$('.media__slide-dot', dotsWrap).forEach((d, i) => {
                    d.classList.toggle('is-active', i === activeSlide);
                    d.setAttribute('aria-selected', String(i === activeSlide));
                });
            }
        };

        if (dotsWrap && slides.length) {
            dotsWrap.innerHTML = slides.map((s, i) => `
                <button type="button" class="media__slide-dot ${i === 0 ? 'is-active' : ''}" role="tab" aria-selected="${i === 0}" aria-label="Slide ${i + 1}: ${esc(s.title)}" data-slide-idx="${i}"></button>
            `).join('');
            $$('.media__slide-dot', dotsWrap).forEach((dot) => {
                dot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    setSlide(Number(dot.dataset.slideIdx));
                });
            });
        }

        deckBtn && deckBtn.addEventListener('click', () => setSlide(activeSlide + 1));

        // Auto-advance presentation deck every 4.5s
        if (!reduceMotion.matches && slides.length > 1) {
            setInterval(() => {
                if (!document.hidden && !briefingActive) setSlide(activeSlide + 1);
            }, 4500);
        }

        // Video detection (automatically activates when assets/hero.mp4 is dropped in)
        if (video) {
            const onVideoReady = () => {
                hasVideoFile = true;
                fig.classList.add('has-video');
                if (modeLabel) modeLabel.textContent = 'LIVE REEL // WPG';
                if (audioLabel) audioLabel.textContent = 'Unmute Reel';
                if (!reduceMotion.matches) video.play().catch(() => {});
            };
            if (video.readyState >= 2) onVideoReady();
            else video.addEventListener('loadeddata', onVideoReady, { once: true });
        }

        const stopBriefing = () => {
            briefingActive = false;
            if (briefingTimer) { clearInterval(briefingTimer); briefingTimer = null; }
            if ('speechSynthesis' in window) window.speechSynthesis.cancel();
            if (briefingBox) briefingBox.hidden = true;
            fig.classList.remove('is-briefing');
            if (audioBtn) audioBtn.setAttribute('aria-pressed', 'false');
            if (audioLabel) audioLabel.textContent = hasVideoFile ? 'Unmute Reel' : 'Live Intro';
        };

        const startBriefing = () => {
            briefingActive = true;
            fig.classList.add('is-briefing');
            if (briefingBox) briefingBox.hidden = false;
            if (audioBtn) audioBtn.setAttribute('aria-pressed', 'true');
            if (audioLabel) audioLabel.textContent = 'Stop Intro';

            let lineIdx = 0;
            const showLine = (i) => {
                if (briefingText) briefingText.textContent = `"${briefingLines[i]}"`;
                setSlide(i % slides.length);
            };
            showLine(0);

            if ('speechSynthesis' in window) {
                try {
                    window.speechSynthesis.cancel();
                    const utter = new SpeechSynthesisUtterance(briefingLines.join(' '));
                    utter.rate = 1.03;
                    utter.pitch = 1.0;
                    utter.onend = () => stopBriefing();
                    window.speechSynthesis.speak(utter);
                } catch (_) {}
            }

            briefingTimer = setInterval(() => {
                lineIdx++;
                if (lineIdx >= briefingLines.length) {
                    stopBriefing();
                } else {
                    showLine(lineIdx);
                }
            }, 4200);
        };

        if (audioBtn) {
            audioBtn.addEventListener('click', () => {
                if (hasVideoFile && video) {
                    const willUnmute = video.muted || video.paused;
                    video.muted = !willUnmute;
                    if (willUnmute) {
                        video.currentTime = 0;
                        video.play().catch(() => {});
                    }
                    audioBtn.setAttribute('aria-pressed', String(willUnmute));
                    if (audioLabel) audioLabel.textContent = willUnmute ? 'Mute Reel' : 'Unmute Reel';
                } else {
                    if (briefingActive) stopBriefing();
                    else startBriefing();
                }
            });
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

    /* ---------- Apple Liquid-Glass Cursor Spotlight & 3D Hero Tilt ---------- */
    function initLiquidGlass() {
        const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');
        if (!canHover.matches) return;

        // Track radial spotlight on all glass cards
        document.addEventListener('pointermove', (e) => {
            const target = e.target.closest('.glass-card, .ptile, .cert-card');
            if (!target) return;
            const rect = target.getBoundingClientRect();
            const mx = ((e.clientX - rect.left) / rect.width) * 100;
            const my = ((e.clientY - rect.top) / rect.height) * 100;
            target.style.setProperty('--mx', `${mx.toFixed(1)}%`);
            target.style.setProperty('--my', `${my.toFixed(1)}%`);
        }, { passive: true });

        // 3D Tilt on Hero Stage
        const tiltCard = $('[data-tilt-card]');
        if (tiltCard && !reduceMotion.matches) {
            tiltCard.addEventListener('pointermove', (e) => {
                const r = tiltCard.getBoundingClientRect();
                const nx = (e.clientX - r.left) / r.width - 0.5;
                const ny = (e.clientY - r.top) / r.height - 0.5;
                tiltCard.style.setProperty('--rx', `${(-ny * 7).toFixed(2)}deg`);
                tiltCard.style.setProperty('--ry', `${(nx * 7).toFixed(2)}deg`);
            }, { passive: true });

            tiltCard.addEventListener('pointerleave', () => {
                tiltCard.style.setProperty('--rx', '0deg');
                tiltCard.style.setProperty('--ry', '0deg');
            });
        }
    }

    /* ---------- Scroll-Drawn SVG Dashed Line on Experience ---------- */
    function initExpScrollLine() {
        const svg = $('[data-exp-svg]');
        const draw = $('[data-exp-draw]');
        const wrap = $('.exp__timeline-wrap');
        if (!svg || !draw || !wrap) return;

        const update = () => {
            const r = wrap.getBoundingClientRect();
            const vh = window.innerHeight;
            const progress = Math.min(1, Math.max(0, (vh * 0.65 - r.top) / Math.max(1, r.height)));
            const offset = 1000 * (1 - progress);
            draw.style.strokeDashoffset = String(offset.toFixed(1));
        };

        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update, { passive: true });
    }

    /* ---------- Interactive ShaderGradient + 3D Constellation Canvas ---------- */
    function initShaderCanvas() {
        const canvas = $('[data-bg-canvas]');
        const toggleBtn = $('[data-fx-toggle]');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let dpr = Math.min(window.devicePixelRatio || 1, 2);
        let fxEnabled = !reduceMotion.matches;
        let rafId = null;
        let pointerX = 0.5;
        let pointerY = 0.35;
        let targetX = 0.5;
        let targetY = 0.35;

        // 3D Constellation nodes (inspired by react-three-fiber / Three.js particle fields)
        const NODE_COUNT = 54;
        const nodes = Array.from({ length: NODE_COUNT }, (_, i) => ({
            x: (Math.sin(i * 12.9898) * 43758.5453) % 1,
            y: (Math.cos(i * 78.233) * 19341.123) % 1,
            z: 0.25 + ((i * 0.6180339) % 0.75),
            vx: ((i % 2 === 0 ? 1 : -1) * (0.00018 + (i % 7) * 0.00004)),
            vy: ((i % 3 === 0 ? 1 : -1) * (0.00015 + (i % 5) * 0.00003)),
            r: 1.1 + (i % 3) * 0.65,
        })).map((n) => ({ ...n, x: Math.abs(n.x), y: Math.abs(n.y) }));

        const resize = () => {
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        resize();
        window.addEventListener('resize', resize, { passive: true });

        window.addEventListener('pointermove', (e) => {
            targetX = e.clientX / Math.max(1, width);
            targetY = e.clientY / Math.max(1, height);
        }, { passive: true });

        const drawFrame = (now) => {
            const t = now * 0.00045;
            pointerX += (targetX - pointerX) * 0.06;
            pointerY += (targetY - pointerY) * 0.06;

            ctx.clearRect(0, 0, width, height);

            // 1. ShaderGradient-style moving liquid metallic aurora blobs
            const blobs = [
                {
                    x: width * (0.25 + 0.18 * Math.cos(t * 1.1) + (pointerX - 0.5) * 0.12),
                    y: height * (0.28 + 0.16 * Math.sin(t * 0.9) + (pointerY - 0.5) * 0.12),
                    r: Math.max(width, height) * 0.48,
                    alpha: 0.09,
                },
                {
                    x: width * (0.76 + 0.16 * Math.sin(t * 0.85) - (pointerX - 0.5) * 0.1),
                    y: height * (0.68 + 0.18 * Math.cos(t * 1.15) - (pointerY - 0.5) * 0.1),
                    r: Math.max(width, height) * 0.44,
                    alpha: 0.075,
                },
                {
                    x: width * pointerX,
                    y: height * pointerY,
                    r: Math.max(width, height) * 0.28,
                    alpha: 0.06,
                },
            ];

            blobs.forEach((b) => {
                const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
                grad.addColorStop(0, `rgba(255, 255, 255, ${b.alpha})`);
                grad.addColorStop(0.45, `rgba(180, 185, 195, ${b.alpha * 0.42})`);
                grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
                ctx.fillStyle = grad;
                ctx.fillRect(0, 0, width, height);
            });

            // 2. 3D Constellation nodes & filaments
            const scrollOffset = (window.scrollY || 0) * 0.00025;
            const projected = nodes.map((n) => {
                if (fxEnabled) {
                    n.x = (n.x + n.vx + 1) % 1;
                    n.y = (n.y + n.vy + 1) % 1;
                }
                const py = ((n.y - scrollOffset * n.z) % 1 + 1) % 1;
                const px = n.x + (pointerX - 0.5) * 0.035 * n.z;
                return {
                    sx: px * width,
                    sy: py * height,
                    z: n.z,
                    r: n.r * n.z,
                };
            });

            // Connect nearby nodes
            const maxDist = Math.min(width, height) * 0.19;
            ctx.lineWidth = 0.75;
            for (let i = 0; i < projected.length; i++) {
                const a = projected[i];
                for (let j = i + 1; j < projected.length; j++) {
                    const b = projected[j];
                    const dx = a.sx - b.sx;
                    const dy = a.sy - b.sy;
                    const dist = Math.hypot(dx, dy);
                    if (dist < maxDist) {
                        const alpha = (1 - dist / maxDist) * 0.14 * Math.min(a.z, b.z);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
                        ctx.beginPath();
                        ctx.moveTo(a.sx, a.sy);
                        ctx.lineTo(b.sx, b.sy);
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes
            projected.forEach((p) => {
                ctx.fillStyle = `rgba(255, 255, 255, ${(0.18 + p.z * 0.32).toFixed(2)})`;
                ctx.beginPath();
                ctx.arc(p.sx, p.sy, p.r, 0, Math.PI * 2);
                ctx.fill();
            });

            if (fxEnabled) {
                rafId = requestAnimationFrame(drawFrame);
            }
        };

        const updateFxState = () => {
            if (toggleBtn) {
                toggleBtn.setAttribute('aria-pressed', String(fxEnabled));
                toggleBtn.classList.toggle('is-off', !fxEnabled);
            }
            if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
            if (fxEnabled) {
                rafId = requestAnimationFrame(drawFrame);
            } else {
                drawFrame(performance.now());
            }
        };

        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                fxEnabled = !fxEnabled;
                updateFxState();
            });
        }

        updateFxState();
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
        }, { rootMargin: '0px 0px -6% 0px' });
        els.forEach((el) => io.observe(el));
    }

    initPreloader();
    renderProof();
    renderProjects();
    renderExperience();
    renderSkills();
    renderJourney();
    renderServices();
    applyLinks();
    initOptionalImages();
    initNav();
    initHeroStage();
    initIdCard();
    initLiquidGlass();
    initExpScrollLine();
    initShaderCanvas();
    initReveal();
})();
