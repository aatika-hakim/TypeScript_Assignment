"use strict";
// Question 1
//Store a person’s name in a variable, and print a message to that person. 
Object.defineProperty(exports, "__esModule", { value: true });
const personName = "Red rose";
console.log(`Hello ${personName}, What do you do mowadays?`);
//  Question 2
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("Person Name: " + personName); //Red rose
// LowerCase
const lowercaseName = personName.toLowerCase();
console.log("Lowercase: " + lowercaseName); //red rose
// UpperCase
const uppercaseName = personName.toUpperCase();
console.log("Uppercase: " + uppercaseName); //RED ROSE
// TitleCase
const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};
const titlecaseName = toTitleCase(personName);
console.log("Titlecase: " + titlecaseName);
// Question 3
//Print the quote and the name of its author. 
console.log("Allama Iqbal said, \"Islam is itself destiny and will not suffer destiny.\"");
// Question 4
//Store the famous person’s name in a variable. Then compose your message and store it in a new variable. Print your message.
let author = "Allama Iqbal";
let msg = "Islam is itself destiny and will not suffer destiny.";
console.log(`${author} said, "${msg}"`);
