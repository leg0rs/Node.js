const first = Number(process.argv[2]);
const second = Number(process.argv[3]);
const action = process.argv[4];

if (action === "add") {
  const addE = require("./add.js");
  addE.emit("add", first, second);
} else {
  const multiplyE = require("./multiply.js");
  multiplyE.emit("multiply", first, second);
}
