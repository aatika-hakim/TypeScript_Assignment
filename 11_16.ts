// Question 11
// Store the names of a few of your friends in a array called names. Print each name by accessing each element in the list, one at a time.

let names:string[] = ["Alia", "Jamil", "Fatima", "Farooq", "Sadia", "Ali"];

let i = 0;

while (i < names.length) {
    let element = names[i];
    console.log(element);
    i++;
}
console.log("\n\n Question 12")

// Question 12
//Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same and should be personalized with the person’s name.

let x = 0;
while (x < names.length) {
    let arr= names[x];
    console.log(`Hello ${arr}, Are you familiar with arrays?`)
    x++;
}
console.log("\n\n Question 13")

// Question 13
let transport :string[] = ["Bike", "Car", "Aeroplane"];

let y = 0;
while (y < transport.length) {
    let modes = transport[y];
    console.log("I like most to travel on" + " " + modes + ".");
    y++;
}
/*
Question 14
 Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner.
*/
console.log("\n\n Question 14")


let guestList:string[] = ["ALi", "Ayesha", "Faria", "Maryam", "Fatima", "Rabia"];
let invitations: string = " You are invited to a dinner on Sunday at my home."

const sendInvitation = (guest: string) => {
  console.log(`Hello ${guest}!, ${invitations}`);
}
guestList.forEach(sendInvitation);


/* Question 15
 You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
 You’ll have to think of someone else to invite. */

console.log('\n\nQuestion 15(a)\n');
console.log(guestList);

// New Guest List
let index = guestList.indexOf('Faria');
var guestCantMakeIt = guestList.splice(index, 1);

console.log(`New Guest List : ${guestList}`);
let inviteMessage = 'I would like to invite you to dinner on Sunday.';

for(let i =0; i < guestList.length; i++){
    console.log(`Hello!! ${guestList[i]}, ${inviteMessage}`);
}

console.log('\n\nQuestion 15(b)\n');
/* 
Start with your program from Exercise 14. 
Add a print statement at the end of your program stating the name of the guest who can’t make it.
 */
console.log(`${guestCantMakeIt} can't come for dinner`);



console.log('\n\nQuestion 15(c)\n');
/* 
Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
*/

console.log(`Old Guest List: ${guestList}`)
//New Guest List
let index1 = guestList.indexOf('Faria');
var guestCantMakeIt = guestList.splice(index1, 1 , "Zenab");

console.log(`New Guest List : ${guestList}`);

console.log('\n\nQuestion 15(d)\n');
/* 
Print a second invitations, one for each person who is still in your list.
*/

console.log(guestList);

let secInvitation = "I would like to invite you to a dinner party at my home on Sunday.";
for(let i =0; i < guestList.length; i++){
    console.log(`Hello! ${guestList[i]}, ${secInvitation}`)
}


/* Question 16
More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
 */
console.log('\n\nQuestion 16\n');

console.log(guestList);

// iAdd three new guests to the list
guestList.push("Farwa","Safia","Hira");
console.log(`New Guest List : ${guestList}`);

//Inform guests that you found a bigger dinner table. So, you are inviting more guests.
console.log(`Hello, I have found a bigger dinning table so I planned to invite some more guests for the party.`);

for(let i =0; i < guestList.length; i++){
    console.log(`Hello!! ${guestList[i]}, ${inviteMessage}`);
}



export{};






