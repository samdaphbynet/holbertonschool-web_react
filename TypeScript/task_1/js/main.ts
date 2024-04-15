// 1. Let's build a Teacher interface


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
  
  console.log(teacher3);

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
  console.log(director1);