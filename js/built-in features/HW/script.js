//1,2
console.group('task1,2: the function takes an array and creates a new array');

function getArray(len, min, max) {
    let arr = [];
    for (let i = 0; i < len; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return arr;
}

getArray(10, 5, 10);

function getNewArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = {
            initial: arr[i],
            sqrt: Math.sqrt(arr[i]),
            sqrt2: Math.sqrt(arr[i]).toFixed(2),
        };
        if (Math.round(arr[i].sqrt) == Math.floor(arr[i].sqrt)) {
            arr[i].floor = true;
            arr[i].ceil = false;
        } else if (Math.round(arr[i].sqrt) == Math.ceil(arr[i].sqrt)) {
            arr[i].floor = false;
            arr[i].ceil = true;
        }
    }
    return arr;
}

console.log(getNewArr(getArray(10, 5, 10)));
console.groupEnd();

//3
console.group('task3: function that determines if a string is a palindrome');

function getPalindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/\s/g, "");
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(getPalindrome("А роза упала на лапу Азора"));
console.groupEnd();

//4
console.group("task4: get the most common symbol");

function getSymbol(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        let key = str[i];
        if (!obj[key]) {
            obj[key] = 1
        } else {
            obj[key]++
        }
    }
    let count = 0;
    for (let prop in obj) {
        if (obj[prop] > count) {
            count = obj[prop];
        }
    }

    for (let prop in obj) {
        if (obj[prop] < count) {
            delete obj[prop]
        }
    }

    return obj;
}

console.log(getSymbol("Напишите функцию, которая определяет ЕЕЕЕaaaadddd"));
console.groupEnd();

//5
console.group("task5:replace each search substring with replace ");

function replaceSub(str, search, replace) {
    str = str.replace(search, replace);
    console.log(str)
}

replaceSub("Напишите функцию", "На", "за");
console.groupEnd();

//6
console.group("task6: replace lowercase with uppercase");

function getUpper(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i - 1] == " ") {
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i];
        }
    }
    console.log(newStr);
}

getUpper("Напишите функцию, которая замяняет первую букву")
console.groupEnd();

//7
console.group("task7: replaces all repeated symbols in a string with asterisks");

function replSymb(str) {
        let obj = {};
        for(let i = 0; i < str.length; i++) {
            let symb = str[i].toString();
            obj[symb] = obj[symb] + 1 || 1;
        }
        let newStr = '';
        for (let symb in obj) {
            if (symb != " ") {
                if (obj[symb] === 1) {
                    newStr += symb;
                } else {
                    newStr += symb + '*';
                }
            }
            else newStr += " ";
        }
        return newStr;
}
console.log(replSymb("Привет. Как дела"));
console.groupEnd();


//8
console.group("task8: get the current day of the week ");
function getDay1() {
    let now = new Date();
    now = now.getDay();
    switch (now) {
        case 1:
            console.log("понедельник");
            break;
        case 2:
            console.log("вторник");
            break;
        case 3:
            console.log("среда");
            break;
        case 4:
            console.log("четверг");
            break;
        case 5:
            console.log("пятница");
            break;
        case 6:
            console.log("суббота");
            break;
        case 0:
            console.log("воскресение");
            break;
    }
}
getDay1();
console.groupEnd();

 //9
console.group("task9: accept the date and get the day of the week ");

function getDay2(date) {
    let day = (new Date(+date.slice(6, 10), +date.slice(3, 5) - 1, +date.slice(0, 2))).getDay();
    switch(day) {
        case 1:
            console.log("понедельник");
            break;
        case 2:
            console.log("вторник");
            break;
        case 3:
            console.log("среда");
            break;
        case 4:
            console.log("четверг");
            break;
        case 5:
            console.log("пятница");
            break;
        case 6:
            console.log("суббота");
            break;
        case 0:
            console.log("воскресение");
            break;
    }
}
console.log(getDay2(prompt("введите дату в формате \"ДД-ММ-ГГГГ\"")));
console.groupEnd();
