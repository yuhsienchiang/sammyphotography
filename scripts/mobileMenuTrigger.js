var button = document.getElementsByClassName("mobile-menu-trigger")[0];
var menu = document.getElementsByClassName("navigation")[0];
var openIcon = document.getElementById("open");
var closeIcon = document.getElementById("collapse");

function mobileMenuTrigger() {
    menu.classList.add("animatable");
    if (!menu.classList.contains("open")) {
        menu.classList.add("open");
        openIcon.style.display = "none";
        closeIcon.style.display = "block";
    } else {
        menu.classList.remove("open");
        openIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
}


button.addEventListener("click", mobileMenuTrigger, false);

menu.addEventListener("transitionend", function() {
    menu.classList.remove("animatable")
}, false);

window.addEventListener("resize", function() {
    if (window.innerWidth  >= 992) {
        menu.classList.add("open");
    } else {
        menu.classList.remove("open");
        openIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
}, false);