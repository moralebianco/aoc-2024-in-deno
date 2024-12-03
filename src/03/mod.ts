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
  const data = readInput(import.meta.dirname + "/input");
  // 1
  const arr = (() => {
    const arr: string[] = [];
    for (const line of data) {
      [...line.matchAll(/(mul\(\d+,\d+\))/g)].forEach((g) => arr.push(g[1]));
    }
    return arr;
  })();
  console.log(foo(arr));
}
