
//1
console.group('task1:  take the  number in the Unicode table as a parameter. ' +
    'Count the number of such symbols in all elements of the array.');
const Arr = ["abcee","aaa", "ce", "dee", "d", "e"];
function getSymbols(num, arr){
    let count = 0;
    const letter = String.fromCharCode(num);
    for (let word of arr){
        for (let i = 0; i < word.length; i ++){
            if (word[i] == letter){
                count++;
            }
        }
    }
    return (letter + ": " + count);
}
console.log(getSymbols(97, Arr));
console.groupEnd();

//2
console.group('task2: get the partial function of the function from task 1, fixing the desired symbol.');

function letterCounter(num){
    return function(ar) {
        return getSymbols(num, ar);
    }
}
const countOfE = letterCounter(101);
console.log(countOfE(Arr));
console.groupEnd();

//3
console.group(" task3: Filter the array of cities so that only cities from the state of California that grew " +
    "in population from 2000 to 2013 are left in it.");
let newArr = [];
newArr = data.filter(function(elem){
    return (elem.state == "California" && parseFloat(elem.growth_from_2000_to_2013) > 0);
});
console.log(newArr);
console.groupEnd();

//4
console.group("task4: Calculate how many millions of people live in all cities at latitudes of 25 to 30 degrees");
let amountOfPopulation = 0;
let newArr2 = data.filter(function (elem) {
    return(elem.latitude > 25 && elem.latitude  < 30);
});
let sum = 0;
for (let i = 0; i < newArr2.length; i++){
   sum += parseInt(newArr2[i].population);
}
console.log(Math.floor(sum/1000000));
console.groupEnd();

//5
console.group("task5: Create an array of only those cities that begin with the letter D, while sorting the elements of this array by city name.");
let newArr3 = data.filter(function (elem) {
    return (elem.city.indexOf("D") == 0);
});
newArr3.sort(function (a, b) {
    if (a.city > b.city) {
        return 1;
    }
    if (a.city < b.city) {
        return -1;
    }
    return 0;
});
console.log(newArr3);
console.groupEnd();
