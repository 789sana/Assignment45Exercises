// creating an array of magicians
var magicians_names = ["David Copperfield", "David Blaine", "Shin Lim", "Derren Brown", "Dynamo", "Juan Tamariz"];
// creating a function to pass the array of magicians
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// creating a function to add "The great" before magicians names
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// making a copy of original array of magicians names through .slice() function
var copy_magician_names = magicians_names.slice();
// modify the coppied array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magician_names);
// Show both arrays Original and Copied
// original
console.log("Original Array:\n");
show_magicians(magicians_names);
// Copied
console.log("\nCopied Array:\n");
show_magicians(copy_great_magicians);
