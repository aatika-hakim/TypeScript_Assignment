// Question 11
// Store the names of a few of your friends in a array called names. Print each name by accessing each element in the list, one at a time.

let names:string[] = ["Alia", "Maryam", "Fatima", "Ayesha", "Zenab"];

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

console.log("\n\n Question 14")
// Question 14

// Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestList:string[] = ["ALi", "Ayesha", "Faria"];

function sendInvitation(guest: string) {
  console.log(`Dear ${guest}, You are invited to a dinner on Sunday at my home.`);
}

guestList.forEach(sendInvitation);


/* Question 15
 You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
 You’ll have to think of someone else to invite. */

console.log('\n\nQuestion 15(a)\n');

console.log(guestList);

// New Guest List
let index = guestList.indexOf('Ali');
const GuestWhoCantMakeIt = guestList.splice(index, 1);

console.log(`New Guest List : ${guestList}`);
let inviteMessage = 'I would like to invite you to dinner on Sunday at my home. Thank you.';
for(let i =0; i < guestList.length; i++){
    console.log(`Hello ${guestList[i]}, ${inviteMessage}`);
}

console.log('\n\nQuestion 15(b)\n');






export{};






