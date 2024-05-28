// Assignment 01: Building your friend list

// Learning Objective: Practice working with objects and arrays in TypeScript to create a data 
// structure.
// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.
// 2. Create three separate objects, each representing a friend, with properties like firstName, 
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your 
// friend list.

// // 1. Define an object named people 

// type Friend = {
//    firstName : string;
//     lastName:string;
//     Id :number;
// }
// let people:{friends : Friend[]} = {
//     friends:[]
// }  
// let friend1: Friend = {   
// firstName : "Huma",
//     lastName:"Moin",
//     Id :12345,
// }

// let  friend2: Friend = {
    
//     firstName : "Zain",
//     lastName:"Moin",
//     Id :78965,
// }
// let  friend3: Friend = {
    
//     firstName : "Hira",
//     lastName:"khan",
//     Id :852369,

// }
// //step3 add these friends object to the friends array within the people object
// people.friends.push(friend1);
// people.friends.push(friend2);
// people.friends.push(friend3);



// console .log(people.friends);

// Assignment 02: Manipulating an Array: Rearranging Words
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to: 
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or 
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC


// const scrambledArray =["student", "of", true, 123, "am", "a", "GIAIC", "I"]
// scrambledArray.splice(2,2)
//  scrambledArray.pop()
//  scrambledArray.unshift("I")
//  scrambledArray[1] = "am";
//  scrambledArray[2] = "a";
//  scrambledArray[3] = "student";
//  scrambledArray[4] = "of";
//  scrambledArray[5] = "GIAIC";
//  console.log(scrambledArray.join(" "));


 // Assignment 03
// Assignment 3: Company Product Catalog
// Learning Objective: Implement data structures in TypeScript to represent and manage product 
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name, 
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the 
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand 
// how to manage product data.
// Define the Products type

// type Products = {
//     name: string;
//     model: string;
//     cost: number;
//     quantity: number;
// };
// // Create an array named inventory to store product information

// let inventory:  Products [] = []
// // Create three separate objects, each representing a product, with properties like name, 
// // model, cost, and quantity.

// const product1: Products = {
//     name:"smartWatch",
//     model:"Apple Watch",
//     cost:2000,
//     quantity:15,
   
    
// };
// const product2: Products = {
//     name: "Laptop",
//     model: "XPS 13",
//     cost: 70000,
//     quantity: 15
// };

// const product3: Products = {
//     name: "Smartphone",
//     model: "Galaxy S21",
//     cost: 799,
//     quantity: 15
// };

// // 3. Add these product objects to the inventory array using an appropriate array method.
// inventory.push(product1);
// inventory.push(product2);
// inventory.push(product3);


// Access and log the quantity property of a specific product (e.g., third product) in the inventory array
// console.log(`The quantity of the third product (${inventory[2].name}) is: ${inventory[2].quantity}`);

// // Explore adding more elements
// // / Explore adding more elements
// const product4: Products = {
//     name: "Smartwatch",
//     model: "Apple Watch",
//     cost: 399,
//     quantity: 8
// };

// inventory.push(product4);

// Log the entire inventory to understand how to manage product data
// console.log("Current Inventory:");
// inventory.forEach((product, index) => {
//     console.log(`Product ${index + 1}: ${product.name}, Model: ${product.model}, Cost: $${product.cost}, Quantity: ${product.quantity}`);
// });
// inventory.Product.push(product3)
// console.log("Name of the fourth product:", inventory.Product[3].name);
// console.log("Cost of the first product:", inventory.Product[0].cost);

// inventory.Product.push(product3)
// console.log("Name of the fourth product:", inventory.Product[3].name);
// console.log("Cost of the first product:", inventory.Product[0].cost);
// / Assignment 4:
// // Student List Organizer
// Learning Objective: Get comfortable with data structures (objects and arrays) and basic 
// functions in TypeScript.
// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes 
// student information like name, senior status (true/false), and whether they've completed 
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the 
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors 
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have 
// a function that removes students who haven't completed their assignments 
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)

interface Student {
    name: string;
    seniorStudent: boolean;
   completedAssignment: boolean;
};
const students : Student[] = [
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

]
console.log(students);

// 3. Senior students with assignment 
const findSenior = (students: Student[]) => {
return students.filter(student => student. seniorStudent&& student.completedAssignment=== true)
}
console.log(findSenior(students));

// 4.Class list update
const removeStudent= (students: Student[]) => {
return students.filter(student => student.completedAssignment === false)
}
console.log(removeStudent(students));


