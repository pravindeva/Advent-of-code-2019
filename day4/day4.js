// part1
const checkDoubleI = (b) => {
  step1 = false;
  for (let i = 0; i < b.length - 1; i++) {
    if (b[i] === b[i + 1]) {
      step1 = true;
      break;
    }
  }
  return step1;
};

// part2
let checkDoubleII = (b) => {
  count = 1;
  obj = {};
  for (let i = 0; i < b.length; i++) {
    if (b[i] === b[i + 1]) {
      obj[b[i]] = ++count;
    } else {
      debugger;
      count = 1;
    }
  }
  values = new Set(Object.values(obj));
  return values.has(2);
};

const day4 = () => {
  console.time("day4");
  let result = 0;
  for (let i = 136760; i < 595730; i++) {
    b = i.toString().split("").map(Number);
    c = b.sort().join("");
    if (i === Number(c) && checkDoubleII(b)) result += 1;
  }
  console.timeEnd("day4");
  return console.log(result);
};
