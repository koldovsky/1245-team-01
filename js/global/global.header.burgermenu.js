document.addEventListener("htmx:load", function () {
    const burgerToggle = document.getElementById("burger-menu-toggle");
    const burgerMenu = document.getElementById("burger-menu");
    const burgerClose = document.getElementById("burger-menu-close");
  
    if (burgerToggle) {
      burgerToggle.addEventListener("click", function () {
        burgerMenu.classList.toggle("header__menu--open");
      });
    }
  
    if (burgerClose) {
      burgerClose.addEventListener("click", function () {
        burgerMenu.classList.remove("header__menu--open");
      });
    }
  });
  