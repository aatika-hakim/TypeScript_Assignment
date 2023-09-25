console.log("Question 17(a)")
/*
Shrinking Guest List:
You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.
*/

//Start with your program from Exercise 16. 
const guestList = ["ALia","Ayesha","Maryam","Fatima","Zenab","Farwa","Safia","Hira"];
console.log(guestList);

//Inform guests my new dinner table won't arrive in time and I can invite only two guests.
console.log(`I'm sorry to inform you that my new dinner table won’t arrive in time for the dinner so, I can invite only two guests.`);


console.log("\n\nQuestion 17(b)\n")
/*
Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, 
print a message to that person letting them know you’re sorry you can’t invite them to dinner.
*/
let remainingGuest = 2;
let presentGuest = guestList.length;

while(remainingGuest < presentGuest){
    const guestCantCome = guestList.pop();
    console.log(`${guestCantCome}! I'm really sorry that due to this issue I can't invite you for dinner party.`);
    presentGuest--;
}
// Print a message to  the two guests still on your list that they’re still invited.
for(let i = 0; i < guestList.length; i++){
    console.log(`Hello ${guestList[i]}, I am happy to inform you that you are still invited for dinner party.\n`);
}

console.log("\n\nQuestion 17(c)\n")
/*
Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/
for (let j = 0; j <= guestList.length; j++){
    let remainingGuest = guestList.pop();
    console.log("Removed last two names from the list: ", remainingGuest)
}
console.log("\n\n Guest List: ", guestList);


