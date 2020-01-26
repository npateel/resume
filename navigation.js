// Scroll callback

window.onscroll = stickyNav

// Get navbar
var navbar = document.getElementsByTagName("nav")[0];

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky")
    }
}