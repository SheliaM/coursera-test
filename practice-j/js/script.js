// ***** String concatenation
// var string = "Hello";
// string += " World";
// console.log(string + "!");

// // Object creation
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstname = "Mark";
// company.ceo.favcolor = "blue";
// console.log(company);
// console.log("Company CEO name is: " + company.ceo.firstname);

// Functions
function multiply (x, y) {
	return x * y;
}

multiply.version = "v.1.0.0";
console.log(multiply.version);

// Function factory
function makeMultiplier(multiplier) {
	var myFunc = function (x) {
		return multiplier * x;
	};
	return myFunc;
};

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

// Passing functions as arguments
function doOperationOn(x, operation) {
	return operation(x);
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);

console.log(result);