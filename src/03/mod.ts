import { readInput } from "../util.ts";

function foo(operations: string[]) {
  let sum = 0;
  for (const o of operations) {
    const [x, y] = o.slice(4, -1).split(",").map((e) => +e);
    sum += x * y;
  }
  return sum;
}

if (import.meta.main) {
  let data = readInput(import.meta.dirname + "/input");
  // 1
  let opts = (() => {
    const arr: string[] = [];
    for (const line of data) {
      [...line.matchAll(/(mul\(\d+,\d+\))/g)].forEach((g) => arr.push(g[1]));
    }
    return arr;
  })();
  console.log(foo(opts));

  data = readInput(import.meta.dirname + "/input");
  // 2
  opts = (() => {
    let j = 0;
    const opts: string[] = [];
    const ranges = [{ index: -1, type: true }];
    for (const line of data) {
      [...line.matchAll(/(do\(\)|don't\(\))/g)].forEach((g) => {
        ranges.push({ index: g.index, type: g[1] === "do()" });
      });
      // TODO check algorithm and optimize removing unneeded indexes
      [...line.matchAll(/(mul\(\d+,\d+\))/g)].forEach((g) => {
        while (j + 1 < ranges.length && ranges[j + 1].index < g.index) j++;
        if (ranges[j].type) opts.push(g[1]);
      });
    }
    return opts;
  })();
  console.log(foo(opts));
}
