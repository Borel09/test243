/**
 * STRING-MANIPULATION:
 * 
 * 0. Strings can be manipulated a number of ways but the most efficient and useful
 * are built-in function methods that allow us to directly affect the strings without
 * having to constantly rewrite code. Function methods also allow us to access the 
 * contents of a string as well. These methods will allow you to perform most operations 
 * on strings. In the case that the task required does not fit a built-in method, 
 * then hard coding string manipulation can be done through accessing the string index 
 * through a loop and having operators act upon the string.
 * 
 * 1. Some examples of function methods include: concat(), indexOf(), trim(), length(), 
 * toLowerCase(), and toUpperCase(). For more function methods, go to 
 * https://www.w3schools.com/jsref/jsref_obj_string.asp.
 * 
 * 2. Strings can also be accessed through for-loops. This is because strings are like arrays,
 * in that they adhere to a zero-based index system. Therefore, for-loops allow us to 
 * iterate over the length of the string. Iteration allows access to each character of the 
 * string that is being looped over.
 * 
 * 3. Strings can be manipulated with operators. This is useful for when there is not a string
 * method that fits the task you are trying to perform. Strings can be manipulated with 
 * comparative, arithmetic, and assignment operators. 
 */ 
 
 // 1. STRING METHODS //
var str1 = "Hello ";
var str2 = 'world!';
    //using the concat() string method to add str1 and str2
var strAdd = str1.concat(str2);
    console.log(strAdd); // => prints 'Hello world!'
    //using indexOf() to find the index of 'e' in str1
var strIndex = str1.indexOf('e');
    console.log(strIndex); // => prints '1'
    //using trim() we cut the space off the string 'Hello '
var strTrim = str1.trim();
    console.log(strTrim); //=> prints 'Hello'
    //using length() to find the over all length of the string and 
    //returned as the count of the number of characters
var strLength = strAdd.length;
    console.log(strLength); // => prints 12 (index length)
    //toLowerCase() converts all characters in a string to lower-case
var strLower = strAdd.toLowerCase();
    console.log(strLower); // => prints 'hello world!'
    //toUpperCase() converts all characters in a string to upper-case
var strUpper = strAdd.toUpperCase();
    console.log(strUpper); // => prints 'HELLO WORLD!'
    
// 2. ACCESSING STRING DATA //
    //loop accesses the strings character values because of zero-based index
for(let i = 0; i < strAdd.length; i++){
    //inside this block we have access to the string data.
    console.log(strAdd[i]); //prints each iteration of the loop
}


// 3. OPERATORS //
    //using comparative operator to effect the strings
if(str1.length > str2.length){
    console.log(str1.length);
}
    //using assignment operators to effect the strings
var str3 = 'Brendan'; // string assignment
    console.log(str3); // prints => 'Brendan'
    //assigning str3 to 'Brendan' + 'Frazer'
    str3 += 'Frazer'; 
    console.log(str3); // prints => 'BrendanFrazer'
    //using the arithmetic operator (+) to join strings together
var temp2 = 'Cow' + 'boy';
    console.log(temp2); // prints => 'Cowboy'
