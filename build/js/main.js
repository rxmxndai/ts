"use strict";
// Generics
// TS => Define strict types for type safe developer experience
// Generics allow us to provide a palceholder as type variable
const echo = (arg) => arg;
const isObject = (arg) => {
    return (typeof arg === "object" && !Array.isArray(arg) && arg !== null);
};
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObject(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    // process the user logic
    return user;
};
// console.log(processUser({id: 1, name: "Roman"}));
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
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
];
// console.log(getUsersProperty(users, "email"))
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("Roman");
store.state = "Hero";
// store.state =123;
// cannot set to new datatype once defined 
// even when using <T>
const myState = new StateObject([15]); //*****************************************************************************
myState.state = ([123, true, "Roman"]);
console.log(myState.state);
