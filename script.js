document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Init Lenis Smooth Scroller ---
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    // Integrated Lenis with GSAP ScrollTrigger
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);

    // --- 2. Init Vanta.js WebGL Background ---
    // Make sure elements exist before initializing
    if (document.getElementById('vanta-bg')) {
        VANTA.NET({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x4f46e5,    // Indigo accent mapped from CSS
            backgroundColor: 0x030712, // Dark background
            points: 12.00,
            maxDistance: 22.00,
            spacing: 18.00,
            showDots: true
        })
    }

    // --- 3. GSAP Animations ---
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Load Animation
    const heroTl = gsap.timeline();
    heroTl.from(".logo", { y: -20, opacity: 0, duration: 0.8, ease: "power3.out" })
          .from(".nav-links li", { y: -20, opacity: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" }, "-=0.6")
          .from(".hero-title", { y: 30, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.2")
          .from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .from(".hero-desc", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .from(".hero-cta, .social-links", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.2 }, "-=0.6");

    // Scroll Reveal Animations for elements
    const revealElements = document.querySelectorAll(".gs-reveal");
    
    revealElements.forEach((elem) => {
        gsap.fromTo(elem, 
            { y: 50, opacity: 0 }, 
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%", 
                    toggleActions: "play none none reverse" // re-animates slightly when scrolling back up
                }
            }
        );
    });

});
