import { readInput } from "../util.ts";

function foo(puzzle: string[]) {
  let sum = 0;
  const size = puzzle.length;
  const regp = /(?=(XMAS|SAMX))/g;

  // Horizontal
  for (const h of puzzle) {
    sum += [...h.matchAll(regp)].length;
  }

  // Vertical
  for (let j = 0; j < size; j++) {
    const v = [...Array(size)].map((_, i) => puzzle[i].at(j)).join("");
    sum += [...v.matchAll(regp)].length;
  }

  // Diagonals
  for (let i = size - 4; i > 0; i--) {
    const dL = [...Array(size - i)].map((_, j) => puzzle[i + j].at(j)).join("");
    sum += [...dL.matchAll(regp)].length;
  }
  for (let j = 0; j < size - 3; j++) {
    const dL = [...Array(size - j)].map((_, i) => puzzle[i].at(i + j)).join("");
    sum += [...dL.matchAll(regp)].length;
  }
  for (let j = 3; j < size; j++) {
    const dR = [...Array(j + 1)]
      .map((_, i) => puzzle[i].at(j - i)).join("");
    sum += [...dR.matchAll(regp)].length;
  }
  for (let i = 0; i < size - 4; i++) {
    const dR = [...Array(size - i)]
      .map((_, j) => puzzle[i + j].at(size - j)).join("");
    sum += [...dR.matchAll(regp)].length;
  }

  return sum;
}

function bar(puzzle: string[]) {
  let sum = 0;
  const size = puzzle.length;
  const regp = /(MAS|SAM)/g;

  for (let i = 1; i < size - 1; i++) {
    for (let j = 1; j < size - 1; j++) {
      const ch = puzzle[i].charAt(j);
      const dL = puzzle[i - 1].at(j - 1) + ch + puzzle[i + 1].at(j + 1);
      const dR = puzzle[i + 1].at(j - 1) + ch + puzzle[i - 1].at(j + 1);
      if (dL.match(regp) && dR.match(regp)) sum++;
    }
  }

  return sum;
}

if (import.meta.main) {
  const data = readInput(import.meta.dirname + "/input");
  // 1
  const puzzle = [...data];
  console.log(foo(puzzle));
  // 2
  console.log(bar(puzzle));
}
