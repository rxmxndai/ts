// Utility Types

// Common type transformation


// Partial *******************************************************/>
interface Assignment {
    studentID: string,
    title: string,
    grade: number,
    verified?: boolean
}


// just the one we pass needs to be updated! with Partial<Assignment>

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate };
}


const assign1: Assignment = {
    studentID: "COMPSCI123",
    title: "Final Year Project",
    grade: 0,
}

const gradedAssignment: Assignment = updateAssignment(assign1, { grade: 100 });

// console.log(gradedAssignment);


// Required and Readonly *******************************************************/>

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database
    return assign;
}

const assignVerified: Readonly<Assignment> = { ...gradedAssignment, verified: true }



const getRecord: Readonly<Assignment> = recordAssignment({ ...gradedAssignment, verified: true });

// console.log(getRecord);


// Record Utility type *******************************************************/>
// Record keys and values to be string
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
}

// string literals types

type Students = "Sara" | "Kelly"

type LetterGrades = "A" | "B" | "C" | "D" | "U"

const FinalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U"
}


// console.log(FinalGrades);


// Use of Record using interface 
interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 85, assign2: 76 },
    Kelly: { assign1: 75, assign2: 91 }
}




// Pick and Omit  *******************************************************/>

type AssignResult = Pick<Assignment, "studentID" | "grade">;

const score: AssignResult = {
    studentID: "compsci123",
    grade: 69,
}

type AssignPreview = Omit<Assignment, "grade" | "verified">;

// cannot use ommited fields
const preview: AssignPreview = {
    studentID: "asda123",
    title: "FYP"
}




// Exclude and Extract *******************************************************/>

// They work with string literals

type adjsutedGrade = Exclude<LetterGrades, "U">;

type highGrades = Extract<LetterGrades, "A" | "B">;



//  NonNullable *******************************************************/>

type AllPossibleGrades = "Dave" | "John" | null |
    undefined;

type NamesOnly = NonNullable<AllPossibleGrades>



// ReturnType *******************************************************/>

//  type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
    return { title, points };
}


type newAssign = ReturnType<typeof createNewAssign>

const tsAssign: newAssign = createNewAssign("Utility Types", 100)

// console.log(tsAssign);




// Parameters *******************************************************/>

type AssignParams = Parameters<typeof createNewAssign>

const assignArg: AssignParams = ["Generics", 100];

const tsAssign2: newAssign = createNewAssign(...assignArg)

// console.log(tsAssign2);



// Awaited *******************************************************/>
// helps with the return type of Promises

interface User {
    id: number,
    name: string,
    usernmae: string,
    email: string
}


const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(users => {
            return users.json();
        })
        .catch(err => {
            if (err instanceof Error) console.log(err);
        });

    return data;
}


type FetchUsersReturnType = Awaited<ReturnType <typeof fetchUsers>>

fetchUsers()
.then(users => console.log(users));
