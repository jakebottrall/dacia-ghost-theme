document.addEventListener("DOMContentLoaded", (event) => {
  // initialise animation on scroll
  AOS.init({
    disable: window.innerWidth < 1024 ? true : false,
    duration: 800,
    easing: "slide",
  });

  // ease in site after being loaded
  const body = document.querySelector("body");
  body.classList.add("loaded");
});
