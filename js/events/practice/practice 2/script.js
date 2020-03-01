//1
block.onclick = function showCoords(evt) {
    document.getElementById('coords').innerHTML = "x = " + evt.clientX  + ", y = " + evt.clientY;
};
