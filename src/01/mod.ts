import { readByLine } from "../util.ts";

function foo(left: number[], right: number[]) {
  let sum = 0;
  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);
  for (let i = 0; i < left.length; i++) {
    sum += Math.abs(left[i] - right[i]);
  }
  return sum;
}

if (import.meta.main) {
  // 1
  const [left, right] = (() => {
    const left = [], right = [];
    for (const line of readByLine(import.meta.dirname + "/input")) {
      const [l, r] = line.split(/\s+/);
      left.push(+l);
      right.push(+r);
    }
    return [left, right];
  })();
  console.log("foo:", foo(left, right));
}
