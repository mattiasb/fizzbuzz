#!/usr/bin/env node
var from = process.argv[2], 
	to = process.argv[3],
	i, results = [];

for(i = from; i <= to; i++)
	results.push(fizzbuzz(i));

console.log(results.join(", "));

function fizzbuzz(n) {
	if(fizz(n) && buzz(n))
		return "Fizz Buzz";
	if (fizz(n))
		return "Fizz";
	if (buzz(n))
		return "Buzz";
	return n;
}

function fizz(n) {
	return n % 3 === 0;
}

function buzz(n) {
	return n % 5 === 0;
}
