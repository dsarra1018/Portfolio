const navSlide = () => {
  const menu = document.querySelector(".mobile-menu");
  const nav = document.querySelector(".menu-container");
  const links = document.querySelector(".menu-links li");
  const main_cont = document.querySelector(".content-holder");

  menu.addEventListener("click", () => {
    //Toggle nav
    nav.classList.toggle("nav-active");
    main_cont.classList.toggle("content-rem");

    //Animate links
    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    //Menu animation
    menu.classList.toggle("toggle");
  });
}

navSlide();