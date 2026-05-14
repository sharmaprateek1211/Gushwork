// STICKY HEADER
const header = document.getElementById('header');

window.addEventListener('scroll', () => {

  if (window.scrollY > 120) {
    header.classList.add('show');
  } else {
    header.classList.remove('show');
  }

});


// CAROUSEL
const carousel = document.getElementById('carousel');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', () => {
  carousel.scrollLeft += 350;
});

prevBtn.addEventListener('click', () => {
  carousel.scrollLeft -= 350;
});

// OPTIONAL AUTO SCROLL
let autoScroll = setInterval(() => {
  carousel.scrollLeft += 1;

  if (
    carousel.scrollLeft + carousel.clientWidth >=
    carousel.scrollWidth
  ) {
    carousel.scrollLeft = 0;
  }
}, 20);

// STOP AUTO SCROLL ON HOVER

carousel.addEventListener('mouseenter', () => {
  clearInterval(autoScroll);
});

carousel.addEventListener('mouseleave', () => {

  autoScroll = setInterval(() => {
    carousel.scrollLeft += 1;

    if (
      carousel.scrollLeft + carousel.clientWidth >=
      carousel.scrollWidth
    ) {
      carousel.scrollLeft = 0;
    }
  }, 20);

});