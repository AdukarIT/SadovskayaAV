
//task 1 
console.group('task1: Generate random array')


function getRandomArray(len = 10){
	let array = [];
	for( let i = 0; i < len; i++){
		array [i] =  Math.floor(Math.random()*10);
	}
	console.log("Random array: " , array);
	return array;
}
getRandomArray();
console.groupEnd();
  

// task 2
console.group('task2: Write digits greater then average')
function getNumber(array){
	let sum = 0;
	for(let i = 0; i < array.length; i++){
		sum = sum + (array[i]);
	}
	let mid = sum / array.length;
	console.log("average", mid)
	let gta = [];
	for(let i = 0; i < array.length; i++){
		if (array[i] > mid) {
			gta.push(array[i]);
		}
	}
	return gta;
}
console.log('Result: ', getNumber(getRandomArray()));
console.groupEnd();



// //task 3
console.group('task3: Write last two smallest digits')
function getSmallest(array){
   	for (let i = 0; i< array.length; i++){
   	 	for (let j=0; j< array.length; j++){
        	if (array[i] > array[j]){
		        let bols = array[i];
		        array [i] = array [j];
		        array [j]= bols;
        	} 
    	}
   	}   
	
	return [array.pop(), array.pop()];
}
console.log("Result: ", getSmallest(getRandomArray()));
console.groupEnd();


//task 4
console.group('task4: Remove digits less then 3')
function replaceZeros(array){
	let n = 0;
	for(let i = 0; i < array.length; i++){
		if ((array.length - i) === n ) break;
		if (array[i] < 3) {
			n++;
			for(let j = i; j < array.length - 1; j++){
				array[j] = array[j + 1];
			}
			array[array.length - 1] = 0;
			i--;
		}
	}
	return array;
}
console.log("Result: ", replaceZeros(getRandomArray()))
console.groupEnd();

//task 5 
console.group('task5: Sum elements of two arrays')
function getSum(array1, array2){
	let res = 0;
	let sum = [];
	for(let i = 0; i < array1.length; i++){
		res = array1[i] + array2[array2.length  - 1 - i];
		sum.push(res);
	}
	return sum;
}
console.log("Result: ", getSum(getRandomArray(), getRandomArray()))
console.groupEnd();
