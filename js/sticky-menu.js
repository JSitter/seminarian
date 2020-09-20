window.onscroll = function() {stickynotsticky()};
let navbar = document.getElementById("primary-menu-region");
let adminnav = document.getElementById("toolbar-administration");
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickynotsticky() {
  if (adminnav) {
    if (window.pageYOffset + 115 >= sticky) {
      navbar.classList.add("admin-sticky");
    } else {
      navbar.classList.remove("admin-sticky");
    }
  } else {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
}
