const navlinks = () => {
  const btn = document.querySelector(".menu-bar");
  const navslide = document.querySelector(".navlinks");
  const arrows = document.querySelector(".nav-arrows");

  btn.addEventListener("click", () => {
    navslide.classList.toggle("show-navlinks");
    arrows.classList.toggle("show-navarrows");
  });
};

navlinks();

// const navItems = () => {
//   const list = document.querySelector(".list");
//   const home = document.getElementById("home");

//   home.addEventListener("click", () => {
//     list.classList.remove("navslide");
//   });
// };
