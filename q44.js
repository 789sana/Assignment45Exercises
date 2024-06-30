// Define a function with a rest parameter that accepts items arguments representing our sandwiches
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items:\n");
    items.forEach(function (ingredients) { return console.log("-" + ingredients); });
    console.log("\nNow Enjoy Sandwich!");
}
// Call the function 3 times with three different number of arguments
makeSandwich("Bread", "Chicken", "CreamCheese", "Egg");
makeSandwich("Bread", "Boiledchicken", "Mayo", "Cucumber");
makeSandwich("Bread", "Friedchicken", "Mayo", "Lettuce", "Egg", "Cheese");
