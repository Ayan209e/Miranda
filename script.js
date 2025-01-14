const scroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
});

var tl = gsap.timeline();

tl.to("main", {
  y: "100vh",
  scale: 0.5,
  duration: 0,
});
tl.to("main", {
  y: "10vh",
  duration: 1,
  delay: 1,
});
tl.to("main", {
  y: "0vh",
  rotate: -360,
  scale: 1,
  delay: 0.4,
  duration: 1.2,
});
