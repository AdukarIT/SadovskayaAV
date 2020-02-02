function getSmallest(a,b,c){
	if ( a < b && a < c) {
		return a;
	}
	if ( b < a && b < c) {
		return b;
	}
		return c;
}
	console.log(getSmallest(3,6,10));


	// *  *  *  *  * //

function getSeconds(d, h = 0, m = 0){
	let seconds = d*86400 + h*360 + 60;
	return seconds;
}
console.log(getSeconds(3,5,4));


	// *  *  *  *  * //


function getFactorial(n){
	if (n === 1) {
		return n;
	}
	return (n * getFactorial(n-1));
}
console.log(getFactorial(4));


	// *  *  *  *  * //
    

function getInvertedNum(num) {
	num = Math.abs(num)	
  let result = (num % 10); 
  num = (num - result)/10; 
  
  let deg = 0;
  let temp = num;
  while(temp > 1){
  	temp = temp / 10;
  	deg++;
  }

  if(num){
  	result = (result * (10 ** deg)) + getInvertedNum(num);	
  }

  return result;
}
console.log(getInvertedNum(3909))


		// *  *  *  *  * //


function quadratic(a ,b ,c){
	let d = b**2 - (4 * a * c);
	
	if (d < 0){
		console.log("корней нет");
		return 0;
	}

	let x = (-b + Math.sqrt(d)) / (2 * a);
	if( d === 0 ){
		console.log(x)
		return 1;
	}
	
	console.log(x);
	console.log((- b - Math.sqrt(d)) / (2 * a));
	return 2;
}
quadratic(1,2,1);
