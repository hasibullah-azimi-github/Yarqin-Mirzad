

// Get modal element
let modal = document.querySelector(".sidebar-modal");

// Get open buttons
const sidebarOpenbtn = document.querySelector(".navOpenBtn");

// Get close button
const sidebarClosebtn = document.querySelector(".navCloseBtn");

// Listen for open click
sidebarOpenbtn.addEventListener("click", () => {
  modal.classList.toggle("toggleshow");
});

sidebarClosebtn.addEventListener("click", () => {
  modal.classList.toggle("toggleshow");
});


// Listen for outside click
window.addEventListener("click", clickOutside);

// Function to close modal if outside click
function clickOutside(e) {
  if (e.target == modal) {
    modal.classList.toggle("toggleshow");
  }
}


let navbar_menu = document.querySelectorAll(".menu-item  .section-links");

// Function to close modal if menu click
navbar_menu.forEach((menu) => {
  menu.addEventListener("click", (e) => {
    modal.classList.toggle("toggleshow");
  });
});


// Function to close modal if sidebar remained open
window.matchMedia("(max-width: 768px)").addEventListener("change", (viewPort) => {
    if (!viewPort.matches) {
      if (modal.classList.contains("toggleshow")) {
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
