const slides = [
  '<div class="slide"><p class="fact__year">2016</p><span class="seperator__slide__2016">-</span><p class="fact__text">The name was changed to EchoWave by our team.</p></div>',
  '<div class="slide"><p class="fact__year">2020</p><span class="seperator__slide__2020">—</span><p class="fact__text">We gained popularity due to our podcasts during the pandemic.</p></div>',
  '<div class="slide"><p class="fact__year">2022</p><span class="seperator__slide__2022">—</span><p class="fact__text">Our fantastic team won the Vest NY Radio award.</p></div>',
  '<div class="slide"><p class="fact__year">2005</p><span class="seperator__slide__2005">—</span><p class="fact__text">Jack Richardson started his own, small radio studio.</p></div>',
  '<div class="slide"><p class="fact__year">2006</p><span class="seperator__slide__2006">—</span><p class="fact__text">The radio got the TuWave name and started its promo.</p></div>',
];

let currentSlideIdx = 0;

function renderSlide() {
  const slideContainer = document.querySelector(".slides-container");
  slideContainer.innerHTML = slides[currentSlideIdx];

  if (window.matchMedia("(min-width: 768px)").matches) {
    const secondSlideIdx = (currentSlideIdx + 1) % slides.length;
    slideContainer.innerHTML += slides[secondSlideIdx];

    if (window.matchMedia("(min-width: 1024px)").matches) {
      const thirdSlideIdx = (secondSlideIdx + 1) % slides.length;
      slideContainer.innerHTML += slides[thirdSlideIdx];
    }
  }
}

function nextSlide() {
  currentSlideIdx = (currentSlideIdx + 1) % slides.length;
  renderSlide();
}

function prevSlide() {
  currentSlideIdx = (currentSlideIdx - 1 + slides.length) % slides.length;
  renderSlide();
}

renderSlide();

const btnNext = document.querySelector(".slider__button__right");
btnNext.addEventListener("click", nextSlide);

const btnPrev = document.querySelector(".slider__button__left");
btnPrev.addEventListener("click", prevSlide);

window.addEventListener("resize", renderSlide);
