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
createUl();

//5

let text =  document.getElementById("elem").previousElementSibling;
text.textContent += "!";
console.log(text.textContent);

//6
 function wrapInParagraph() {
     let div = document.getElementById("div");
     let p = document.createElement('p');
     p.innerHTML = div.textContent;
     div.innerHTML = p.outerHTML;
     console.log(div);
 }
 wrapInParagraph();

