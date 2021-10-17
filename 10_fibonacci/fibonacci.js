const fibonacci = function(num) {
    num = +num;
    if (num < 1) {
        return 'OOPS';
    }
    fibNumbers = [1, 1];
    if (num == 1 || num == 2) {
        return 1;
    }
    while (fibNumbers.length < num) {
        const newNum = fibNumbers[fibNumbers.length - 1] + fibNumbers[fibNumbers.length - 2];
        fibNumbers.push(newNum);
    }
    return fibNumbers[fibNumbers.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
