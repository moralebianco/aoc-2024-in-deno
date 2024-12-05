import { readLines } from "../util.ts";

class Node {
  children: Node[] = [];

  constructor(readonly value: number) {}

  addChild(child: Node) {
    for (const c of this.children) {
      if (c.value == child.value) return;
    }
    this.children.push(child);
  }
}

function foo(rules: number[][], updates: number[][]) {
  let sum = 0;
  const dict: Record<number, Node> = {};

  for (const [x, y] of rules) {
    dict[x] ??= new Node(x);
    dict[y] ??= new Node(y);
    dict[y].addChild(dict[x]);
  }

  for (const update of updates) {
    if (check(update)) {
      sum += update[Math.floor(update.length / 2)];
    }
  }

  function check(update: number[]) {
    for (let i = 0, j: number; i < update.length; i++) {
      for (j = i + 1; j < update.length; j++) {
        const node = dict[update[j]];
        if (!node.children.find((c) => c.value == update[i])) {
          return false;
        }
      }
    }
    return true;
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
}
