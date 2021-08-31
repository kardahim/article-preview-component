var bubble = document.getElementById("bubble");
var share = document.getElementById("share");
var arrow = document.getElementById("arrow");

var bubbleM = document.getElementById("bubble-mobile");
var shareM = document.getElementById("share-mobile");
var arrowM = document.getElementById("arrow-mobile");

var author = document.getElementById("author");

var c2 = "hsl(214, 17%, 51%)";
var c4 = "hsl(210, 46%, 95%)";

// EVENT LISTENER
document.getElementById("svg").addEventListener("click", showBubble);
document.getElementById("svgM").addEventListener("click", showBubble);
window.addEventListener("resize", close);

function showBubble() {
    var win = window.innerWidth;

    if (win >= 1023) {
        if (bubble.style.display === "flex") {
            bubble.style.display = "none";
            share.style.background = c4;
            arrow.style.fill = c2;
        }
        else {
            bubble.style.display = "flex";
            share.style.background = c2;
            arrow.style.fill = c4;
        }
    }
    else {
        if (bubbleM.style.display === "flex") {
            bubbleM.style.display = "none";
            author.style.display = "flex";
        }
        else {
            bubbleM.style.display = "flex";
            shareM.style.background = c2;
            arrowM.style.fill = c4;
            author.style.display = "none";
        }

    }
}

function close() {
    bubble.style.display = "none";
    bubbleM.style.display = "none";
    author.style.display = "flex";
    share.style.background = c4;
    arrow.style.fill = c2;
}