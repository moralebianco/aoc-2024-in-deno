import { readLines } from "../util.ts";

function foo(left: number[], right: number[]) {
  let sum = 0;
  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);
  for (let i = 0; i < left.length; i++) {
    sum += Math.abs(left[i] - right[i]);
  }
  return sum;
}

function bar(left: number[], counts: Record<string, number>) {
  let sum = 0;
  for (const e of left) {
    sum += e * (counts[e] ?? 0);
  }
  return sum;
}

if (import.meta.main) {
  const data = readLines("01");
  // 1
  const left = [], right = [];
  for (const line of data) {
    const [l, r] = line.split(/\s+/);
    left.push(+l);
    right.push(+r);
  }
  console.log("foo:", foo(left, right));

  // 2
  const counts: Record<string, number> = {};
  for (const e of right) {
    counts[e] = (counts[e] ?? 0) + 1;
  }
  console.log("bar:", bar(left, counts));
}
