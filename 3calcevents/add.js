const EventEmiter = require("events");

const addE = new EventEmiter();

const add = (firstNumber, secondNumber) => {
  console.log(firstNumber + secondNumber);
};
addE.addListener("add", add);

module.exports = addE;
