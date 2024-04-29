let observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      anime({
        targets: ".skills__div",
        translateY: [-20, 0],
        opacity: [0, 1],
        delay: anime.stagger(1200),
        easing: "easeOutQuad",
      });
      observer.unobserve(entry.target);
    }
  });
});

observer.observe(document.querySelector(".skills__div"));
