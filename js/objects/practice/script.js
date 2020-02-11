let obj = {
    a: 1,
    b: 2,
    c: 3
}
console.log(obj.c);
console.log(obj["c"]);

for(let prop  in obj)
    console.log(prop);

//2

let city = {}
city.name ="Minsk";
city.population = 787887;


//3 & 5


let Minsk = {
    name: "Minsk",
    population: 19876900
};
let Grodno = {
      name: "Grodno",
      population: 18764
};
let Vitebsk = {
     name: "Vitebsk",
   population: 19864
};
let Gomel = {
    name: "Gomel",
    population: 1987400
};
let Mogilev = {
    name: "Mogilev",
    population: 1987400
};
let Brest = {
    name: "Brest",
    population: 1987400
};

function getInfo() {
    console.log("Город " + this.name + ', ' + "население - " + this.population)
}
let arr = [Minsk, Grodno, Vitebsk, Gomel, Mogilev, Brest];


for (let i = 0; i < arr.length; i++)
    arr[i].getInfo = getInfo;


//4
    function showInfo(arr) {
     for (let i = 0; i < arr.length; i++)   {
         let str = "";
         for(let prop in arr[i])
             console.log( prop + '' + arr[i][prop])
     }
    }

//6

let sasha = {
    "name": "Alexandra",
    "lastname": "Sadovskaya",
    "hobby": "reading",
    "getInfo": function () {
        console.log("my name is  " + this.name + ", my lastname is " + this.lastname + ". I like  " + this.hobby)
    }
}

console.log(sasha.getInfo())
