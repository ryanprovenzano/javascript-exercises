const removeFromArray = function(arr) { //Removes the optional arguments from arr
    if (arguments.length === 0) return arr;
    
    const args = Array.from(arguments);
    args.shift();
    return arr.filter( element => !args.includes(element) );

    
};

// Do not edit below this line
module.exports = removeFromArray;
