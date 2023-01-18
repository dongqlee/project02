
/*--visual_main--*/
  const swiper = new Swiper(".thumBox", {
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  const swiper2 = new Swiper(".mainSheet", {
    loop: true,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const swiper3 = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      601: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      769: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    }
  });
  const swiper4 = new Swiper(".mySwiper3", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      601: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      769: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    }
  });

  const swiper5 = new Swiper(".mySwiper4", {
    slidesPerView: 2,
    spaceBetween: 10,
  });


/*----trailer----*/

  const swiper6 = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 3000,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
    delay: 300000,
    disableOnInteraction: false,
    },
  });

/*----recommend_program----*/
