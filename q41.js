// creating an array of magicians
var magicians_names = ["David Copperfield", "David Blaine", "Shin Lim", "Derren Brown", "Dynamo", "Juan Tamariz"];
// creating a function to pass the array of magicians
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// call the function to print each magician's names
console.log("Magicians Names:");
show_magicians(magicians_names);
