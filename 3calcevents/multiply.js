const EventEmiter = require("events");

const multiplyE = new EventEmiter();

const multiply = (firstNumber, secondNumber) => {
  console.log(firstNumber * secondNumber);
};
multiplyE.addListener("multiply", multiply);

module.exports = multiplyE;
