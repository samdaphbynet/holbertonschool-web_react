// -----------------------5. Advanced types Part 1 ------------------------

// Create interface Director
export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}
// Create interface Teachef
export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Class Director that implement interface DirectorInterface
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak() {
        return "Getting a coffee break"
    }

    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
}

// Class Teacher that implement interface TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break"
    }

    workTeacherTasks(): string {
        return "Getting to work"
    }
}

// function CreateEmployye that return new Teacher ou new Director
function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher
    } else {
        return new Director
    }
}

// console.log(createEmployee(200)); // output: Teacher {}
// console.log(createEmployee(1000)); // output: Director {}
// console.log(createEmployee('$500')); // output: Director {}
//---------------------------------------------------------------------------------

//---------------------6. Creating functions specific to employees-----------------

// function isDirector
function isDirector(employee: Director | Teacher):  employee is Director{
    return (employee as Director).workDirectorTasks !== undefined
}

// function that check if the emplloyee is Director ou teacher
function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks()
    } else {
        return employee.workTeacherTasks()
    }
}
// exemple usage
// console.log(executeWork(createEmployee(200))); // output: "Getting to work"

// console.log(executeWork(createEmployee(1000))); // output: "Getting to director tasks"
// -------------------------------------------------------------------------------

// -----------------------7. String literal types --------------------------------

// String literal type named Subjects
type Subjects = "Math" | "History";

//  function that return the subject name from the subjects
function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math"
    } else if (todayClass === "History") {
        return "Teaching History"
    }
}

// exemple usage
// console.log(teachClass('Math')); // output: "Teaching Math"
// console.log(teachClass('History')); // output: "Teaching History"

//-------------------------------------------------------------------------------