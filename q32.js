// Array of current users
var current_users = ["ahmed", "ali", "osama", "Faraz", "sunny"];
// Array of new users
var new_users = ["faraz", "ahmed", "Ali", "sunny", "osama"];
// loop through new_users to check for usernames availability
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username"));
    }
    else {
        console.log("".concat(newUser, " is available"));
    }
});
