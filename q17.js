// name array
let guestList = ["Alishba", "Ahmed", "Areesha"];
// can not make dinner
let canNotAttend = "Ahmed";
// invite new guest
let newGuest = "Amna";
guestList[guestList.indexOf(canNotAttend)] = newGuest;
guestList.unshift("Tooba");
let middleGuest = "Asma";
let middleIndex = guestList.length / 2;
guestList.splice(middleIndex, 0, middleGuest);
guestList.push("fariha");
console.log(guestList);
console.log("we can invite only two people for dinner");
// starting removing guest 
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`\nSorry ${removeGuest} we can't invite you to dinner`);
}
guestList.map((finalized) => console.log(`\n${finalized} You are still invited to Dinner`));
guestList.pop();
guestList.pop();
console.log(guestList);
export {};
