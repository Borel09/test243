/**
 * DATATYPES: 
 * 
 * 0: Understanding the different value types used in JavaScript is important because it allows us to
 *be able to manipulate values and data within a program. JavaScript types are considered dynamic, which
 *allows the ability for the same variable to store different data types.JavaScript uses six main data 
 *types and can be separated into three different categories: Primitive and Complex. Primitive data types 
 *refer to the fact that variables have a fixed amount of memory, however, complex data types do not have 
 *a fixed size. Therefore, primitive data types store data by copying values and complex data types
 *store data through copying by reference. The three primitive data types are strings, numbers, 
 *and boolean values. The three complex data types are objects, array, and function. It is important to
 *note that there is a special data type category reserved for null and undefined values.
 * 
 * //PRIMITIVE//
 * 1. String: Used to represent the text the user reads. Created by using single or double quotes and
 * assigning that value to a variable.
 * 
 * 2. Number: The number type is used to represent positive or negative integers, and floating point
 * numbers. This type includes infinity, negative infinity, and NaN(not a number). NaN can be the end
 * result of an undefined bit of code or something might simply be invalid. Number types can also be acted
 * upon by arithmetic operators such as: multiplication (*), division (/), addition (+), and subtraction(-).
 * Finally, there are special "numeric" based values that are considered the number type, however, they do 
 * not have the value of an actual number. These special values are Infinity, -Infinity, and not a number (NaN)
 * Infinity, both positive and negative, represent the mathematical concept of infinity(∞). NaN, representing
 * a computer error, is typically the result of a failed mathematical expression or an operation that is 
 * undefined.
 * 
 * 3. Boolean: True or False. This type is used to store values that are either true or false. These 
 * values can be the end result of comparative logic and expressions
 * 
 * //COMPLEX//
 * 4. Objects: Objects allow you to store collections or lists of data. One way to think about how objects work is 
 * by looking at real-life objects and distinguishing their properties and values. Objects work by having 
 * key-value pairs to associate data with. The key name is always a string and the value can be any data type.
 * Objects values and properties can be accessed by using for-in loops, bracket, and dot(.) notation. 
 * 
 * 5. Arrays: Another way of having a list is by storing multiple values in a single value. Array's operate 
 * off of a zero-based index system. Through this system we can access the data stored inside of an array. 
 * Arrays are created through open and closed brackets []. Arrays can be accessed through for-loops and
 * looping through the array's indexes. Furthermore, only bracket-notation can be used on an array. 
 * Dot(.) notation is not usable on arrays.
 * 
 * 6. Functions: The function type are essentially objects that can be called and execute a block of code.
 * Function can return other functions and functions can be passed as arguments in other functions. JavaScript
 * doesn't have a literal function data type but when using typeof() on functions they return 'function'.
 * 
 * //SPECIAL//
 * 7. Undefined: This type is used when a variable has yet to be assigned any value.
 * 
 * 8. Null: Null simply means the variable has no value. Not to be confused with 0 or an empty string
 * 
 */
 
 
 
 // 1. STRING //
    //declaring the variable name and assigning it the string value of 'Ryan Borel'
 var name = 'Ryan Borel';
 console.log(name);     // prints to the console => 'Ryan Borel'
 
 // 2. NUMBER //
    //declaring and assign 10 to num1
 var num1 = 10;
 var num2 = 5;
 console.log(num1); // => prints 10
    //creating an add variable and assigning the result of num1 + num2
 var add = num1 + num2; 
 console.log(add); // => prints 15
 var multiX2 = add * num2;
 console.log(multiX2); // => prints 75
    //creating the infinity variable and assigning it the value of infinity through arithmetic
 var infinity = 1 / 0;
 console.log(infinity); // => prints Infinity
    //the result of this expression does not yield a mathematical number
 var nana = "this is words" / 25+1;
 console.log(nana); // => prints NaN
 
 // 3. BOOLEAN //
    //declaring boolean(yes/no, true/false) variables
    var test = true;
    var test1 = false;
    var boolArr = [test, test1]; //putting boolean values in an array
    for(let i = 0; i < boolArr.length; i++){ //looping through boolArr
        if(boolArr[i] === true){    //if index is true then print that index value
            console.log(boolArr[i]); // => prints true
        }
        else { //condition for when i is false
            console.log(boolArr[i] = false); // => prints false
        }
    }
    
 // 4. OBJECTS //
    // creation of a person object with first name, last name, and age as properties
 var person = {
    nameFirst: "Ryan",
    nameLast: "Borel",
    age: 29,
 };
    console.log(person); // => prints { nameFirst: 'Ryan', nameLast: 'Borel', age: 29 }
    //accessing objects
    //when we already know the key names of an object we can use dot(.) notation
 var obj1 = person.nameFirst; // assigning obj1 with "Ryan"
    //bracket notation can be used regardless if we know the key name or not.
 var obj2 = person['age'];
    console.log(obj1); // => prints Ryan
    console.log(obj2); // => prints 29
       //accessing object through loop
 for(let key in person){
    console.log(key); // => prints the name of the key
        //using bracket notation because we might not know the name of the key
    console.log(person[key]); // => prints the value of the key
 }   
 
 // 5. ARRAYS //
    //creating and assigning animals to an array with list of animals as strings using brackets []
 var animals = ['dog', 'cat', 'cow', 'bird'];
 console.log(animals);  // => prints [ 'dog', 'cat', 'cow', 'bird' ]
    //examples of the zero-based index system
 console.log(animals[0]); // => prints dog
 console.log(animals[animals.length-1]); // => prints bird
 
 // 6. FUNCTIONS //
    //function creation with parameters and {}
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
 console.log(searchAnimalIndex(animals, "cat")); // => prints index of cat 1
 console.log(searchAnimalIndex(animals, "human")); // => animal not found
 console.log(typeof(searchAnimalIndex)); // => prints function
 
 
 // 7. UNDEFINED //
    //declaring a variable but not assigning it a value leads to a undefined result
 var def;
 console.log(def); // => prints undefined
    //alternatively you can assign the undefined keyword to a variable and it's value will be undefined
 var ghi = undefined;
 console.log(ghi); // => prints undefined
 
 // 8. NULL //
    //creating a null variable or a true unknown value
 var abc = null;
 console.log(abc); // => prints null

