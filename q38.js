// Making a function
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
// Calling the function with default country name
describe_city("Karachi");
describe_city("Multan");
// Calling thr function  which is not the city of default country
describe_city("Istanbul", "Turkey");
