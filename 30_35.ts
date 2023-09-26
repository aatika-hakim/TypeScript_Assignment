console.log("Question 30 \n");
/* Question 30 
Hello Admin: Make a array of five or more userNames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again. */

let userNames: string[] = ["admin", "Fatima", "Safia", "Hira", "Fiaza"];
for (let i: number = 0; i < userNames.length; i++) {
    if (userNames[i] == "admin") {
        console.log("Hello admin, would you like to see a status report?")
    } else {
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`)
    }
}


console.log("\nQuestion 31 \n");
/* Question 31 
No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
If the list is empty, print the message We need to find some users!
Remove all of the userNames from your array, and make sure the correct message is printed.
*/

if (userNames.length > 0) {
    for (const username of userNames) {
        if (username.toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
} else {
    console.log('We need to find some users!');
}
// removing all users
if (userNames.length > 0) {
    userNames.length = 0;
    console.log('All usernames have been removed.');
  } else {
    console.log('The list of users is already empty.');
  }


console.log("\nQuestion 32 \n");
/* Question 32
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
Make a list of five or more userNames called users.
Make another list of five userNames called newUsers. Make sure one or two of the new userNames are also in the users list.
Loop through the newUsers list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
let users: string[] = ["Fatima", "Maryam", "Faria", "Rabia", "Zenab"];
let newUsers: string[] = ["Ayesha", "Khadija", "Zahra", "Noor", "Sadia"];
for (let i = 0; i < newUsers.length; i++) {
    let username_exists: boolean = false;
    for (let j = 0; j < users.length; j++) {
        if (newUsers[i].toLowerCase() === users[j].toLowerCase()) {
            username_exists = true; break;
        }
    }
    if (username_exists) {
        console.log(`Try another, the username '${newUsers[i]}' is already taken.`);
    } else {
        console.log(`The username '${newUsers[i]}' is availabe.`)
    }
}


console.log("\nQuestion 33 \n");
/* Question 33
Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
Store the numbers 1 through 9 in a array.
Loop through the array.
Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
*/
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] == 1) {
        console.log(`${numbers[i]}st`);
    } else if (numbers[i] == 2) {
        console.log(`${numbers[i]}nd`)
    } else if (numbers[i] == 3) {
        console.log(`${numbers[i]}rd`)
    } else {
        console.log(`${numbers[i]}th`)
    }
}
console.log("\nQuestion 34 \n");
/* Question 34 
Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement.
Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence.
*/

const pizzas = ["Meat Lovers", "Sicilian", "Margherita"]
for (const pizza of pizzas) {
    console.log(`I like ${pizza} pizza`);
}
console.log("I love to eat pizza!");


console.log("\nQuestion 35 \n");
/* Question 35 
Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
Modify your program to print a statement about each animal.
Add a line at the end of your program stating what these animals have in common.
*/

const pets: string[] = ["parrot", "cat", "rabbit"]
for (const pet of pets) {
    console.log(`${pet} would make a great pet.`);
}
console.log("Any of these pets would make a great pet!");
