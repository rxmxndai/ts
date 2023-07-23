
// Type aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[]

interface Guitarist {
    name?: string,
    active: boolean,
    album: stringOrNumberArray
}

type userId = stringOrNumber;


// Literal Types
// When only certain values are expected
let myName: 'Roman';

let userName: 'Roman' | 'John' | 'Ammy';
userName = 'Roman';


// Functions
const add = (a: number, b: number) => {
    return a + b;
}

const logMsg = (message: any) => {
    console.log(message);
}

let substract = function (c: number, d: number): number {
    return c - d;
}


type mathFunction = (a: number, b: number) => number;

// interface mathFunction { 
//     (a: number, b: number):  number;
// }

let multiply: mathFunction = function (c, d) {
    return c * d;
}



// Optional Parameters
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== `undefined`) {
        return a + b + c;
    }
    return a + b;
}


const sumAll = (a: number, b: number, c: number = 2): number => {
    return a + b + c;
}


// Rest parameters
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((accumulator, value) => accumulator + value);
}

// Never types
const createError = (errMsg: string): never => {
    throw new Error(errMsg);
}

const infinite = () => {
    let i: number = 1;

    while (true) {
        i++;
        if (i > 100) break;
    }
}



// use of custom type guard
const isNumber= (value: any): boolean => {
    return typeof value === "number" ? true : false;
}


// use of never type
const numberOrString = (value: number | string): string => {
    if (typeof value === "string") return "string";
    if (typeof value === "number") return "number";

    return createError('This should never be valid');
}

console.log(numberOrString(1));