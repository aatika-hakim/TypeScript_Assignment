//Question 6
// Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

console.log("          Red rose           "); // with whitspace

console.log("          Red rose           ".trim()); // no whitespace


// Question 7,8
// Write addition, subtraction, multiplication, division operations that each result in the number 8.

console.log(4+4);//addition
console.log(16-8);//subtraction,
console.log(4*2);//multiplication
console.log(16/2);//division


// Question 9
// Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let num = 7;
console.log(`My favourite number is ${num}`);


//Question 10
// Adding Comments 

let personName = "Red Rose";
 
// It is single line comment
//  toLowerCase() will make all letters small like red rose
console.log(personName.toLowerCase());

/*
Multi line comment
toUpperCase will return all letters Capital
like RED ROSE
*/
console.log(personName.toUpperCase());

export{};
