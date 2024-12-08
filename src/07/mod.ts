import { readLines } from "../util.ts";

function foo(ops: number[][]) {
  let sum = 0;
  function check(values: number[], index: number, acc: number): number {
    if (index === values.length - 1) {
      if (acc !== values[0]) return 0;
      return values[0];
    }
    index += 1;
    return check(values, index, acc + values[index]) ||
      check(values, index, acc * values[index]);
  }
  ops.forEach((e) => sum += check(e, 1, e[1]));
  return sum;
}

if (import.meta.main) {
  const data = readLines("07");
  // 1
  const ops = data.map(
    (e) => e.replace(":", "").split(" "),
  ).map((e) => e.map((v) => +v));
  console.log(foo(ops));
}
