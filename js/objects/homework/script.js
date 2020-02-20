//1
console.group('task1: is there a line in the object');

function getName(obj, str){
    console.log(str in obj);
}
getName(circle = {y:61, x: 45}, "y");
console.groupEnd();

//2
console.group('task2: create an object to store recipes');
let recipe = {
    name: "Dressed Herring",
    ingredients: {
        beets: 500,
        carrots: 200,
        onion: 100,
        herring: 500,
        potatoes: 200,
        mayonnaise: 100
    },
    portions: 10
}

function getRecipe(){
    for (let propIng in recipe.ingredients )
        console.log(propIng + " " +  recipe.ingredients[propIng]/recipe.portions +  ' gram')
}
getRecipe();
console.groupEnd();


//3
console.group("task3: calculate cylinder volume")
let cylinder = {
    r: 5,
    h: 6,
}
cylinder.v = function(){
    let volume = 3.14 * this.r**2 * this.h;
    return volume;
}
console.log(cylinder.v())
console.groupEnd();

// 4
console.group('task4: Сreate an object and add methods to it ')
let penguin = {
    name: "Captain Cook",
    author: "Richard and Florence Atwater",
    source: "Mr. Popper's Penguins",
}
penguin.canFly = false;
penguin.sayHi = function(){
    console.log("Hi! My name is " + penguin.name + ". You can meet me in the book " + penguin.source + " which wrote " + penguin.author)
}
penguin.sayHi();
penguin.fly = function(){
    if (this.canFly){
        console.log(("I can fly"))
    }
    console.log("I can not fly")
}
console.log(penguin.fly());
console.groupEnd();