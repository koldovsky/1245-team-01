document.body.addEventListener("htmx:afterSettle", (event) => {
    let isDragging = false;
    let startX;
    let startScrollLeft;
    let timeoutId;
  
    const wrapper = document.querySelector(".slider__facts");
    const carousel = document.querySelector(".slider__facts");
    const arrowBtns = document.querySelectorAll(".slider__button__left, .slider__button__right");
    const firstCardWidth = carousel.querySelector("div").offsetWidth;
    const carouselChildrens = [...carousel.querySelectorAll("div")];
  
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
  
    carouselChildrens
      .slice(-cardPerView)
      .reverse()
      .forEach((card) => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
      });
  
    carouselChildrens
      .slice(0, cardPerView)
      .forEach((card) => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
      });
  
    arrowBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.classList.contains("slider__button__left") 
          ? -firstCardWidth 
          : firstCardWidth;
        infiniteScroll();
      });
    });
  
    const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };
  
    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };
  
    const dragging = (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };
  
    const infiniteScroll = () => {
      if (carousel.scrollLeft === 0) {
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
      } else if (Math.ceil(carousel.scrollLeft) >= carousel.scrollWidth - carousel.offsetWidth) {
        carousel.scrollLeft = carousel.offsetWidth;
      }
      clearTimeout(timeoutId);
      if (!wrapper.matches(":hover")) autoPlay();
    };
  
    const autoPlay = () => {
      if (window.innerWidth < 800) return;
      timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 1500);
    };
  
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
  
    carousel.addEventListener("scroll", infiniteScroll);
    autoPlay();
  });
  