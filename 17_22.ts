console.log("Question 17(a)")
/*
Shrinking Guest List:
You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.
*/

//Start with your program from Exercise 16. 
const guestList: string[] = ["ALia", "Ayesha", "Maryam", "Fatima", "Zenab", "Farwa", "Safia", "Hira"];
console.log(guestList);

//Inform guests my new dinner table won't arrive in time and I can invite only two guests.
console.log(`I'm sorry to inform you that my new dinner table won’t arrive in time for the dinner so, I can invite only two guests.`);


console.log("\n\nQuestion 17(b)\n")
/*
Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, 
print a message to that person letting them know you’re sorry you can’t invite them to dinner.
*/
let remainingGuest: number = 2;
let presentGuest: number = guestList.length;

while (remainingGuest < presentGuest) {
    const guestCantCome = guestList.pop();
    console.log(`${guestCantCome}! I'm really sorry that due to this issue I can't invite you for dinner party.`);
    presentGuest--;
}
// Print a message to  the two guests still on your list that they’re still invited.
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hello ${guestList[i]}, I am happy to inform you that you are still invited for dinner party.\n`);
}

console.log("\n\nQuestion 17(c)\n")
/*
Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/
for (let j = 0; j <= guestList.length; j++) {
    let remainingGuest = guestList.pop();
    console.log("Removed last two names from the list: ", remainingGuest)
}
console.log("\nGuest List: ", guestList);

console.log("\n\nQuestion 18")
/* Question 18
Seeing the World: Think of at least five places in the world you’d like to visit.
Store the locations in a array. Make sure the array is not in alphabetical Order.
*/
let places: String[] = ["Turkey", "Pakistan", "Paris", "Egypt", "Los Angeles"];


// Print your array in its original order
console.log("Array in Original Order:", places);

//  Print your array in alphabetical order without modifying the actual list.
console.log("Array in Alphabetical Order:", [...places].sort());

// Show that the original array is still in its original Order
console.log("Array in Original Order after sorting:", places);

// Print your array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical Order:", [...places].sort().reverse());

// Show that your array is still in its original order by printing it again.
console.log("Array in Original Order after reverse sorting:", places);

// Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
console.log("Reversed Order:", places);

// Reverse the order of your list again. Print the list to show it’s back to its original order.
places.reverse();
console.log("Array in Original Order after double reverse:", places);

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
places.sort();
console.log("Array in Alphabetical Order after sorting:", places);

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
places.reverse();
console.log("Reverse alphabetical Order after sorting:", places);


console.log("\n\n Question 19\n")
