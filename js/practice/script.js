// task 1
function triangle(a, b, c){
	if (a**2 + b**2 === c**2 && a,b,c > 0) {
		return true;
	}
	return false;
}
console.log(triangle(3,4,5));

	// *  *  *  * //
	//task 2

function repeat(str = " ", n = 2){
	let newStr = '';
	while(n){
		newStr += str;
		n--;
	}
	return newStr;
}
console.log(repeat("Добрый вечер! ", 5));

	// *  *  *  * //
	//task 3

function getDiff(pup, desk){
	if (pup % 2)
		pup++;
	if ( pup / 2 == desk) {
		console.log("количество парт и учеников совпадает");
		return ;
	}
	if ( pup / 2 > desk) {
		console.log("не хватает " + ((pup / 2) - desk) + " парт.");
		return;
	}
	console.log("лишние - " + (desk - pup/2) + " парт");

}
getDiff(9, 5);


	// *  *  *  * //
	//task 4
	
 function getMark(m){
 	switch (m) {
 		case 1:
 		case 2:
 		console.log ("Unsatisfactory");
 		break;
 		case 3:
 		case 4: 
		console.log ("Satisfactory");
		break;
 		case 5:
 		console.log ( "Almost good");
 		break;
		case 6: 
 		console.log ("Good");
 		break;
 		case 7:
 		console.log ( "Very good");
 		break;
 		case 8:
 		console.log ( "Almost excellent");
 		break;
 		case 9:
 		console.log ( "Excellent");
 		break;
 		case 10:
 		console.log ("Brilliant");
 		break;
 		default :
 		console.log ("enter the correct number");
 	}
 }
 getMark(7);


   // *  *  *  * //
	//task 5

function acceptNumber (){
	let x;
	do{
		x = +prompt("Введите число");
	}
	while(x);
}
acceptNumber();


  // *  *  *  * //
	//task 6


function getAmount(){
	let sum = 0;
	let amount = 0;
	do{
		x = +prompt("Введите число");
		sum += x;
		amount ++;
	}
	while(sum < 100);
	console.log(" сумма чисел " + sum)
	console.log("Вы ввели " +  amount + " числа")
	return amount;
}
getAmount();



   // *  *  *  * //
	//task 7

function getPrimeNumber(x){
	for (i = 2; i < x; i++) {
		if (x % i == 0) {
			console.log("число не является простым")
			return;
		}
	}
	console.log( "простое число - " + i);	
}
getPrimeNumber(10);



	// *  *  *  * //
		//task 8


function getSeason(x){
	switch (x){
		case 1:
		case 2:
		case 12:
		console.log ("winter");
	 	break;
	 	case 3:
		case 4:
		case 5:
		console.log ("spring");
	 	break;
	 	case 6:
		case 7:
		case 8:
		console.log ("summer");
 		break;
	 	case 9:
		case 10:
		case 11:
		console.log ("autumn");
	 	break;
	 	default :
 		console.log ("An error has occurred");
		}
}
getSeason(6)



	// *  *  *  * //
		//task 9

function getNumbers(){
	for(let i = 10; i <= 99; i ++){
		if ( i % 7 == 0 || i%10 == 7) {
			console.log(i)
		}
	}
}
getNumbers();



	// *  *  *  * //
		//task 10

function getDivisor(){
	for(let i = 2; i <= 20; i ++){
		for(let j = 1; j <= i; j ++){
			if (i % j == 0 ) {	
				console.log( i + " = " + j);
			}
		}
	}
		return;
}
getDivisor();




	// *  *  *  * //
		//task 12

function getBytes(size, unit){
	switch(unit){
		case "Гб":
		console.log(size * 125000000 + " байт");
		break;
		case "Кб":
		console.log(size * 1000 + " байт");
		break;
		case "Мб":
		console.log(size * 1000000 + " байт");
		break;
		default :
 		console.log ("произошла ошибка");
	}
}
getBytes(2, "Мб");


	// *  *  *  * //
		//task 13


function getBiggestDivisor(x, y){
	let n 
	if( x >= y ){
		n = y;
	}
	else {
		n = x;
	}
	let result = 1;
	for( let i = n; i > 0; i --){
		if (x % i == 0 && y % i == 0 ) {
			result *=i
		}
		return result;
	}
}

console.log(getBiggestDivisor(180, 5));
	

	// *  *  *  * //
		//task 14

function getBiggestDivisor2(x, y){
  if (x == y) {
    return x;
  }

  if( y > x ){
    return getBiggestDivisor2(y, x)
  }

  return getBiggestDivisor2(Math.abs(x - y), Math.abs(y));
}
console.log(getBiggestDivisor2(-70, 60));

	// *  *  *  * //
		//task 15

function getEnding(x){
	if (x == 1 && x!==11 && x % 10 ==1) {
		console.log(x + " карандаш");
	}
	else if ( x >= 2 && x <= 4 && x!==12 && x % 10 == 2 || x % 10 == 3 || x % 10 == 4 ) {
		console.log(x + " карандаша");
	}
	else{
		console.log(x + " карандашей");
	}
}

console.log(getEnding(33))

	// *  *  *  * //
		//task 16

function getSumSq(n){
	let h = false;
	for(let i = 9; i >= 1; i--){
		for(let f = i; f >= 1; f--){
			if (i**2 + f**2 === n) {
				console.log( "квадрат " + i + " + " + " квадрат " + f + " = " + n);
				h = true;
			}
		}
	}
	if (!h) {
		console.log("нельзя")
	}
}
getSumSq(50);