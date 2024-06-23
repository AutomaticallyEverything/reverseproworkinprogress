(function () {
  "use strict";

  window.onload = function () {
    // Header Sticky
    const getHeaderId = document.getElementById("navbar");
    if (getHeaderId) {
      window.addEventListener("scroll", (event) => {
        const height = 10;
        const { scrollTop } = event.target.scrollingElement;
        document
          .querySelector("#navbar")
          .classList.toggle("sticky", scrollTop >= height);
      });
    }

    // Back to Top JS
    const getId = document.getElementById("backtotop");
    if (getId) {
      const topbutton = document.getElementById("backtotop");
      topbutton.onclick = function (e) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
      window.onscroll = function () {
        if (
          document.body.scrollTop > 200 ||
          document.documentElement.scrollTop > 200
        ) {
          topbutton.style.opacity = "1";
        } else {
          topbutton.style.opacity = "0";
        }
      };
    }

    // Preloader JS
    const getPreloaderId = document.getElementById("preloader");
    if (getPreloaderId) {
      getPreloaderId.style.display = "none";
    }
  };

  // //   ScrollCue JS
  //   scrollCue.init();

  // Banner Slide JS
  var swiper = new Swiper(".banner-slide", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: false,
    preventClicks: true,
    loop: true,
    speed: 2000,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".prev1",
      prevEl: ".next1",
    },
  });

  // Init BS Tooltip
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Testimonials Slide JS
  var swiper = new Swiper(".testimonials-slide", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: false,
    preventClicks: true,
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".prev3",
      prevEl: ".next3",
    },
  });

  // Testimonials Slide Two JS
  var swiper = new Swiper(".testimonials-slide-two", {
    slidesPerView: 1,
    spaceBetween: 25,
    centeredSlides: false,
    preventClicks: true,
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".prev4",
      prevEl: ".next4",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 2,
      },
      1600: {
        slidesPerView: 2,
      },
    },
  });

  // Blog Slide JS
  //   var swiper = new Swiper(".blog-slide", {
  //     slidesPerView: 1,
  //     spaceBetween: 25,
  //     centeredSlides: false,
  //     preventClicks: true,
  //     loop: true,
  //     autoplay: {
  //       delay: 8000,
  //       disableOnInteraction: false,
  //       pauseOnMouseEnter: true,
  //     },
  //     navigation: {
  //       nextEl: ".prev5",
  //       prevEl: ".next5",
  //     },
  //     pagination: {
  //       el: ".swiper-pagination1",
  //       clickable: true,
  //     },
  //     breakpoints: {
  //       0: {
  //         slidesPerView: 1,
  //       },
  //       576: {
  //         slidesPerView: 1.6,
  //       },
  //       768: {
  //         slidesPerView: 2,
  //       },
  //       992: {
  //         slidesPerView: 2.5,
  //       },
  //       1440: {
  //         slidesPerView: 3.5,
  //       },
  //       1600: {
  //         slidesPerView: 3.5,
  //       },
  //     },
  //   });

  //   // Blog Slide Two JS
  //   var swiper = new Swiper(".blog-slide-two", {
  //     slidesPerView: 1,
  //     spaceBetween: 25,
  //     centeredSlides: false,
  //     preventClicks: true,
  //     loop: true,
  //     autoplay: {
  //       delay: 8000,
  //       disableOnInteraction: false,
  //       pauseOnMouseEnter: true,
  //     },
  //     navigation: {
  //       nextEl: ".prev5",
  //       prevEl: ".next5",
  //     },
  //     pagination: {
  //       el: ".swiper-pagination1",
  //       clickable: true,
  //     },
  //     breakpoints: {
  //       0: {
  //         slidesPerView: 1,
  //       },
  //       576: {
  //         slidesPerView: 1.6,
  //       },
  //       768: {
  //         slidesPerView: 2,
  //       },
  //       992: {
  //         slidesPerView: 2.5,
  //       },
  //       1440: {
  //         slidesPerView: 3.5,
  //       },
  //       1600: {
  //         slidesPerView: 3.3,
  //       },
  //     },
  //   });

  // Background Images JS
  // Find all elements with a "data-background" attribute
  var elements = document.querySelectorAll("[data-background]");

  // Loop through each element
  elements.forEach(function (element) {
    // Get the value of the "data-background" attribute
    var backgroundValue = element.getAttribute("data-background");

    // Set the "background-image" CSS property
    element.style.backgroundImage = "url(" + backgroundValue + ")";
  });
})();

// For Mobile Navbar JS
const list = document.querySelectorAll(".mobile-menu-list");
function accordion(e) {
  e.stopPropagation();
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else if (this.parentElement.parentElement.classList.contains("active")) {
    this.classList.add("active");
  } else {
    for (i = 0; i < list.length; i++) {
      list[i].classList.remove("active");
    }
    this.classList.add("active");
  }
}
for (i = 0; i < list.length; i++) {
  list[i].addEventListener("click", accordion);
}
