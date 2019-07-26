function show(event) {
    var otherList = document.getElementsByClassName("category_container");
    var list = event.target.nextElementSibling;
    const status = list.style.display;
    var i;
    for (i = 0; i < otherList.length; i = i + 1) {
        otherList[i].style.display = "none";
    }
    if (status === "block") {
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
}