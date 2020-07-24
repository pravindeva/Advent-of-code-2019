// question1
const fs = require("fs");
function question1() {
  fs.readFile("./input.txt", "UTF-8", (err, data) => {
    console.time("question1");
    if (err) console.log(err);
    let inputArr = data.split("\r\n");
    const answer = inputArr
      .map((str) => Number(str))
      .reduce((sum, num) => {
        sum += Math.floor(num / 3) - 2;
        return sum;
      }, 0);
    console.log(answer);
    console.timeEnd("question1");
  });
}
question1();

// question2

function question2() {
  console.time("question2");
  fs.readFile("input.txt", "UTF-8", (err, data) => {
    if (err) {
      console.log(err);
    }
    function sumval(num) {
      let val = Math.floor(num / 3) - 2;
      return val > 0 ? val + sumval(val) : 0;
    }
    inputArr = data.split("\r\n");
    input = inputArr
      .map((str) => Number(str))
      .reduce((sum, num) => (sum += sumval(num)), 0);
    console.log(input);
    console.timeEnd("question2");
  });
}

question2();
