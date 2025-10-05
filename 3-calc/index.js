const first = Number(process.argv[2]);
const second = Number(process.argv[3]);
const action = process.argv[4];

if (action === "add") {
  const add = require("./add.js");
  console.log(add(first, second));
} else {
  const multiply = require("./multiply.js");
  console.log(multiply(first, second));
}
