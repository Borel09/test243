/**
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point. To create a variable we use the 
 * keyword, var, followed by a name (id or alias) for our variable. In order to understand the 
 * different keywords used to declare a variable, we must first understand the concept of scope 
 * within JavaScript. 
 * 
 * Scope refers to where variables are available to be used. In JavaScript there are two categories
 * scope, local and global. Depending on where a value exists within the scope of the code, then
 * that value may be globally or locally scoped. Global scope means that a variable that is global
 * can access all scripts, functions, and other variables. Conversely, a local variable can only 
 * be accessed from within the function that it is written in. Finally, there are three keywords
 * used in JavaScript to declare a variable: var, let, and const. Each keyword has different rules 
 * they follow in regards to scope. 
 * 
 * Lastly, JavaScript makes use of a concept called hoisting. Hoisting's paper definition is idea
 * that when code runs, variable and function declarations are physically moved to the top of the
 * code. However, what really happens is that when the code is compiled a copy of the function and
 * variable declarations are made and that is what is moved to the top. This leaves the code that
 * was written originally.
 *
 * 1.There are 2 phases of using variables: declaration and initialization (or assignment).
 *
 * 2. var: When declared outside of a function var is globally scoped and any variable can be 
 *          accessed in the whole of the code. When declared inside a function var becomes 
 *          function scoped, or local. Var variables can be redeclared and reassigned.
 * 
 *    let: Variables declared by let are block scoped. This means that any variable declared 
 *          inside of curly braces {} is only accessible inside that block of code. Let has 
 *          become the preferred keyword over var. Let variables can be reassigned but no
 *          redeclared.
 * 
 *    const: Variables declared by the const keyword are block scoped (just like let) meaning 
 *          const declarations are only available for use with in the code block they were 
 *          written in. Const variables cannot be updated or reassigned. Therefore, const 
 *          variables constantly maintain their values.
 * 
 * 3. Hoisting will bring function and variable declarations to the top of their scope. 
 *      Var variables are hoisted to the top of their scope and initialized with a value 
 *      of undefined. Let and const variables are also hoisted to the top of their scope but not 
 *      initialized. 
 *      
 *          
 * 
 * 
 * 
 * 
 * 
 */

// 1. DECLARATION & ASSIGNMENT//
var myName;
/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
    console.log(myName); // prints => undefined
    //initialization or assignment
    myName = 'john';
    console.log(myName); // prints => john
    //3. re-assignment 
    myName = 'bob';
    console.log(myName); // prints => bob

    // NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
    var myVariable = 1;
    var myVariable = true;
    myVariable = "someString";

// 2. VAR, LET, CONST //
    //declaring and initializing a string
var arr1 = ['this array used var']; 

function testFunc(array){
        //freshStr variable is block scoped and only accessible inside the function
    let freshStr = 'this string used let';
    array.push(freshStr);
    return array;
}
console.log(testFunc(arr1)); // prints => [ 'this array used var', 'this string used let' ]

const num1 = 10;
      num1 += 6;
     // console.log(num1); // gives us a TypeError because const cannot be updated
const num2 = 19;
//const num2 = 25;
      //console.log(num2)l // gives a syntax error because const cannot be redeclared.

// 3. HOISTING //
    //calling the function before it is declared.
helloWorld();  // prints => 'Hello World!'
    //function declaration      //this works because functions and variable declarations
function helloWorld(){          //get copied and hoisted to the top of the scope
  console.log('Hello World!');  //allowing us to call the function before it's declaration
}







