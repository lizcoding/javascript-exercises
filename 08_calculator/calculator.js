const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(input) {
	return input.reduce((total, num) => {
    return total + num;
  }, 0); 
};

const multiply = function(input) {
  return input.reduce((total, num) => {
    return total * num;
  }); 
};

const power = function(num, power) {
  return num**power;
};

const factorial = function(num1) {
  let f = 1;
  if (num1 === 0) {
    return f;
  };
  for (let i = 1; i <= num1; i++) {
    f *= i;
  };
  return f;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
