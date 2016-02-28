/* The Pluralizer
Write a program that:References a noun and a number.
Console.logs the number and a pluralized form of the noun, such as "5 cats" or "1 dog".
Bonus: Make it handle a few collective nouns like "sheep" and "geese".*/


var noun  ;
var number  ;

var Pluralizer = function (number, noun) {
if (number === 1) {
	console.log("1 " + noun)
	} else if (number > 1 && noun === "goose") {
		console.log(number + " geese")
	} else if (number > 1 ) {
		console.log(number + " "+ noun+"s")
	} else if (noun === "sheep") {
		console.log(number + "sheep")
	}
	};