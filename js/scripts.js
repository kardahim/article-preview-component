var bubble = document.getElementById("bubble");
var share = document.getElementById("share");
var arrow = document.getElementById("arrow");

var c2 = "hsl(214, 17%, 51%)";
var c4 = "hsl(210, 46%, 95%)";

// EVENT LISTENER
document.getElementById("svg").addEventListener("click", showBubble);

function showBubble() {
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