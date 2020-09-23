/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, string){
    for(var i = 0; i < array.length; i++){
        if(array[i]['name'] === string){
            return array[i];
        }
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(array, string, obj){
    for(let i = 0; i < array.length; i++){
        if(array[i]['name'] === string){
            return array.splice(array[i], array[i], obj);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(array, string){
    for(let i = 0; i < array.length; i++){
        if(array[i].name === string){
            array.splice(i);
        }
    }
}

//var result = arrayRemove(array, 6);// result = [1, 2, 3, 4, 5, 7, 8, 9, 0]
    //console.log(result)
//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(array, object){
    if(object['name'].length > 0 && object['species'].length >0){
        for(let i = 0; i < array.length; i++){
            if(array[i].name === object.name){
                return;
            }
        }
        array.push(object);
    }
}




/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
