//0. Creating an interface for a student 


// Create a student interface
interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

// create two students
const student1: Student = {
    firstName: "John",
    lastName: "Buren",
    age: 20,
    location: "New York"
}

const student2: Student = {
    firstName: "John",
    lastName: "McKinley",
    age: 22,
    location: "New Jersey"
}

// Store the students in an array
const studentsList: Student[] = [student1, student2];

// Using vanilla Javadcript, render a tbale and for each student in array, append it to the table
const renderTable = (students: Student[]) => {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    students.forEach((student) => {
        const row = document.createElement("tr");
        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName

        const ageCell = document.createElement("td");
        ageCell.textContent = String(student.age)

        const locationCell = document.createElement("td");
        locationCell.textContent = student.location

        row.appendChild(firstNameCell)
        row.appendChild(locationCell)
        row.appendChild(ageCell)
        tbody.appendChild(row)
    })

    table.appendChild(tbody)
    document.body.appendChild(table)
}

// Call function with array studentsList
renderTable(studentsList)