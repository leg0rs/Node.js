let hours = process.argv[2].split("");
let minutes = process.argv[3].split("");
let seconds = process.argv[4].split("");

hours.pop();
minutes.pop();
seconds.pop();

hours = Number(hours.join(""));
minutes = Number(minutes.join(""));
seconds = Number(seconds.join(""));

let time = (hours * 3600 + minutes * 60 + seconds) * 1000;

setTimeout(() => {
  console.log("END");
}, time);
