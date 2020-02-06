
//task 1 

function getRandomArray(len){
	let array = [];
		for( let i = 0; i < len; i++){
			array [i] =  Math.floor(Math.random()*10);
		}
		console.log(array)
}
console.log(getRandomArray(10));





