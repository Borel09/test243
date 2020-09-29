//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    let arr = [];
    for(let key in object){
        arr.push(object[key]);
    }
    return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    let arr = [];
    for(let key in object){
        arr.push(key);
    }
    return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let arr = [];
    for(let key in object){
        if(typeof object[key] === 'string')
        arr.push(object[key]);
    }
    return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return 'array';
    }else if(typeof(collection) === 'object'){
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let strArr = string.split(' ');
    let newArr = [];
    for(let i = 0; i < strArr.length; i++){
        newArr.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1));
    }
    return newArr.join(' ');
}
console.log(capitalizeAllWords('ryan borel'));
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function welcomeMessage(object) {
    return `Welcome ${object.name.charAt(0).toUpperCase() + object.name.slice(1)}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
return `${object.name.charAt(0).toUpperCase() + object.name.slice(1)}` +
` is a ${object.species.charAt(0).toUpperCase() + object.species.slice(1)}`;
}
console.log(profileInfo({name: "jake", species: "dog"}));
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if(object.noises && object.noises.length > 0){
        return object.noises.join(' ')
    }
    return 'there are no noises'
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    let newArr = string.split(' ');
    for(let i = 0; i < newArr.length; i++){
        if(newArr[i] === word){
            return true;
        }
    }
    return false;
}
//console.log(hasWord('This is a test', 'test'))

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}
//console.log(addFriend('jimmy', {friends: []}));

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    for(let key in object){
        if(object[key] === object.friends){
            for(let i = 0; i < object.friends.length; i++){
                if(object.friends[i] === name){
                    return true;
                }
            }
        }
    }
    return false;
}
//console.log(isFriend("jimmy",{}));

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function nonFriends(name, arr){
    var nameList = [];
    var result = [];
    var current = null;
    for(var i = 0; i < arr.length; i++){
        if(name === arr[i].name){
            current = arr[i];
        }else{
            nameList.push(arr[i].name);
        }
    }
    if(current === null){
        return nameList;
    }
    for(var j = 0; j < nameList.length; j++){
        if(current.friends.indexOf(nameList[j]) === -1){
            result.push(nameList[j]);
        }
    }
    return result;
}
//console.log(nonFriends("Jimmy", data));   

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//var data = {a: "one", b: "two", "hokey": false};

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}
//console.log(updateObject(data, "ponies", "yes"));
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//var data = {a: "one", b: "two", "hokey": false};
function removeProperties(object, array) {
    for(let i = 0; i < array.length; i++){
        for(let key in object){
            if(array[i] === key){
                delete object[key];
            }
        }
    }
    return object;
}
//console.log(removeProperties(data, ["a","hokey"]));

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// var arrayOne = [1,2,2,2,3,4,5,5,5,5,"a","b","b","b","c"];
// var arrayTwo = ["hello", "hello", "hello", "hello", "hello", "world",
// "hello", "world", "world", "world"];

function dedup(array) {
    let uniqueChars = [];
    array.forEach((f) => {
        if(!uniqueChars.includes(f)){
            uniqueChars.push(f);
        }
    });
    return uniqueChars;
}
//console.log(dedup(arrayOne));
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}