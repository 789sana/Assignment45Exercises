// creating an array of magicians
let magicians_names:string[]=["David Copperfield","David Blaine","Shin Lim","Derren Brown","Dynamo","Juan Tamariz"]

// creating a function to pass the array of magicians
function show_magicians(magicians:string[]){
     magicians.forEach(name=>console.log(name));
}
// call the function to print each magician's names
console.log("Magicians Names:");
show_magicians(magicians_names);
