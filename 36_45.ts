console.log("Question 36 \n");
/* Question 36
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/
function make_shirt(size: string, message: string): void {
    console.log(`Size: ${size}, Message: ${message}`);
}

// Calling the function for the first problem
make_shirt("Large", "Lovely!");

/* Question 37 
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
// Problem 2: Large Shirts
function make_shirts(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`Size: ${size}, Message: ${message}`);
}

// Creating large and medium shirts with default message
make_shirts();
make_shirts("Medium"); // Medium shirt with default message

// Creating a custom-sized shirt with a different message
make_shirts("Small", "Sunny");

/* Question 38 
Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
*/
console.log("\nQuestion 38 \n");
function describe_city(city: string, country: string = 'Unknown') {
    console.log(`${city} is in ${country}.`);
}

// function call
describe_city('Islamabad', 'Pakistan');
describe_city('New York', 'USA');
describe_city('Lahore'); // Since no country is provided, it will use the default value 'Unknown'.


/* Question 39 
City Names: Write a function called city_country() that takes in the name of a city and its country.
Call your function with at least three city-country pairs, and print the value that’s returned.
*/
console.log("\nQuestion 39\n");
// Function to return the city and its country as a string
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }  
  // Calling the city_country function and printing the returned values
  const cc_pair1 = city_country("Paris", "France");
  const cc_pair2 = city_country("Tokyo", "Japan");
  const cc_pair3 = city_country("London", "United Kingdom");
  
  console.log(cc_pair1);
  console.log(cc_pair2);
  console.log(cc_pair3);


/* Question 40 
Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album
*/
console.log("\nQuestion 40 \n");
interface Album {
    artist: string;
    title: string;
    tracks?: number; // Optional property for tracks
  }
  
  function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
      artist,
      title,
    };
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
    return album;
  }
  
  // Create three albums
  const album1: Album = make_album(' Beyoncé', 'Lemonade');
  const album2: Album = make_album('Kendrick Lamar', 'To Pimp a Butterfly', 12); // with number of tracks
  const album3: Album = make_album(' Taylor Swift', '1989');
  
  // Print the album information
  console.log(album1);
  console.log(album2);
  console.log(album3);
  



/* Question 41 
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
 */
console.log("\nQuestion 41 \n");
function show_magicians(magician_names: string[]): void {
    for (const name of magician_names) {
        console.log(name);
    }
}
const magician_names: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller", "David Blaine"];

show_magicians(magician_names)

/* Question 42  
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
console.log("\nQuestion 42 \n");
function make_great(magician_names: string[]): string[] {
    const great_magicians: string[] = [];
    for (const name of magician_names) {
        great_magicians.push(`The Great Magician ${name}`);
    }
    return great_magicians;
}
const great_magicians = make_great(magician_names);
show_magicians(great_magicians);



/* Question 43 
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */
console.log("\nQuestion 43 \n");
const original_magicians: string[] = [...magician_names]; 

console.log("Original Magicians:");
show_magicians(magician_names);

console.log("\nGreat Magicians:");
show_magicians(great_magicians);

console.log("\nUnchanged Magicians:");
show_magicians(original_magicians);


/* Question 44 
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/
console.log("\nQuestion 44 \n");
function order_sandwich(...items: string[]): void {
    console.log(`You ordered a sandwich with ${items.join(", ")}.`);
  }
  
  order_sandwich("lettuce", "tomato", "Avocado");
  order_sandwich("turkey", "cheese", "Olives", "lettuce");
  order_sandwich("peanut butter", "jelly", "pickles", "onions" ,"mayonnaise");


/* Question 45 
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs. Print the Object that’s returned to make sure all the information was stored correctly.
*/
console.log("\nQuestion 45 \n");

interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
  }
  
  function myCar(manufacturer: string, model: string, ...option: any[]): Car {
    return { manufacturer, model, ...Object.fromEntries(option) };
  }
  
  const car = myCar("Car", "Camry", ["color", "blue"]);
  console.log(car);
  

