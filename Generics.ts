// Generics
// TS => Define strict types for type safe developer experience
// Generics allow us to provide a palceholder as type variable

const echo = <T> (arg: T) : T  => arg

const isObject = <T> (arg: T): boolean => {
    return (typeof arg === "object" && !Array.isArray(arg) && arg !== null)
}


// const isTrue = <T> (arg: T): { arg: T, is: boolean } => {
//     if (Array.isArray(arg) && !arg.length) {
//         return { arg, is: false };
//     }
//     if (isObject(arg) && !Object.keys(arg as keyof T).length ) {
//         return { arg, is: false };
//     }
//     return { arg, is: !!arg };
// }


// console.log(isTrue({hero :"Roman"}));


interface BoolCheck <T> {
    value: T,
    is: boolean,
}


const checkBoolValue = <T> (arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObject(arg) && !Object.keys(arg as keyof T).length ) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
}


interface HasId {
    id: number
}

const processUser = <T extends HasId> (user: T) : T => {
    // process the user logic
    return user;
} 

// console.log(processUser({id: 1, name: "Roman"}));

const getUsersProperty = <T extends HasId, K extends keyof T > (users: T[], key: K) : T[K][] => {
    return users.map(user => user[key]);
}


const users = [
    {
        id: 12,
        name: "Roman",
        email: "roman@gmail.com"
    },
    {
        id: 99,
        name: "rohan",
        email: "rohan@gmail.com"
    }
]

// console.log(getUsersProperty(users, "email"))


class StateObject <T> {
    private data: T
    constructor (value: T) {
        this.data = value
    }

    get state(): T {
        return this.data;
    }

    set state(value: T) {
        this.data = value;
    }
}

const store = new StateObject("Roman");

store.state = "Hero";

// store.state =123;

// cannot set to new datatype once defined 
// even when using <T>


const myState = new StateObject<(string | number |  boolean)[]> ([15]) //*****************************************************************************

myState.state = ([123, true, "Roman"]);

console.log(myState.state);





