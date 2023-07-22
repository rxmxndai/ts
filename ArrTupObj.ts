let stringArray = ["One", "Hey", "Array"];
let monitors = ["acer", "asus", 555];
let mixedData = [true, 1, "roman"];


stringArray[0] = "Random";
stringArray.push("hichiker");

monitors[0] = "razor";
monitors.unshift(222);

mixedData = [...monitors, ...mixedData];

// Arrays in TS
let test: (number)[] = [];
let brands: string[] = []
brands.push("microsoft", "meta", "google");

// Tuple in TS
let myTuple: [number, string, boolean] = [ 12, "dave", true];


// Objects in TS

let exampleObj = {
    prop1: "Roman",
    prop2: true,
    prop3: 12
}

// exampleObj.prop2 = false;

interface Guitarist {
    name: string,
    active?: boolean,
    albums: (number | string)[]
}

let evh: Guitarist = {
    name: "Helicopter",
    active: false,
    albums: [1987, 2020]
}


let eph: Guitarist = {
    name: "titties",
    albums: [2002, 2020]
}


const greetGuitars = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}!`;
}

// console.log(greetGuitars(evh));


// Enums
// new feature in TS 
// enumerators starting from zero
enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.A);
