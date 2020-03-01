let input = document.getElementById("input");
let button = document.getElementById("button");
button.addEventListener('click', function () {
    let clone = input.cloneNode(true);
    input.parentElement.appendChild(clone)
});