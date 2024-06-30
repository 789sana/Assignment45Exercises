var usernames = ["Eric", "john", "Admin", "Alex", "Emily"];
usernames = [];
if (usernames.length === 0) {
    console.log("Your Array is empty we need to find some users!");
}
else {
    // Using foreach loop on Array
    usernames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
