// Array of current users
let current_users=["ahmed","ali","osama","Faraz","sunny"]
// Array of new users
let new_users=["faraz","ahmed","Ali","sunny","osama"]
// loop through new_users to check for usernames availability
new_users.forEach((newUser)=>{
    if(current_users.some((currentUser)=>currentUser.toLowerCase() === newUser.toLowerCase()
    )){
console.log(`${newUser} will need to enter a new username`);
}else{
    console.log(`${newUser} is available`);
}
})

