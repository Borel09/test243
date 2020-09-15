// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //looping through array incrementally
  for(var i = 0; i < array.length; i++){
    //prints all the values of array to console
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //looping backwards through array
  for(var i = array.length-1; i >= 0; i--){
    //prints all the values of array to console in reverse
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //empty array to hole object keys
  var arrKeys = [];
  //for in loop to access obj keys
  for(var key in object){
    //pushing keys into arrKeys array
    arrKeys.push(key);
  }
  return arrKeys; // returning the arrKeys array
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //for in loop to access obj keys
  for(var key in object){
    //printing the values of keys to console
    console.log(key);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //empty array to hold the object's values
  var arr1 = [];
  //for-in loop to access the obj's key/value pairs
  for(var key in object){
    //pushing the values into arr1
    arr1.push(object[key]);
  }
  return arr1; //returning arr1
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //for-in loop to access the obj's key/value pairs
  for(var key in object){
    //printing the values to the console
    console.log(object[key])
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //empty variable to store the count
  var count = 0;
  //for-in loop to access the obj's key/value pairs
  for(var key in object){
    //if the key exists within the object
    if(object.hasOwnProperty(key)){
      //if true increment count
      ++count;
    }
  }
  return count; //return
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
      //create an empty array to hold object values
      var keys = [];
      //accessing object with for-in loop
      for (var key in object) {
        //pushing the values into keys array
        keys.push(key);
      }
      //for-loop to access keys array in reverse order
      for (var i = keys.length - 1; i >= 0; i--) {
        //setting variable value to the object values
        var value = object[keys[i]];
        console.log(value); //printing the values to console.
      }       
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
