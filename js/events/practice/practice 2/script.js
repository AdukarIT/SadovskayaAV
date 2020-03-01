//1
const block = document.getElementById("block");
block.onmousemove = function showCoords(evt) {
    document.getElementById('coords').innerHTML = "x = " + evt.clientX  + ", y = " + evt.clientY;
};

//2
const folder = document.getElementById("folder");
folder.ondblclick = function (evt) {
  this.style.backgroundImage = "url('img/opened.png')"
};
