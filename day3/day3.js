const fs = require("fs");
fs.readFile("./input.txt", "utf-8", (err, input) => {
  if (err) console.log(err);
  wire = input.split("\r\n");

  wire1 = wire[0].split(",");
  wire2 = wire[1].split(",");
  tracewire(wire1);
});

const tracewire = (wire, acc = ["0,0"]) => {
  for (i = 0; i < wire.length; i++) {
    [direction, distance] = [wire[i].slice(0, 1), wire[i].slice(1)];
    const steps = {
      R: () => `${x},${y}`,
      L: () => `${x},${y}`,
      U: () => `${x},${y}`,
      D: () => `${x},${y}`,
    };
  }
};
