"use strict";
// Assignment 01: Building your friend list
;
const students = [
    {
        name: "Arifa",
        seniorStudent: true,
        completedAssignment: true,
    },
    {
        name: "Farina",
        seniorStudent: false,
        completedAssignment: true,
    },
    {
        name: "saba",
        seniorStudent: true,
        completedAssignment: false,
    },
    {
        name: "Alisha",
        seniorStudent: false,
        completedAssignment: true,
    },
    {
        name: "Zain",
        seniorStudent: true,
        completedAssignment: false,
    },
    {
        name: "Huma",
        seniorStudent: false,
        completedAssignment: true,
    },
    {
        name: "Jaweria",
        seniorStudent: true,
        completedAssignment: false,
    }
];
console.log(students);
// 3. Senior students with assignment 
const findSenior = (students) => {
    return students.filter(student => student.seniorStudent && student.completedAssignment === true);
};
console.log(findSenior(students));
// 4.Class list update
const removeStudent = (students) => {
    return students.filter(student => student.completedAssignment === false);
};
console.log(removeStudent(students));
