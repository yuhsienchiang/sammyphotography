var flag = 0;

function lazyLoad() {
    var lazy = document.getElementsByClassName('lazy');
    if (flag == 0) {
        for (var k = 0; k < 3; k++) {
            lazy[k].src =lazy[k].getAttribute('data-src');
        }
        flag = 1;
    }
    for (var i = 3; i < lazy.length; i++) {
        if(isInViewport(lazy[i])){
            lazy[i].src =lazy[i].getAttribute('data-src');
        }
    }
}

function isInViewport(el){
    var rect = el.getBoundingClientRect();

    return (
        rect.bottom >= 0 && 
        rect.right >= 0 && 
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener("load", lazyLoad);
window.addEventListener("scroll", lazyLoad);
