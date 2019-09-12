function openSubList(event) {
    var otherList = document.getElementsByClassName("category-container");
    var targetList = event.target.nextElementSibling;
    var i;
    
    if (!targetList.classList.contains("open")) {
        for (i = 0; i < otherList.length; i++) {
            otherList[i].classList.remove("open");
        }
        targetList.classList.add("open");
    } else {
        targetList.classList.remove("open");
    }
}

var category = document.getElementsByClassName("category");
var i;

for (i = 0; i < category.length - 1; i++) {
    category[i].addEventListener("click", openSubList, false);
}