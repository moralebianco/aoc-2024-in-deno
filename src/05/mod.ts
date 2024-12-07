import { readLines } from "../util.ts";

function check(update: number[], dict: Record<number, Set<number>>) {
  for (let i = 0; i < update.length; i++) {
    for (let j = i + 1; j < update.length; j++) {
      if (!dict[update[j]].has(update[i])) return false;
    }
  }
  return true;
}

function foo(rules: number[][], updates: number[][]) {
  let sum = 0;
  const dict: Record<number, Set<number>> = {};

  for (const [x, y] of rules) {
    dict[y] ??= new Set();
    dict[y].add(x);
  }
  for (const update of updates) {
    if (check(update, dict)) {
      sum += update[Math.floor(update.length / 2)];
    }
  }

  return sum;
}

function bar(rules: number[][], updates: number[][]) {
  let sum = 0;
  const dict: Record<number, Set<number>> = { 0: new Set() };

  for (const [x, y] of rules) {
    dict[y] ??= new Set();
    dict[y].add(x);
    dict[0].add(y);
  }
  for (const update of updates) {
    if (!check(update, dict)) {
      const pages = sort([0], new Set(update));
      if (pages) sum += pages[pages.length / 2];
    }
  }

  function sort(sorted: number[], update: Set<number>) {
    if (update.size == 0) return sorted;
    const last = sorted[sorted.length - 1];
    for (const e of update.intersection(dict[last])) {
      sorted.push(e);
      update.delete(e);
      if (sort(sorted, update)) return sorted;
      update.add(e);
      sorted.pop();
    }
  }

  return sum;
}

if (import.meta.main) {
  const data = readLines("05");
  // 1
  let i;
  const rules: number[][] = [];
  const updates: number[][] = [];
  for (i = 0; data[i] !== ""; i++) {
    rules.push(data[i].split("|").map((e) => +e));
  }
  for (i += 1; i < data.length; i++) {
    updates.push(data[i].split(",").map((e) => +e));
  }
  console.log(foo(rules, updates));

  // 2
  console.log(bar(rules, updates));
}
