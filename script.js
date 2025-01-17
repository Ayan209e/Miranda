// LocomotiveScroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
});

// GSAP MatchMedia for responsive animations
let mm = gsap.matchMedia();

mm.add(
  {
    isMobile: "(max-width: 699px)",
    isTablet: "(min-width: 700px) and (max-width: 1100px)",
    isDesktop: "(min-width: 1101px)",
  },
  (context) => {
    let { isMobile, isTablet, isDesktop } = context.conditions;

    // GSAP timeline
    var tl = gsap.timeline();

    // Mobile animations
    if (isMobile) {
      tl.to("#animation-trigger", {
        y: "100vh",
        scale: 0.6,
        duration: 0,
      });
      tl.to("#animation-trigger", {
        y: "-80vh",
        duration: 1,
      });
      tl.to("#animation-trigger", {
        y: "0vh",
        rotate: -360,
        scale: 1,
        delay: 0.3,
        duration: 0.6,
      });
    }

    // Tablet animations
    if (isTablet) {
      tl.to("#animation-trigger", {
        y: "100vh",
        scale: 0.6,
        duration: 0,
      });
      tl.to("#animation-trigger", {
        y: "-60vh",
        duration: 1,
      });
      tl.to("#animation-trigger", {
        y: "0vh",
        rotate: -360,
        scale: 1,
        delay: 0.3,
        duration: 0.6,
      });
    }

    // Desktop animations
    if (isDesktop) {
      tl.to("#animation-trigger", {
        y: "100vh",
        scale: 0.5,
        duration: 0,
      });
      tl.to("#animation-trigger", {
        y: "-160vh",
        duration: 1,
      });
      tl.to("#animation-trigger", {
        y: "0vh",
        rotate: -360,
        scale: 1,
        delay: 0.3,
        duration: 0.6,
      });
    }
  }
);
