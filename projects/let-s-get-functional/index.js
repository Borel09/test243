// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lowdown-borel');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *      //make sure you are cd inside of borel09.github.io folder in the terminal
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let male = 0;
    _.filter(array, function(customer){
        if(customer.gender === 'male'){
            male += 1;
        }
    });
    return male;
};

var femaleCount = function(array){
    let female = 0;
    array.reduce(function(result, ele, i){
        if(array[i].gender === 'female'){
            female += 1;
        }
    }, 0);
    return female;
};

var oldestCustomer = function(array){
    let oldest = array[0];
    array.reduce(function(previousPerson, currentPerson){
        if(currentPerson.age > previousPerson.age){
            oldest = currentPerson;
            return oldest;
        }
        return previousPerson;
    });
    return oldest.name;
};

var youngestCustomer = function(array){
    let youngest = array[0];
    array.reduce(function(previousPerson, currentPerson){
        if(currentPerson.age < previousPerson.age){
            youngest = currentPerson;
            return youngest;
        }
        return previousPerson;
    });
    return youngest.name;
};

var averageBalance = function(array){
	let noStr = [];
	let average = 0;
	let sum = 0;
	array.filter(function(customer){
		let numBal = customer.balance.replace(/[^\d.-]/g, '');
		let realNum = parseFloat(numBal);
		noStr.push(realNum);
	});
	for(let i = 0; i < noStr.length; i++){
		sum += noStr[i];
		average = sum/noStr.length;
	}
	return average;
};

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
