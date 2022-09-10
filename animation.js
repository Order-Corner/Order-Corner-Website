const faders = document.querySelectorAll(".vorteileGridItem");

const appearOptions = {
  threshold: 0,
  rootMaring: "0px 0px -250px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((element) => {
    if (!element.isIntersecting) {
      return;
    } else {
      element.target.classList.add("isOnScreen");
      appearOnScroll.unobserve(element.target);
    }
  });
},
appearOptions);

faders.forEach((element) => {
  appearOnScroll.observe(element);
});
