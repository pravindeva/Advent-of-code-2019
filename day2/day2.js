const fs = require("fs");

function func(num1, num2, input) {
  data = input.split(",").map((str) => Number(str));
  data[1] = num1;
  data[2] = num2;
  let i = 0;
  while (i < data.length) {
    [op1, op2, op3] = [data[i + 1], data[i + 2], data[i + 3]];
    if (data[i] === 1) {
      data[op3] = data[op1] + data[op2];
    } else if (data[i] === 2) {
      data[op3] = data[op1] * data[op2];
    } else if (data[i] === 99) {
      break;
    }
    i += 4;
  }
  return data[0];
}

fs.readFile("./input.txt", "UTF-8", (err, input) => {
  console.time("day2");
  if (err) {
    console.log(err);
  }
  // Part1
  console.log(func(12, 2, input));
  // Part2
  let output = 19690720;
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 99; j++) {
      if (func(i, j, input) === output) {
        return console.log(100 * i + j);
      }
    }
  }
  console.timeEnd("day2");
});
