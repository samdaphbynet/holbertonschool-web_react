// -------------------------1. Let's build a Teacher interface-----------------------------
// Create a Teacher interface
export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfexperience?: number;
    location: string;
    [key: string]: any
}

// Create a teacher content
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
  };
  
// console.log(teacher3);
//-------------------------------------------------------------------------------------------

// -------------------------2. Extending the Teacher class-----------------------------------
// Create a Directors that extends Teacher interface
interface Directors extends Teacher {
    numberOfReports: number;
}

// Create a Finder interface
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
// console.log(director1);
//--------------------------------------------------------------------------------------------

// -------------------------3. Printing teachers--------------------------------------------

// function that return returns the first letter of the firstName and the full lastName
function printTeacher(firstName: string, lastName: string): string {
    // return `${firstName[0]}. ${lastName}`; firstName = "Jon", lastName = "Don" ==>  Output : J. Don
    const firstLitter = firstName.charAt(0).toUpperCase();
    const fullName = `${firstLitter}. ${lastName}`
    return fullName // firstName = "Jon", lastName = "Don" ==>  Output : J. Don

}

// create interface for the function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Exemple usage
const result: string = printTeacher("Jon", "Don")
// console.log(result);
//----------------------------------------------------------------------------------------

// ---------------------------4. Writing a class--------------------------------------------
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

// Exemple usage 
const student = new StudentClass("Don", "Jone")
console.log(student.workOnHomework())
console.log(student.displayName())
//----------------------------------------------------------------------------------------