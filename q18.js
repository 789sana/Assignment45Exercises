var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesName = ["Turkey", "China", "Iran", "France", "Banglore"];
// print your array in its original order
console.log("original order:", placesName);
// print your array in alphabetical oder without modifying the actual list
console.log("Alphabetical order:", __spreadArray([], placesName, true).sort());
//show that your array is still in its original order by printing it
console.log("Original order after sorting:", placesName);
// print your array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical Order:", __spreadArray([], placesName, true).sort().reverse());
//show that your array is still in its original order by printing it again
console.log("Original Order after reversing sorting:", placesName);
// Reverse the order of the list
placesName.reverse();
console.log("Reversed order:", placesName);
// Reverse the order of the list again to get back to the original order
placesName.reverse();
console.log("Back to original order:", placesName);
// sort the array in alphabetical order
placesName.sort();
console.log("Sorted in Alphabetical order:", placesName);
// Sort the array in reverse Alphabetical order
console.log("Sorted in Reverse Alphabetical Order:", __spreadArray([], placesName, true).sort().reverse());
