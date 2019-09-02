var flag = 0;

function lazyLoad() {
    var lazy = document.getElementsByClassName('lazy');
    for (var i = 0; i < lazy.length; i++) {
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
