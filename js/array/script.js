
//task 1 
let array = [];
function getRandomArray(len){
		for( let i = 0; i < len; i++){
			array [i] =  Math.floor(Math.random()*10);
		}
		console.log(array);
}
console.log(getRandomArray(10));
  

//task 2

function getNumber(){
	let sum = 0;
	for(let i = 0; i < array.length; i++){
		sum = sum + (array[i]);
	}
	let mid = sum / array.length;
	for(let i = 0; i < array.length; i++){
		if (array[i] > mid) {
			console.log(array[i])
		}
	}
}
console.log(getNumber());


//task 3

// function getSmallest(){
// 	let s = array[0];
// 	for(let i = 1;i< array.length; i++ ){
// 		if (array[i] < s) {	
// 			s = array[i]
// 		}
// 	}
// 	console.log(s)

// }
// console.log(getSmallest());

function getSmallest(){
	let small = '';
   	for (let i = 0; i< array.length; i++){
    	for (let j=0; j< array.length; j++){
        	if (array[i] > array[j]){
	            let bols = array[i];
	            array [i] = array [j];
	            array [j]= bols;
        	} 
    	}
   	}   
  	console.log(array);
		small = array.pop() + " " + array.pop();
	
  	console.log(small);
}
console.log(getSmallest());


