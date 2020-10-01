gsap.registerPlugin(ScrollTrigger);

//custom cursor
let cursor = document.querySelector(".cursor");
let links = document.querySelectorAll("a");

let header = document.querySelectorAll(".about-me p");

window.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  cursor.style.top = e.pageY - 20 + "px";
  cursor.style.left = e.pageX - 20 + "px";
}
header.forEach((head) => {
  head.addEventListener("mouseleave", () => {
    cursor.style.display = "inline";
  });
  head.addEventListener("mouseover", () => {
    cursor.style.display = "none";
  });
});

links.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("link-shrink");
    link.style.color = "#c6ac5f";
  });

  link.addEventListener("mouseover", () => {
    cursor.classList.add("link-shrink");
    link.style.color = "#eadeda";
  });
});

//GSAP
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "top top",
    end: "+=1000px",
    scrub: 2.5,
    snap: {
      snapTo: "labels",
      duration: 1,
      delay: 0.5,
      ease: "power2.inOut",
    },
    pin: true,
    // markers: { startColor: "green", endColor: "red", fontSize: "12px" },
  },
});
tl.addLabel("start")
  .to(".white", { x: 900 })
  .to(".hello", { x: 1000 }, "-=0.5")
  .to(".scroll-down", { y: 40, opacity: 0 }, "-=0.3")
  .to(".nav-bar", { y: 15, opacity: 1 }, "-=0.3")
  .to(".footer", { y: -10, opacity: 1 }, "-=0.3")
  .to(".about-me", { y: -30, opacity: 1 }, "=-0.3")
  .addLabel("end");

let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    start: "-500 top",
    markers: { startColor: "green", endColor: "red", fontSize: "12px" },
  },
});

tl1.from(".porfolio-title", { x: -100, opacity: 0, ease: "powe2.out" });

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#skill",
    start: "-400 top",
    markers: { startColor: "green", endColor: "red", fontSize: "12px" },
  },
});

tl2.from(".skill-title", {
  x: 100,
  duration: 1,
  opacity: 0,
  ease: "powe2.out",
});
tl2.from(
  ".skill h2",
  {
    y: 30,
    opacity: 0,
    ease: "powe2.out",
    delay: 0.4,
  },
  0
);
tl2.from(".progress", { y: 30, opacity: 0, ease: "powe2.out" }, "-=0.3");
tl2.from(
  ".percentage",
  {
    x: -10,
    width: 10,
    opacity: 0,
    ease: "bounce.inOut",
    duration: 1.5,
  },
  "-=0.3"
);
