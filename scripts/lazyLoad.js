if (window.addEventListener && window.requestAnimationFrame && document.getElementsByClassName) {

    window.addEventListener('load', function () {
        document.getElementsByClassName('gallery-wrapper')[0].addEventListener('animationend', function () {
            'use strict';

            // start
            var pItem = document.getElementsByClassName('progressive replace'), timer, pCount;

            // scroll and resize events
            window.addEventListener('scroll', scroller, false);
            window.addEventListener('resize', scroller, false);

            // DOM mutation observer
            if (MutationObserver) {
                var observer = new MutationObserver(function () {
                    if (pItem.length !== pCount) inView();
                });
                observer.observe(document.body, { subtree: true, childList: true, attributes: true, characterData: true });
            }

            // throttled scroll/resize
            function scroller() {

                timer = timer || setTimeout(function () {
                    timer = null;
                    inView();
                }, 300);

            }


            // image in view?
            function inView() {

                if (pItem.length) {
                    requestAnimationFrame(function () {

                        var wW = window.innerWidth, cRect, cL, cR, p = 0;
                        while (p < pItem.length) {

                            cRect = pItem[p].getBoundingClientRect();
                            cL = cRect.left;
                            cR = cRect.right;

                            if (0 < cR && wW > cL) {
                                loadFullImage(pItem[p]);
                                pItem[p].classList.remove('replace');
                            } else {
                                p++;
                            }
                        }
                        pCount = pItem.length;

                    });
                }
            }


            // replace with full image
            function loadFullImage(item, retry) {

                var src = item && item.dataset;
                if (!src) {
                    return;
                }

                // load image
                var img = new Image();

                img.onload = addImg;
                retry = 1 + (retry || 0);
                if (retry < 3) {
                    img.onerror = function () {
                        setTimeout(function () {
                            loadFullImage(item, retry);
                        }, retry * 3000);
                    };
                }
                img.className = 'reveal';
                img.src = src.large;

                // replace image
                function addImg() {

                    requestAnimationFrame(function () {


                        // preview image
                        var pImg = item.querySelector && item.querySelector('img.preview');

                        // add full image
                        item.insertBefore(img, pImg && pImg.nextSibling).addEventListener('animationend', function () {

                            // remove preview image
                            if (pImg) {
                                if (pImg.alt) {
                                    img.alt = pImg.alt;
                                }
                                item.removeChild(pImg);
                            }

                            img.classList.remove('reveal');

                        });
                    });
                }
            }
        }, false);
    }, false);
}