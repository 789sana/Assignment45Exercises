// name array
let guestList = ["Alishba", "Ahmed", "Areesha"];
// can not make dinner
let canNotAttend = "Ahmed";
console.log(`${canNotAttend} cannot make it,for dinner`);
// invite new guest
let newGuest = "Amna";
guestList[guestList.indexOf(canNotAttend)] = newGuest;
console.log(guestList);
// send message
guestList.map((people) => console.log(`HELLO,${people} you are invited to dinner`));
export {};
