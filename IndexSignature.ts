// Index Signatures 


// indexed keys || cant be booleans
// interface TransactionObj {
//     readonly [index: string]: number
// }


interface TransactionObj {
    readonly [index: string]: number,
    Pizza: number,
    Books: number,
    Job: number,
}

const todaysTransactions : TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
}


let prop: string = "Pizza"
// console.log(todaysTransactions[prop]);


const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total;
}

// console.log(todaysNet(todaysTransactions));

// ******************************************************************************************

interface Student {
    // string indexed
    // [key: string]: string | number | number[] | undefined,
    name: string,
    GPA: number,
    classes?: number[],
}


const student: Student = {
    name: "Student",
    GPA: 3.15,
    classes: [100, 200],
}


// console.log(student.test);


// Use of keyof | specific string literal
for (const key in student) {
    // console.log(`${key} : ${student[key as keyof Student]}`);    
}


Object.keys(student).map(s => {
    // console.log(student[s as keyof typeof student]);
})


const logStudentKey = (student: Student, key: keyof Student) => {
    console.log(`Student ${key}: ${student[key]}`);  
}   


logStudentKey(student, `GPA`);


// ******************************************************************************************


// interface Incomes {
//     [key: string]: number,
// }

type Streams = "salary" | "bonus" | "sidehustle";

// utility type 'REecord' that will create an object with Streams property and number datatype

type Incomes = Record<Streams, number | string >


const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}


for (let rev in monthlyIncomes) {
    console.log(monthlyIncomes[rev as keyof Incomes]);
    
}

