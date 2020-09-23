/**
 * OPERATORS:
 * 
 * 0. JavaScript uses operators to assign values, compare values, and perform arithmetic operations. 
 * Operators can do much more than what is listed but those are the basic concepts. An operator 
 * will perform some type of operation or expression JavaScript includes five categories of 
 * operators: arithmetic, comparison, logical, assignment, and conditional operators.
 * 
 * 1. Arithmetic: used to perform mathematical expressions on values and numeric operands. Arithmetic
 * operators are as follows: addition (+), subtraction(-), multiplication(*), division(/), 
 * exponentiation(**), modulus(%), increment(++), decrement(--).
 * 
 * 2. Comparison: Used to make logical comparisons that help determine whether or not something
 * is true within a given expression or mathematical operation. Comparison operators are as
 * follows: equal-to(==), strictly-equal(===), not-equal(!=), not strictly-equal(!==), greater-than(>),
 * less-than(<), greater-than-or-equal(>=), less-than-or-equal(<=). It is important to note that 
 * equal-to does not compare data types only if the values are the same. However, strictly-equal
 * compares both values and data types.
 * 
 * 3. Logical: Used to determine a logical relationship between variables. Logical operators are 
 * used to combine two or more conditions in a conditional expression, which is typically found
 * in if() statements. Logical Operators are as follows: and(&&), or(||), and logical-not(!).
 * 
 * 4. Assignment: Used to assign values to variables. Assignment operators can also be a mix of 
 * arithmetic and assignment. By combining these two we can make less work for ourselves. 
 * Assignment operators are as follows: assign value(=), add-value(+=), subtract-value(-=),
 * multiply-value(*=), divide-value(/=), modulus-value(%=), exponent-value(**=)
 *      a: (=) assigns right value to left operand
 *      b: (+=) sums left and right operands and assign them to a variable
 *      c: (-=) subtracts right from left and assign to a variable
 *      d: (*=) multiply left and right operands and assign to a variable
 *      e: (/=) divide left by right operand value and assign to a variable
 *      f: (%=) Get the modulus of left operand divided by right and assign resulted modulus to 
 *              the left operand
 * 
 * 5. Conditional: the only operator to take three operands. A condition, followed by a '?', an 
 * expression to if the code is true with a semicolon(:) after. Last, an expression that will
 * execute if the code is false. This operator offers a shortcut to writing if-else() chains.
 */
 
 // 1. ARITHMETIC //
 var num1 = 15; 
 var num2 = 5;
 var add = num1 + num2; // using '+'
 var sub = num1 - num2; // using '-'
 var mult = num1 * num2; // using '*'
 var div = num1 / num2; // using '/'
 var modu = num1 % num2; //using '%'
 
 let arr1 = [num1, num2, add, sub, mult, div, modu];
    //here we are using '++' on i to increment the loop to the next index
    for(let i = 0; i < arr1.length; i++){ 
        console.log(arr1[i]); 
    }

 // 2. COMPARISON //
var x = '3';
var w = 9;
var y = 6;
var z = 2;

//making use of the less-than operator 
if(y < w){  // greater-than operator works the exact same way
    console.log(y + ' is less than ' + w); //prints '6 is less than 9'
}
//using the greater-than-or-equal to operator
if(w >= z){ // the <= operator works the exact same way
    console.log('w is >= z'); // prints 'w is >= z'
}
//Loosely-equals(==) cares only about value, not data type
if(x == 3){
    console.log(true); //prints true because value only matters
}
//Strictly-equals(===) cares about value and data type
if(x === 3){
    console.log(true);
}else {
    console.log(false); //strictly-equals(===) causes this test to fail and print false
}
 // 3. LOGICAL //
var car = 'truck';
var place = 'house';
var town = 'New Orleans';
var country = 'France';
//function used to demonstrate && and || usage.
function anon(str1, str2){
    let temp = 'one passed';
    //using the && operator, if both arguments are true then execute code-block
    if(str1 === country && str2 === town){
        return str1 + ' ' + str2;
    //using the || operator, if only one arguments are true then execute
    }else if(str1 === car || str2 === place){
        return temp;
    }
}
console.log(anon(country, town)); // => prints 'France New Orleans'
console.log(anon(car, town)); // => prints 'one passed'
//using the logical not (!) operator
if(!place === 'building'){
    console.log('place does not equal building');
}
 // 4. ASSIGNMENT //
//a: (=) assigns right value to left operand
var dog = 'Cowboy';
    // b: (+=) sums left and right operands and assign them to a variable
    dog += 'Lucy';
    console.log(dog); // => prints CowboyLucy
//c: (-=) subtracts right from left and assign to a variable
var n = 10;
    n -= 5; // subtract 5 from 10
    console.log(n); // => prints 5
//d: (*=) multiply left and right operands and assign to a variable
var t = 5;
    t *= 2;
    console.log(t); // => prints 10
//e: (/=) divide left by right operand value and assign to a variable
var u = 20;
    u /= 4;
    console.log(u); // => prints 5
//f: (%=) Get the modulus of left operand divided by right and assign resulted modulus to the left operand
var v = 10;
    v %= 5;
    console.log(v); // => prints 0 (no remainder)
 
 // 5. CONDITIONAL //
 var person = {
     name: 'Ryan',
     age: 29
 };
            //  Condition           if true result      if false
 var ageCheck = (person.age >= 21) ? 'serve whiskey' : 'underage';
 console.log(ageCheck); // prints => server whiskey
 
 
 
 
 

