/**
 * LOOPS:
 * 
 * 0. Loops allow a quick way to perform an action/instructions/functions repeatedly. Regardless of 
 * the type of loop, at its basic level a loop repeats an action a number of times. Depending on how 
 * your loop is written, the different type of loops offer different means to determine starting and 
 * stopping points. A loop only needs to be written once and can be executed as many times as necessary.
 * The term iterate or iteration refer to a specific instance with in the running loop and is synonymous 
 * with looping.
 * 
 * 1. for(): loops through a block of code until a specified condition evaluates to false.
 * 2. for/in: loops through the properties(keys) of an object. For each property, JavaScript executes
 *      the specified statement in the loop code-block.
 * 3. while*(): loops through a block of code while a specified condition is true. 
 *  
 */ 
 
 
//1. FOR() STATEMENT //
    //declaring and assigning an array variable
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //for-loop to access the values in arr1
for(let i = 0; i < arr1.length; i++){
    console.log(arr1[i]); // => prints the index value each iteration
}
    //for-loop but printing the arr1 array in reverse
for(let i = arr1.length -1; i >= 0; i--){
    console.log(arr1[i]);
}

//2. FOR/IN //
        //object declaration and and assignment
var car = {
    model: 'silverado',
    type: 'truck',
    wheels: 4,
    doors: 2,
    extendedCab: false
};
    //using a for-in loop to access the key's and key values of an object
for(var key in car){
    console.log(car[key]) // => prints key values each iteration.
}
//3. WHILE() //
    //declaring variables
let n = 0;
    //while 'n' is less than 3 increment n each iteration
while(n < 3){ //loop stops after the 3 iteration because n is now greater than 3
    n++;
}   
 

