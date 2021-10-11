const reverseString = function(str) {
    let newStr = '';
    if (str == '') {
        return newStr;
    }
    for (let i = 1; i <= str.length; i++) {
        newStr += str[str.length - i]
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
