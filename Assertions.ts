type One = string
type Two = string | number
type Three = 'hello'

// Convert to more or less specific 
let a: One = 'Hello '
// assignment to less specific type
let b = a as Two
// more specific
let c = b as Three

let d = <One> 'world!'
let e = <string | number> 'world!'

const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
    if ( c === "add" ) return a + b;
    return '' + a + b;
}


let myVal: string = addOrConcat(2, 2, "concat") as string;
let nextVal: number = addOrConcat(2, 2, "add") as number;


// Forced casting or double casting
console.log(10 as unknown as string);


// The DOM

const img = document.querySelector("img") as HTMLImageElement
// not nulll assertion
const myImg = document.getElementById("#img")! as HTMLImageElement

const nextImg = <HTMLImageElement>document.getElementById("#img")

