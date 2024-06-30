type car={
    manufacturer:string
    model:string
    [key:string]:any;
}
function createCar(manufacturer:string,model:string,optional:Record<string,any>): car {
  return{
      manufacturer,
      model,
      ...optional
  }
}
let mycar:car=createCar("Toyota","Corolla",{color:"Silver", year: "2024"})
console.log(mycar);
