// Making a function
function make_shirt (size:string= "Large",printMessaga:string="I Love Typescript"){
    console.log(`Creating a ${size} size shirt with the messaga ${printMessaga} prints on shirt.`);
}
// Calling a function with Default values
make_shirt();

// Calling a function with medium size and default values
make_shirt("Medium")
// Calling a function with different size and differnet values
make_shirt("Small","I Like Web Development")