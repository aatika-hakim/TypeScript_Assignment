"use strict";
console.log("Question 17(a)");
/*
Shrinking Guest List:
You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
*/
//Start with your program from Exercise 16. 
const guestList = ["ALia", "Ayesha", "Maryam", "Fatima", "Zenab", "Farwa", "Safia", "Hira"];
console.log(guestList);
//Inform guests my new dinner table won't arrive in time and I can invite only two guests.
console.log(`I'm sorry to inform you that my new dinner table won’t arrive in time for the dinner so, I can invite only two guests.`);
console.log("\n\nQuestion 17(b)\n");
/*
Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list,
print a message to that person letting them know you’re sorry you can’t invite them to dinner.
*/
let remainingGuest = 2;
let presentGuest = guestList.length;
while (remainingGuest < presentGuest) {
    const guestCantCome = guestList.pop();
    console.log(`${guestCantCome}! I'm really sorry that due to this issue I can't invite you for dinner party.`);
    presentGuest--;
}
// Print a message to  the two guests still on your list that they’re still invited.
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hello ${guestList[i]}, I am happy to inform you that you are still invited for dinner party.\n`);
}
console.log("\n\nQuestion 17(c)\n");
/*
Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/
for (let j = 0; j <= guestList.length; j++) {
    let remainingGuest = guestList.pop();
    console.log("Removed last two names from the list: ", remainingGuest);
}
console.log("\nGuest List: ", guestList);
console.log("\n\nQuestion 18");
/* Question 18
Seeing the World: Think of at least five places in the world you’d like to visit.
Store the locations in a array. Make sure the array is not in alphabetical order.
*/
let places = ["Turkey", "Pakistan", "Paris", "Egypt", "Los Angeles"];
// Print the array in its original order
console.log("Original order:", places);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...places].sort());
// Show that the original array is still in its original order
console.log("Original order after sorting:", places);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...places].sort().reverse());
// Show that the original array is still in its original order
console.log("Original order after reverse sorting:", places);
// Reverse the order of the list
places.reverse();
console.log("Reversed order:", places);
// Reverse the order of the list again to get back to the original order
places.reverse();
console.log("Original order after double reverse:", places);
// Sort the array in alphabetical order
places.sort();
console.log("Alphabetical order after sorting:", places);
// Sort the array in reverse alphabetical order
places.reverse();
console.log("Reverse alphabetical order after sorting:", places);
