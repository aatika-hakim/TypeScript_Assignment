"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Question 26 \n");
/* Question 26
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
*/
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let alien_color = "green";
if (alien_color == "green") {
    console.log("You just earnd 5 points");
}
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// Write one version of this program that runs the if block and another that runs the else block.  
if (alien_color != "green") {
    console.log("You just earnd 5 points");
}
else {
    console.log("You just earnd 10 points.");
}
console.log("\nQuestion 27 \n");
/* Question 27
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain. */
//  If the alien is green, print a message that the player earned 5 points.
let alienColor = "green";
if (alienColor == "green") {
    console.log("You just earnd 5 points");
}
//  If the alien is yellow, print a message that the player earned 10 points.
else if (alienColor == "yellow") {
    console.log("You just earned 10 points");
}
//  If the alien is red, print a message that the player earned 15 points.
else if (alienColor == "red") {
    console.log("You just earned 15 points");
}
//  Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alienColor1 = "green";
if (alienColor1 == "green") {
    console.log("The player earned 5 points.");
}
else if (alienColor1 == "yellow") {
    console.log("The player earned 10 points.");
}
else if (alienColor1 == "red") {
    console.log("The player earned 15 points.");
}
