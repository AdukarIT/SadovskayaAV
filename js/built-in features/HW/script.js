//1
console.group('task1,2: the function takes an array and creates a new array');
function getArray(len, min, max) {
    let arr = [];
    for (let i = 0; i < len; i ++){
        arr[i] = Math.floor(Math.random()*(max - min + 1) + min);
    }
    return arr;
}
getArray(10, 5, 10);

function getNewArr(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] =  {
            initial: arr[i],
            sqrt: Math.sqrt(arr[i]),
            sqrt2: Math.sqrt(arr[i]).toFixed(2),
        };
        if (Math.round(arr[i].sqrt) == Math.floor(arr[i].sqrt)){
            arr[i].floor = true;
            arr[i].ceil = false;
        }
        else if(Math.round(arr[i].sqrt) == Math.ceil(arr[i].sqrt)){
                arr[i].floor = false;
                arr[i].ceil = true;
            }
    }
console.log(arr)
}
getNewArr(getArray(10, 5 , 10));
console.groupEnd();

//3
console.group('task3: function that determines if a string is a palindrome');
function getPalindrome(str){
    str = str.toLowerCase();
    str = str.replace(/\s/g, "");
    for(let i = 0; i < str.length/2; i++){
        if (str[i] !== str[ str.length - 1 - i]){
            return false;
        }
    }
    return true;

}
console.log(getPalindrome("А роза упала на лапу Азора"));
console.groupEnd();