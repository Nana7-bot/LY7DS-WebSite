
// Nav-bar Scrolling action. Sticky when scrolling
window.addEventListener("scroll", function() {
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})
