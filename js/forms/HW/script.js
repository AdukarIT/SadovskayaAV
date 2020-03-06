//1
let form = document.forms[0];
let name = form.elements.name;
let time = form.elements.minutes;
let submit = form.elements.submit;
let message = document.getElementById("message");
let message2 = document.getElementById("message2")
form.onsubmit = function validate() {
    if(name.value.length == 0) {
        message.innerHTML = "*данное поле обязательно для заполнения";
        return false;
    }
    if (isNaN(time.value)) {
        message2.innerHTML = "*Введите время В ЦИРФАХ";
        return false;
    }
 };
