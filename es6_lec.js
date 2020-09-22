"use strict";

// ============== Exponentiation

    // var x = 4**2;
    // console.log(x);



// ============== Let and Const (block scope vs. function scope)
// see appendix for hoisting

// var vs. let

    // {
    //     var a = 10;
    // }
    // {
    //     let b = 20;
    // }
    //
    // console.log(a);
    // console.log(b);

    // applies to any code structure that can use curly braces (loops, conditional logic, functions, etc.)

// constants can't be reassigned

    // const c = 30;
    // c = 3;
    // console.log(c);

// constants can't be redeclared

    // const c = "bob";

    // I recommend using constants for everything you can and let for everything else. Don't use var.


// ============== Template Strings

// ES5...

    // "You had me at 'meat tornado'" - Ron Swanson

    // let firstName = "Ron";
    // let lastName = "Swanson";
    //
    // let quote = "";
    // quote += '"You had me at \'meat tornado\'" - ';
    // quote += firstName + " " + lastName;
    //
    // console.log(quote);

// ES6 Template Strings...

    // let easierQuote = `"You had me at 'meat tornado'" - ${firstName} ${lastName}`;
    //
    // console.log(easierQuote);

// Very helpful for building HTML with JS

    // let items = ['apple', 'grape', 'orange'];
    //
    // let itemsHtml = `
    //     <ul>
    //         <li>${items[0]}</li>
    //         <li>${items[1]}</li>
    //         <li>${items[2]}</li>
    //     </ul>
    // `;
    //
    // console.log(itemsHtml);
    // document.write(itemsHtml);

// ============== for ..of loop (works on node lists!!!)

    // const arr = ["one", "two", "three"];
    // for (let ele of arr) {
    //     console.log(ele);
    // }


// ============== Arrow Functions

// function declaration
    // function addOne(arg1) {
    //     return arg1 + 1;
    // }

// original function expression
    // let addOneA = function(arg1) {
    //     return arg1 + 1;
    // };

// refactor to use arrow functions
    // let addOneB = (arg1) => {
    //     return arg1 + 1;
    // };

// removed curly braces (if only one statement)
    // let addOneC = (arg1) => arg1 + 1;

// removed parens if one input only
    // let addOneD = arg1 => arg1 + 1;

    // console.log(addOneA(2));
    // console.log(addOneB(2));
    // console.log(addOneC(2));
    // console.log(addOneD(2));


// ============== Default Parameter Values

// Common ES5 approach
    // let addArgsA = (num1, num2) => {
    //     if (num1 === undefined) {
    //         num1 = 2;
    //     }
    //     if (num2 === undefined) {
    //         num2 = 2;
    //     }
    //     return num1 + num2;
    // };

// Shorter ES5 approach
    // let addArgsB = (num1, num2) => {
    //     num1 = num1 || 2;
    //     num2 = num2 || 2;
    //     return num1 + num2;
    // };
    //

// Even better ES6 approach

    // let addArgsC = (num1 = 2, num2 = 2) => num1 + num2;

// Test output

    // console.log("\nA output...");
    // console.log(addArgsA());
    // console.log(addArgsA(1));
    // console.log(addArgsA(3, 3));
    //
    // console.log("\nB output...");
    // console.log(addArgsB());
    // console.log(addArgsB(1));
    // console.log(addArgsB(3, 3));
    //
    // console.log("\nC output...");
    // console.log(addArgsC());
    // console.log(addArgsC(1));
    // console.log(addArgsC(3, 3));


// ============== Object Assignment Shorthand

// variables to build object from...

    // let breed = "Pug";
    // let age = 3;
    // let name = "Lexie";
    // let isCute = true;

// ES5 way...

    // var dog = {
    //     breed: breed,
    //     age: age,
    //     name: name,
    //     isCute: isCute
    // };
    //
    // console.log(dog.name);

// ES6 way...

    // const dog = {
    //     breed,
    //     age,
    //     name,
    //     isCute
    // };
    //
    // console.log(dog.name);


// ============== Object / Array Destructuring

// object to destructure...

    // const puppy = {
    //     breed: "Lab",
    //     age: 10,
    //     name: "Sabrina",
    //     isCute: true
    // };
    //
    // let { breed, age, name, isCute } = puppy;
    //
    // console.log(breed);
    // console.log(age);
    // console.log(name);
    // console.log(isCute);

// destructuring with arrays...

    // let cats = ["CJ", "Claude", "Max"];
    //
    // let [ cat1, cat2, cat3 ] = cats;
    //
    // console.log(cat1);
    // console.log(cat2);
    // console.log(cat3);


// ============== Destructuring Assignment w/ Functions

// destructuring...

    // const getArea = ({ height, width }) => height * width;

    // let shape = {
    //     height: 20,
    //     width: 10
    // };
    //
    // console.log(getArea(shape));

// assignment...

    // let height = 20;
    // let width = 10;
    //
    // console.log(getArea({ height, width }));


================================= Map, Filter, Reduce
-- Array.map()
Great creating a new array with changed values.
Example:
  
  const names = ['justin', 'ViVIAN', 'boB', 'DANIEL', 'tRant'];
  const convertToTitleCase = str => str[0].toUpperCase() + str.substring(1).toLowerCase();
  const output = names.map(convertToTitleCase);
  console.log(output); // ['Justin', Vivian', 'Bob', 'Daniel', 'Trant'];

-- Array.filter()
Great for removing elements in an array that fail a given test.
Example:
  const names = ['Justin', 'Vivian', 'Bob', 'Daniel', 'Trant'];
  const output = names.filter(name => name !== 'Bob'); // filter out 'Bob' 
  console.log(output); // ['Justin', 'Vivian', 'Daniel', 'Trant']

-- Array.reduce()
Great for combining the values of an array together in some way to create data of any type.
Example 1:
  const names = ['Justin', 'Vivian', 'Daniel', 'Trant'];
  const output = names.reduce((greeting, name) => greeting += `${name}, `, 'Welcome: ').slice(0, -2);
  console.log(output); // "Welcome Justin, Vivian, Daniel, Trant"

-- ULTRA COMBO!!!!!
const names = ['justin', 'ViVIAN', 'boB', 'DANIEL', 'tRant'];
const convertToTitleCase = str => str[0].toUpperCase() + str.substring(1).toLowerCase();
const output = names.map(convertToTitleCase)
                    .filter(name => name !== 'Bob')
                    .reduce((greeting, name) => greeting += `${name}, `, 'Welcome: ').slice(0, -2);
console.log(output);

