let placesName:string[]=["Turkey","China","Iran","France","Banglore"];
// print your array in its original order
console.log("original order:", placesName);
// print your array in alphabetical oder without modifying the actual list
console.log("Alphabetical order:",[...placesName].sort());
//show that your array is still in its original order by printing it
console.log("Original order after sorting:", placesName);
// print your array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical Order:",[...placesName].sort().reverse());
//show that your array is still in its original order by printing it again
console.log("Original Order after reversing sorting:",placesName);
// Reverse the order of the list
placesName.reverse();
console.log("Reversed order:",placesName);
// Reverse the order of the list again to get back to the original order
placesName.reverse();
console.log("Back to original order:",placesName);
// sort the array in alphabetical order
placesName.sort();
console.log("Sorted in Alphabetical order:",placesName);
// Sort the array in reverse Alphabetical order
console.log("Sorted in Reverse Alphabetical Order:",[...placesName].sort().reverse());







