//1
let form = document.forms[0];
let name = form.elements.name;
let time = form.elements.minutes;
let submit = form.elements.submit;
let message = document.getElementById("message");
let message2 = document.getElementById("message2");
form.onsubmit = function validate() {
    if (name.value.length == 0) {
        message.innerHTML = "*данное поле обязательно для заполнения";
        return false;
    }
    if (isNaN(time.value)) {
        message2.innerHTML = "*Введите время В ЦИРФАХ";
        return false;
    }
};
//3
form2 = document.forms[1];
let fields = form2.getElementsByClassName("field");
form2.onsubmit = function validate2() {
    for (let i = 0; i < fields.length; i++) {
        let input = fields[i];
        switch (input.type) {
            case "email":
                if (!(/^.{0,100}@[\w\-]{2,20}\.[a-z]{2,15}$/i.test(input.value))) {
                    console.log("wrong email");
                    input.classList.add("wrong");
                    return false;
                }
                break;
            case "number":
                if (!(/^-?\d+$/.test(input.value))) {
                    input.classList.add("wrong");
                    console.log("wrong number");
                    return false;
                }
                break;
            case "text":
            default:
                if (!input.value) {
                    console.log('поле не заполнено', input);
                    return false;
                }
        }
    }
    alert("ok");
};


//5
let str = "Написать скрипт, который заменяет слово 'функция' в тексте на 'функция', используя регулярные выражения";
str = str.replace(new RegExp("функция",'g'),"function");
console.log(str);
