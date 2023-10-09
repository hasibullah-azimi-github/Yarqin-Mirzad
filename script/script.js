// Header
const nav = document.querySelector(".nav"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

const navitems = document.querySelector(".nav-items");

navOpenBtn.addEventListener("click", () => {
  navitems.classList.toggle("backdrop");
  nav.classList.toggle("openNav");
});

navitems.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("verticle_container") ||
    e.target.classList.contains("verticle_links") ||
    e.target.tagName === "LI"
  ) {
    return;
  } else {
    navitems.classList.toggle("backdrop");
    nav.classList.toggle("openNav");
  }
});

let listOfLinks = `
        <li><a href="#">تماس با ما</a></li>
        <li><a href="#">نماینده گی ها</a></li>
        <li><a href="#">پلان ها</a></li>
        <li><a href="#">خدمات</a></li>
        <li><a href="#">درباره ما</a></li>
        <li><a href="#">صفحه اصلی</a></li>
`;

let listOfMobileLinks = `
        <div class="verticle_container"><i class="fa-light fa-xmark fa-2x  navCloseBtn"></i></div>
        <div class="verticle_links">
        <li><a href="#">خانه</a></li>
        <li><a href="#">درباره ما</a></li>
        <li><a href="#">خدمات</a></li>
        <li><a href="#">پلان ها</a></li>
        <li><a href="#">نماینده گی ها</a></li>
        <li><a href="#">تماس با ما</a></li>
        </div>
`;

function viewPortExecute(viewPortValue) {

  if (!viewPortValue.matches) {
    if (navitems.classList.contains("backdrop")) {
      navitems.classList.toggle("backdrop");
      nav.classList.toggle("openNav");
    }
    if (navitems.firstElementChild.innerHTML == listOfMobileLinks) {
      navitems.firstElementChild.innerHTML = listOfLinks;
    }
  } else {
    if (navitems.firstElementChild.innerHTML != listOfMobileLinks) {
      navitems.firstElementChild.innerHTML = listOfMobileLinks;
      console.log("Statement Executed");
    }
  
  }
}

var viewPortValue = window.matchMedia("(max-width: 768px)");
viewPortExecute(viewPortValue);

viewPortValue.addEventListener("change", viewPortExecute); // Attach listener function on state changes
