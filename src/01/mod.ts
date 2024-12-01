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

function bar(left: number[], counts: Record<string, number>) {
  let sum = 0;
  for (const e of left) {
    if (!counts[e]) continue;
    sum += e * counts[e];
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

  // 2
  const [counts] = (() => {
    const counts: Record<string, number> = {};
    for (const e of right) {
      if (!counts[e]) counts[e] = 0;
      counts[e]++;
    }
    return [counts];
  })();
  console.log("bar:", bar(left, counts));
}
