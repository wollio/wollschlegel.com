function resizeGridItem(item) {
    var grid = document.getElementsByClassName("post-feed")[0];
    var rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    var rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    var rowSpan = Math.ceil((item.scrollHeight+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
}

var resizeAllGridItems = function() {
    allItems = document.getElementsByClassName("post-link");
    for(var x=0;x<allItems.length;x++){
        resizeGridItem(allItems[x]);
    }
    window.addEventListener("resize", resizeAllGridItems);
}

var startRender = function() {
    requestAnimationFrame(resizeAllGridItems)
}

var loadImage = function () {
    requestAnimationFrame(startRender)
}

window.initMasonry = function() {
    var images = document.querySelectorAll('img');
    for (var i = 0; i < images.length; i++) {
        if (images[i].complete) {
            loadImage();
        } else {
            images[i].addEventListener('load', loadImage);
        }
    }

    resizeAllGridItems();
}

if (document.readyState === "complete") {
    window.initMasonry();
} else {
    window.addEventListener('load', function () {
        window.initMasonry();
    });
}
