// Making a function
function make_shirt(size, printMessaga) {
    if (size === void 0) { size = "Large"; }
    if (printMessaga === void 0) { printMessaga = "I Love Typescript"; }
    console.log("Creating a ".concat(size, " size shirt with the messaga ").concat(printMessaga, " prints on shirt."));
}
// Calling a function with Default values
make_shirt();
// Calling a function with medium size and default values
make_shirt("Medium");
// Calling a function with different size and differnet values
make_shirt("Small", "I Like Web Development");
