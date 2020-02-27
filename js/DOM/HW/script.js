//1
let div = document.getElementById("elem");
div.classList.add("www");
console.log(div);

//2
div.classList.contains("www");
if (div.classList.contains("www")){
    div.classList.remove("www")
}
console.log(div);

//4
function createUl() {
    let  array = [ 1, 2 , 3, 4, 5, 6];
    for (let i = 0; i < array.length; i ++) {
        let li = document.createElement('li');
        li.innerHTML = array[i];
        ul.append(li);
    }
}
console.log(createUl());

