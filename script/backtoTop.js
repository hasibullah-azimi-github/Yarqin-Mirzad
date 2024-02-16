


let lastScrollTop = 0;
let isScrollingDown = false;
let moveTop = document.querySelector(".move-top");

// Add click event listener to the button to scroll to the top of the page
moveTop.addEventListener("click", scrollToTop);

function scrollToTop() {
  const currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    window.scrollTo(0, currentScroll - currentScroll / 8);
    if (!isScrollingDown) {
      window.requestAnimationFrame(scrollToTop);
    }
  }
}

// Add scroll event listener to show/hide the button and update scrolling direction
window.addEventListener("scroll", function () {
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  // Check if the media query matches
  if (mediaQuery.matches) {
    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    isScrollingDown = currentScroll > lastScrollTop;

    if (
      currentScroll > lastScrollTop ||
      document.documentElement.scrollTop < 80
    ) {
      // Scrolling down
      moveTop.style.display = "none";
    } else {
      // Scrolling up
      moveTop.style.display = "block";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  } else {
    if (moveTop.style.display === "block") {
      moveTop.style.display = "none";
    }
  }
});