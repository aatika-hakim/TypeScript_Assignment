console.log("Question 23 \n")
/* Conditional Tests: Write a series of conditional tests. 
Print a statement describing each test and your prediction for the results of each test */ 

let myLaptop: string = "hp";

//true statements
console.log("myLaptop == 'hp'?", myLaptop == "hp"); 
console.log("myLaptop != 'mac'?", myLaptop != 'mac');
console.log("myLaptop === 'hp'?", myLaptop === 'hp');
console.log("myLaptop !== 'mac'?", myLaptop !== 'mac');
console.log("myLaptop !== 'mac'?", myLaptop !== 'mac');

//false statements
console.log("myLaptop == 'mac'?", myLaptop == 'mac');
console.log("myLaptop != 'hp'?", myLaptop != 'hp');
console.log("myLaptop === 'mac'?", myLaptop === 'mac');
console.log("myLaptop !== 'hp'?", myLaptop !== 'hp');
console.log("myLaptop !== 'lenovo'?", myLaptop !== 'lenovo');

/* Question 24
More Conditional Tests: You don’t have to limit the number of tests you create to 10. */
console.log("\nQuestion 24 \n")

let person1:string = "Fatima";
let person2: string = "Abida";

console.log("Is person1 == person2?", person1 == person2);      //False
console.log("Is person1 != person2?", person1 != person2);     //True

// Tests using the lower case function
let fact1: string = "Rose Mary IS VERY BEAUTIFUL FLOWER.";
let fact2: string = "rose mary is very beautiful flower";

console.log("Is fact1.toLowerCase() == fact2?", fact1.toLowerCase() === fact2);

//Greater than(>) and less than(<), greater than or equal to(>=), and less than or equal to(<=) tests
let num1: number = 10; 
let num2: number = 5;

console.log("Is num1 > num2?", num1 > num2); // True
console.log("Is num1 < num2?", num1 < num2); // False
console.log("Is num1 >= num2?", num1 >= num2); // True
console.log("Is num1 <= num2? ", num1 <= num2); // False

// Tests using "AND(&&)" and "OR(||)" operators
let age: number = 18;
let category:string = "young";

console.log("Is age >= 18 and category == 'young'?", age >= 18 && category == 'young');  //True
console.log("Is age >= 18 or category == 'adult'?", age >= 18 || category == 'adult' ); // True
console.log();

// Test whether an item is in an array
let persons: string[] = ["ali", "fatima", "zenab"];

console.log("Is 'ali' in persons?", persons.includes('ali')); //True

// Test whether an item is not in an array
console.log("Is 'maryam' not in persons?", !persons.includes('maryam')); //True

/* Question 25
Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
 */
console.log("\nQuestion 25\n");

let alien_color: string = "green";

if(alien_color === "green"){
    console.log("You have just earnd 5 points");
}

// If test fails then 2nd version

let alien_colors: string = "red";

if(alien_colors === "green"){
    console.log("You just earnd 5 points")
}
