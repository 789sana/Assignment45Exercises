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
var great_magicians = make_great(magicians_names);
console.log("The Great Magicians:\n");
show_magicians(great_magicians);
