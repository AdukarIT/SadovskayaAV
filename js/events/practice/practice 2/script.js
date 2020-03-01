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

//3
const container = document.getElementById("container");
for (let i = 1; i <= 400; i++){
    let div = document.createElement("div");
    div.style.width = "30px";
    div.style.height = "30px";
    div.style.backgroundColor = "red";
    div.style.margin = "2px";
    div.style.transition = "1s";
    div.onmouseover = function (evt) {
        this.style.borderRadius = "15px"
    };
    container.append(div);
}
