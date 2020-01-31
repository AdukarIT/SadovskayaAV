function getSmallest(a,b,c){
	if ( a < b && a < c) {
		return a;
	}
	else if ( b < a && b < c) {
		return b;
	}
	else{
		return c;
	}
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
	else {
		return (n * getFactorial(n-1));
	}
}
console.log(getFactorial(4));

	// *  *  *  *  * //

