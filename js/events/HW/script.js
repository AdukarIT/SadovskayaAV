//1
let input = document.getElementById("input");
let button = document.getElementById("button");
button.addEventListener('click', function () {
    let clone = input.cloneNode(true);
    input.parentElement.appendChild(clone)
});

//2
let table = document.getElementById("table");
let counter = 0;
table.onclick = function () {
    switch (counter) {
        case 0:
            table.classList.remove("highlight")
            table.classList.add("bordered");
            break;
        case 1:
            table.classList.remove("bordered");
            table.classList.add("striped");
            break;
        case 2:
            table.classList.remove("striped");
            table.classList.add("highlight");
            counter = 0;
            return;
    };
    counter++;
};