/**
 * FUNCTIONS:
 * 
 * 0. Functions are blocks of code that can be called upon when needed. JavaScript treats functions like a 
 * step-by-step process or procedure. Functions should take some input and return an output. Functions 
 * are not required to take any input or return any value. Part of what makes functions so useful is that
 * it allows us the ability to perform action multiple times in a piece of code. Functions can be thought of 
 * as being one of the main building blocks of a program, and in fact a functions code-block is encompassed by
 * a set of {}. Functions require two steps to operate, a function declaration, and then calling the function 
 * to execute it. In regards to scope, anything that is defined inside the function cannot be accessed from
 * outside the function code-block. The inverse is true for this, functions can access global variables. Functions
 * can be written in two different ways a named function and expression. A named function exists as its own block of
 * code. A function expression is a rewritten named function with (=>) acting as {} and can then be assigned to 
 * a variable.
 * 
 * 1. Declaration & calling: to write a function we need to declare it by using the function keyword followed by
 * a name for the function, parameters surrounded by () and ending with the function code-clock {}. Declared
 * functions are not executed immediately. They are saved until called upon and then executed. To execute our 
 * declaration we must call it by it's name and pass in any required parameters. Finally, to stop the code we 
 * use the return keyword.
 * 
 * 2. A function's parameters are names listed in the definition of the function itself. Function arguments are the
 * actual values that get passed to the function. If no input is given, then the parameters are set to undefined.
 * 
 * 3. We can assign a function to a variable by converting the function declaration to an expression and assigning
 * it to a variable.
 * 
 * 4. Scope: anything that is defined inside the function cannot be accessed from outside the function code-block. The 
 * inverse is true for this, functions can access global variables. 
 * 
 * 5. Closures: "A closure is a function that accesses its local scope even executed outside of its lexical scope"
 * A closure is a function that remembers the variables from the place where it is defined. A closure can have free
 * variables together with some type of setting that binds them together.
 * 
 */
 
 //1. DECLARATION && CALLING //
    //array with strings to play with
 var animals = ['dog', 'cat', 'cow', 'bird'];
 
    //function creation/declaration
    //function keyword, name of function (parameters){};
 function searchAnimalIndex(array, string){
    let dnf = "animal not found";   //temporary variable only to be used when function is called
        //looping through the parameter array
    for(let i = 0; i < array.length; i++){
            //if the index matches the string parameter then return the index
        if(array[i] === string){
            return i;
        }
    }
    return dnf; // otherwise return dnf
 }
    //calling the function we made to have it run.
 searchAnimalIndex(animals, "cat"); // => returns index of cat 1
 console.log(searchAnimalIndex(animals, "human")); // => animal not found

  
 //2. PARAMETER V. ARGUMENTS //
 function add(num1, num2){ //parameters are num1 & num2 and represent any possible number that will be given
    return num1 + num2; //returning added parameters
 }
 add(2,5); //2 & 5 are arguments and are placed in the position of the parameters when calling the function
 
 //3. VARIABLE ASSIGNMENT //
 
    //FUNCTION DECLARATION
 function subtract(num1, num2){
    if(num1 > num2){
        return num1 - num2;
    }else {
        return num2 - num1;
    }
 }
 subtract(10,5);
 
    //FUNCTION ASSIGNMENT THROUGH EXPRESSION
    // this is a function expression assigned to a variable of funco1
 var funco1 =  function mult(num1, num2) {return num1 * num2};
    console.log(funco1); // => prints [Function: mult]   
    
 //4. SCOPE //
    //these variables are defined in the global scope
 var num1 = 5;
 var num2 = 30;
    //function defined in the global scope
 function divide(num1, num2){
    if(num1 > num2){
        return num1 / num2;
    }
    return num2 / num1;
 }
 divide(num1, num2); // => return 6
 console.log(divide(num1, num2));
 
 //5. CLOSURES //
    //Outer function does not have access to the inner functions arguments and variables
 function addSquares(a, b) {
     //Inner function has access to addSquare's arguments and variables
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
 }
  addSquares(2,3);
  console.log(addSquares(2, 3)); // => prints 13
 
 
 
 

