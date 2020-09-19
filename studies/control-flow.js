/**
 * CONTROL-FLOW:
 * 
 * 0. When code is executed, the interpretor runs the code in order from the first line 
 * to last, and from left-to-right. This process of reading the code and determining how 
 * the order is read, is referred to as control-flow. While code is being executed the 
 * interpretor may come across conditional statments that may direct the interpretor in
 * what order to read the code, if certain conditions are met. These conditional statements 
 * include If(), else-if(), else, and switch() statements.
 * 
 * 1. if(expression){code that is ran if true}: An if statment accepts an expression that will 
 * act as a test. If any code that runs through this expression and proves to be true, then the 
 * code with in the {} of the if statment will execute
 * 
 * 2. else-if(): This expression can only be used after an if() statement. else-if blocks allow 
 * the conditional statment to check more than one condition. This allows for a second block of 
 * code to run if the first if() statement fails and passes the expression of the else-if() block.
 * 
 * 3. else: An else statement acts as a default setting for if-else-if block chains. The else code
 * block will only execute if all previous conditional checks fail.
 * 
 * 4. switch(): The switch statement is an alternative to if-else block chains. These statements
 * provide a way of checking a conditional expression against more than one case block. If any of
 * the cases match the expression then the entire case code-block is executed. The case code-blocks
 * end with the break keyword. Just like if-else chains, switch statements can have a default setting
 * if all cases fail the test. This is done through the default keyword. 
 *
 */
 
 // 1. IF STATEMENTS //
    //variable to hold the weather as a string.
 var weather = "it's rainy.";
    //conditional to check if the weather is rainy or not
    //if expression is true, then print weather
    if(weather === "it's rainy."){
        console.log(weather);
    }
    

// 2. ELSE-IF() STATEMENTS //
var color1 = ['brown', 'purple'];   //an array that stores colors as strings
var test1 = 'purple';                //string variable to be tested against color1
    //conditional checking if the 0 index matches the test1 variable
    if(test1 === color1[0]){   
        //if true then print that index to the console
        console.log(color1[0]);
    //second conditional checking if the 1 index matches the test1 variable
    }else if(test1 === color1[1]){
        //if true then print that index to the console
        console.log(color1[1]);
    }
    

// 3. ELSE STATEMENTS //
    //got bored and created a function to demonstrate else statements
function timeOfDay(num1){
let timeMsg = ['morning.', 'lunch.', 'the afternoon.', 'time to code.', 'time to sleep.' ];
let currentTime = "It's ";
let defaultMsg = "NUMBER EXCEEDS 24 HOURS";
//if conditional chain to determine what to say back to the user depending on the number that is 
//supplied in the function arguements.
	if(num1 < 7){
		console.log(currentTime + timeMsg[4]); // => "It's time to sleep."
	}
    else if(num1 >= 7 && num1 < 12){
        console.log(currentTime + timeMsg[0]); // => "It's morning."
    }
    else if(num1 >= 12 && num1 < 15){
        console.log(currentTime + timeMsg); // => "It's lunch."
    }
    else if(num1 >= 15 && num1 < 17){
        console.log(currentTime + timeMsg[2]); // => "It's the afternoon."
    }
    else if(num1 >= 17 && num1 < 22){
        console.log(currentTime + timeMsg[3]); // => "It's time to code."
    }
    else if(num1 >= 22 && num1 <= 24){
        console.log(currentTime + timeMsg[4]); // => "It's time to sleep."
    }
    /**
     * the else statement acts as a default state that will trigger if all previous checks fail.
     * in this case, the default state will tell the user when their input number is greater
     * than a 24 hour day.
     */
    else{
        console.log(defaultMsg); //prints the variable defaultMsg to the console
    }
}
//calling the function with a number that does not make sense in a 24 hour day.
timeOfDay(77); // => "NUMBER EXCEEDS 24 HOURS"


// 4. SWITCH STATEMENTS //
//this function does the exact same thing as the one above except it is in switch() format
function switchTime(num1){
let timeMsg2 = ['morning.', 'lunch.', 'the afternoon.', 'time to code.', 'time to sleep.' ];
let currentTime2 = "It's ";
let defaultMsg2 = "NUMBER EXCEEDS 24 HOURS";
    //switch keyword to start the statement and will run until num1 matches a specific case
    switch(num1){
        case 0:
        case 1:
        case 2:
        case 3:     // numbers 0-6 will print => "It's time to sleep."
        case 4:
        case 5:
        case 6:
            console.log(currentTime2 + timeMsg2[4]);
            break;
        case 7:
        case 8:     // numbers 7-10 will print => "It's morning."
        case 9:
        case 10:
			console.log(currentTime2 + timeMsg2[0]);
			break;
        case 11:	// numbers 11 & 12 will print => "It's lunch."	
        case 12:
            console.log(currentTime2 + timeMsg2[1]);
            break;
        case 13:
        case 14:    //numbers 13-15 will print => "It's the afternoon."
        case 15:
            console.log(currentTime2 + timeMsg2[2]);
            break;
        case 16:
        case 17:
        case 18:    //numbers 16-20 will print => "It's time to code."
        case 19:
        case 20:
            console.log(currentTime2 + timeMsg2[3]);
            break;
        case 21:
        case 22:    //numbers 21-24 will print => "It's time to sleep"
        case 23:
        case 24:
            console.log(currentTime2 + timeMsg2[4]);
            break;
        //acting as an else statement. the default keyword will trigger if no cases match 
        //the number provided
        default:
            console.log(defaultMsg2);
    }
}

switchTime(19);
