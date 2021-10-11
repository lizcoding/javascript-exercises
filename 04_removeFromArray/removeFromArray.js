const removeFromArray = function(givenArray) {
    if (arguments.length == 1) {
        return givenArray;
    }
    for (const item of arguments) {
        for (let i = 0; i < givenArray.length; i++) {
            if (givenArray[i] === item) {
                givenArray.splice(i, 1);
            }
        }
    }
    return givenArray;
};

// Do not edit below this line
module.exports = removeFromArray;
