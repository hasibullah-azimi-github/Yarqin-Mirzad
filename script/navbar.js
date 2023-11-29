

// Get modal element
let modal = document.querySelector(".sidebar-modal");

// Get open buttons
const sidebarOpenbtn = document.querySelector(".navOpenBtn");

// Get close button
const sidebarClosebtn = document.querySelector(".navCloseBtn");


let isWindowScrollable = false;
let scrollPosition;

// Listen for open click
sidebarOpenbtn.addEventListener("click", () => {
  scrollPosition = window.scrollY || document.documentElement.scrollTop;
  isWindowScrollable = true;
  modal.classList.toggle("toggleshow");

});

sidebarClosebtn.addEventListener("click", () => {
  isWindowScrollable = false;
  modal.classList.toggle("toggleshow");

});

const handleScroll = (event) => {

  if (isWindowScrollable) {
    event.preventDefault();
    window.scrollTo(0, scrollPosition);
  }
};


window.addEventListener('scroll', handleScroll, { passive: false });


// Listen for outside click
window.addEventListener("click", OutsideClicked);

// Function to close modal if outside click
function OutsideClicked(e) {
  if (e.target == modal) {
    isWindowScrollable = false;
    modal.classList.toggle("toggleshow");
  }
}


let navbar_menu = document.querySelectorAll(".menu-item  .section-links");

// Function to close modal if menu click
navbar_menu.forEach((menu) => {
  menu.addEventListener("click", (e) => {
    isWindowScrollable = false;
    modal.classList.toggle("toggleshow");
  });
});


// Function to close modal if sidebar remained open
window.matchMedia("(max-width: 768px)").addEventListener("change", (viewPort) => {
    if (!viewPort.matches) {
      if (modal.classList.contains("toggleshow")) {
        isWindowScrollable = false;
        modal.classList.toggle("toggleshow");
      }
    }
  });





const menu = document.querySelector(".menu-item > div");
const menus = document.querySelector(".sub-menu");
const province = document.querySelectorAll(".province");
const district = document.querySelectorAll(".districts");

menu.addEventListener("click", () => {
  menu.firstElementChild.classList.toggle("fa-plus");
  menu.firstElementChild.classList.toggle("fa-minus");
  menus.classList.toggle("toggleshow");
});

province.forEach((item, index) => {
  item.addEventListener("click", () => {
    district[index].classList.toggle("toggleshow");
    item.firstElementChild.classList.toggle("turn-angle");
  });
});



// Navbar Script End
