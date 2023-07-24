// Access modifiers / Data modifiers / Vuisibility Modifiers

class Coder {

    secondLang!: string

    constructor(
        public name: string,
        public music: string,
        private age: number,
        protected lang: string = "TypeScript"
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    public getAge() {
        return `Hello, My age is ${this.age}`;
    }
}


const Roman = new Coder("Roman", "Rock", 22);

// console.log(Roman.getAge());



class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ) {
        super(name, music, age);
        this.computer = computer;
    }

    public getLang() {
        return `I write ${this.lang}.`;
    }
}

const Sara = new WebDev("Mac", "Sara", "Lofi", 25);

// console.log(Sara.getAge());

// ******************************************************************

// Implementing Interface to class 

interface Musician {
    name: string,
    instrument: string,
    play (action: string) : string
}

class Guitarist implements Musician {
    name: string
    instrument: string

    constructor (name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play (action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}



const Page = new Guitarist("Jimmy", "Guitar");

// console.log(Page.play("strums"));



class Peeps {

    static count: number = 0;

    static getCount(): number {
        return Peeps.count;
    }

    public id: number;

    constructor (public name: string) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}

const John = new Peeps("John")
const Steve = new Peeps("Steve")
const Amy = new Peeps("Amy")


console.log(Peeps.count);


// ****************************************************************************
/// Getters and Setters

class Bands {
    private dataState: string[];

    constructor () {
        this.dataState = [];
    }

    public get data(): string[] {
        return this.dataState;
    }

    public set data(values: string[]) {
        if (Array.isArray(values) && values.every(ele => typeof ele === "string")) {
            this.dataState = values;
            return;
        }
        else {
            throw new Error(`Params is not an Array of Strings.`);
        }
    }
}

const Mantra = new Bands();
Mantra.data = ["Roman", "Mohit", "Diamond"];
// setters
Mantra.data = [...Mantra.data, "Rohit"];

// getters
console.log(Mantra.data);


