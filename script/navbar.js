

// Get modal element
let modal = document.querySelector(".sidebar-modal");

// Get open buttons
const sidebarOpenbtn = document.querySelector(".navOpenBtn");

// Get close button
const sidebarClosebtn = document.querySelector(".navCloseBtn");


let isBodyScrollable = true;
let scrollPosition;
let keys = {34: 1, 33: 1, 37: 1, 38: 1, 39: 1, 40: 1};

const preventDefault = (event) => {
  event.preventDefault();
};

const preventDefaultForScrollKeys = (event) => {
  if (keys[event.keyCode]) {
    preventDefault(event);
    return false;
  }
};


const handleScroll = () => {
  console.log("Hello");
  if (!isBodyScrollable) {
    window.scrollTo(0, scrollPosition);
  }
};


// call this to Disable
function disableScroll() {

  scrollPosition = window.scrollY || document.documentElement.scrollTop;
  isBodyScrollable = false;
  document.body.classList.toggle('hide-scrollbar');
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  window.addEventListener('scroll', handleScroll);

}

// call this to Enable
function enableScroll() {

document.body.classList.toggle('hide-scrollbar');
isBodyScrollable = true;
window.removeEventListener('DOMMouseScroll', preventDefault, false);
window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
window.removeEventListener('scroll', handleScroll);

}





// Listen for open click
sidebarOpenbtn.addEventListener("click", () => {

  disableScroll();
  modal.classList.toggle("toggleshow");

});

sidebarClosebtn.addEventListener("click", () => {
  enableScroll();
  modal.classList.toggle("toggleshow");

}); 





// Listen for outside click
window.addEventListener("click", OutsideClicked);

// Function to close modal if outside click
function OutsideClicked(e) {
  if (e.target == modal) {
    enableScroll();
    modal.classList.toggle("toggleshow");
  }
}


let navbar_menu = document.querySelectorAll(".menu-item  .section-links");

// Function to close modal if menu click
navbar_menu.forEach((menu) => {
  menu.addEventListener("click", (e) => {
    enableScroll();
    modal.classList.toggle("toggleshow");
  });
});


// Function to close modal if sidebar remained open
window.matchMedia("(max-width: 768px)").addEventListener("change", (viewPort) => {
    if (!viewPort.matches) {
      if (modal.classList.contains("toggleshow")) {
        enableScroll();
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
