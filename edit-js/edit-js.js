$(document).ready(function () {
  $(".counter").counterUp({
    delay: 1,
    time: 700,
  });
});

var swiper = new Swiper(".swiper-hero", {
  loop: true,
  freeMode: true,
  grabCursor: true,
  effect: "fade",
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 2000,
  //   breakpoints: {
  //     // when window width is >= 320px
  //     300: {
  //       slidesPerView: 2,
  //     },
  //     400: {
  //       slidesPerView: 3,
  //     },
  //     // when window width is >= 480px
  //     480: {
  //       slidesPerView: 4,
  //     },
  //     768: {
  //       slidesPerView: 5,
  //     },
  //     1024: {
  //       slidesPerView: 7,
  //     },
  //   },
});

var swiper = new Swiper(".swiper-testi", {
  loop: true,
  grabCursor: true,
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 2000,
  breakpoints: {
    // when window width is >= 320px
    300: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const header = document.querySelector("header");
const times = header.querySelector(".times");
const bars = header.querySelector(".bars");

bars.addEventListener("click", (e) => {
  header.classList.add("show");
});
times.addEventListener("click", (e) => {
  header.classList.remove("show");
});

window.addEventListener("scroll", (e) => {
  if (scrollY > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.01) {
    scrollToTopBtn.classList.add("showBtn");
  } else {
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
