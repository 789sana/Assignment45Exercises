// name array
let guestList:string[]=["Alishba", "Ahmed", "Areesha"]
// can not make dinner
let canNotAttend:string= "Ahmed";
// invite new guest
let newGuest:string="Amna";
guestList[guestList.indexOf(canNotAttend)]=newGuest;
// console.log(guestList);
// send message
// guestList.map((people)=> console.log(`HELLO,${people} you are invited to dinner`));
console.log("Welcome all we found a bigger dinner table");
// adding one guest at the start of array
guestList.unshift("Tooba");
// console.log(guestList);
// adding one more guest at the middle of the array
let middleGuest:string="Asma";
let middleIndex=guestList.length/2;
guestList.splice(middleIndex,0,middleGuest)
// console.log(guestList);
// adding one more guest at the end array
guestList.push("fariha");
// console.log(guestList);
// print a new invitation message to all guests
guestList.map((names)=>console.log(`\nDear ${names} You are invited to dinner!`));







