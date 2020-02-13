//1
function getArray(){
    let arr = [];
    for (let i = 0; i < 20; i ++){
        arr[i] = Math.floor(Math.random()*50 + 1);
    }
    console.log(arr)
}
getArray();

//2

function getArray2(len, min, max) {
    let arr = [];
    for (let i = 0; i < len; i ++){
        arr[i] = Math.floor(Math.random()*(max - min + 1) + min);
    }
    console.log(arr);
}
getArray2(10, 5, 10);

//3
 function getStr(str) {
    console.log (str.indexOf("https://") == 0 && str.lastIndexOf(".html") == str.length - 5)
 }
 getStr("https://hjkkhj.html");

 //4

function getAmount(str, s){
    let count = 0;
    for (let i = 0; i < str.length; i++){
      count += (str[i] == s);
    }
    console.log(count);
}
getAmount("some text", "e")