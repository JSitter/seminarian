// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickynotsticky()};

// Get the navbar
var navbar = document.getElementById("primary-menu-region");
var adminnav = document.getElementById("toolbar-administration");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickynotsticky() {
  if (adminnav) {
    console.log("Page offset", window.pageYOffset);
    console.log("Sticky value", sticky);
    if (window.pageYOffset + 115 >= sticky) {
      navbar.classList.add("admin-sticky")
    } else {
      navbar.classList.remove("admin-sticky");
    }
  } else {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

} 