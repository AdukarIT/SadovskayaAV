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
    for (let prop in recipe );
    for (let propIng in recipe.ingredients )
        console.log(propIng + " " +  recipe.ingredients[propIng]/recipe.portions +  'gram')
}
getRecipe();
console.groupEnd();