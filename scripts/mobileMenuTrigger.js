function mobileMenuTrigger() {
    var menu = document.getElementsByClassName("menu-wrap")[0];
    var openIcon = document.getElementById("open");
    var collapseIcon = document.getElementById("collapse");
    
    if (menu.style.display === "block") {
        menu.style.display = "none";
        collapseIcon.style.display = "none";
        openIcon.style.display = "block";
    } else {
        menu.style.display = "block";
        collapseIcon.style.display = "block";
        openIcon.style.display = "none";
    }
}

function menuHandle() {
    var menu = document.getElementsByClassName("menu-wrap")[0];
    
    if (window.innerWidth >= 765) {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

window.addEventListener('resize', menuHandle);