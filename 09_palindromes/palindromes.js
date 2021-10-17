const palindromes = function(str) {
    str = str.toUpperCase();
    let strArray = Array.from(str);
    const validArray = strArray.filter(character => {
        if (character.toUpperCase() != character.toLowerCase()) {
            return true;
        }
    });
    let startIndex = 0;
    let endIndex = validArray.length - 1;
    while (startIndex < endIndex) {
        let char1 = validArray[startIndex];
        let char2 = validArray[endIndex];
        if (char1 == char2) {
            startIndex++;
            endIndex--;
        } else {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
