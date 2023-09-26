console.log("Question 26 \n");
/* Question 26 
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain. 
*/

// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

let alien_color = "green"
if (alien_color == "green") {
    console.log("You just earnd 5 points")
}
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// Write one version of this program that runs the if block and another that runs the else block.  

if (alien_color != "green") {
    console.log("You just earnd 5 points")
} else {
    console.log("You just earnd 10 points.")
}

console.log("\nQuestion 27 \n");
/* Question 27 
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain. */
//  If the alien is green, print a message that the player earned 5 points.
let alienColor: string = "green"
if (alienColor == "green") {
    console.log("You just earnd 5 points")
}
//  If the alien is yellow, print a message that the player earned 10 points.
else if (alienColor == "yellow") {
    console.log("You just earned 10 points")
}
//  If the alien is red, print a message that the player earned 15 points.
else if (alienColor == "red") {
    console.log("You just earned 15 points")
}
//  Write three versions of this program, making sure each message is printed for the appropriate color alien.


let alienColor1: string = "green";

if (alienColor1 == "green") {
    console.log("The player earned 5 points.");
} else if (alienColor1 == "yellow") {
    console.log("The player earned 10 points.");
} else if (alienColor1 == "red") {
    console.log("The player earned 15 points.");
}


let alienColor2: string = "yellow";

if (alienColor2 == "green") {
    console.log("The player earned 5 points.");
} else if (alienColor2 == "yellow") {
    console.log("The player earned 10 points.");
} else if (alienColor2 == "red") {
    console.log("The player earned 15 points.");
}


let alienColor3: string = "red";

if (alienColor3 == "green") {
    console.log("The player earned 5 points.");
} else if (alienColor3 == "yellow") {
    console.log("The player earned 10 points.");
} else if (alienColor3 == "red") {
    console.log("The player earned 15 points.");
}


console.log("\nQuestion 28 \n");
/* Question 28
Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
If the person is less than 2 years old, print a message that the person is a baby.
If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
If the person is at least 4 years old but less than 13, print a message that the person is a kid.
If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
If the person is at least 20 years old but less than 65, print a message that the person is an adult.
If the person is age 65 or older, print a message that the person is an elder.
*/

let age: number = 22;
if (age < 2) {
    console.log("The person is baby.")
} else if (age >= 2 && age < 4) {
    console.log("The person is the toldder.")
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.")
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.")
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.")
} else {
    console.log("The person is an elder")
}

