import { readInput } from "../util.ts";

const regPattern = /(?=(XMAS|SAMX))/g;

function foo(puzzle: string[]) {
  let sum = 0;
  const size = puzzle.length;

  // Horizontal
  for (const h of puzzle) {
    sum += [...h.matchAll(regPattern)].length;
  }

  // Vertical
  for (let j = 0; j < size; j++) {
    const v = [...Array(size)].map((_, i) => puzzle[i].at(j)).join("");
    sum += [...v.matchAll(regPattern)].length;
  }

  // Diagonals
  for (let i = size - 4; i > 0; i--) {
    const dL = [...Array(size - i)].map((_, j) => puzzle[i + j].at(j)).join("");
    sum += [...dL.matchAll(regPattern)].length;
  }
  for (let j = 0; j < size - 3; j++) {
    const dL = [...Array(size - j)].map((_, i) => puzzle[i].at(i + j)).join("");
    sum += [...dL.matchAll(regPattern)].length;
  }
  for (let j = 3; j < size; j++) {
    const dR = [...Array(j + 1)]
      .map((_, i) => puzzle[i].at(j - i)).join("");
    sum += [...dR.matchAll(regPattern)].length;
  }
  for (let i = 0; i < size - 4; i++) {
    const dR = [...Array(size - i)]
      .map((_, j) => puzzle[i + j].at(size - j)).join("");
    sum += [...dR.matchAll(regPattern)].length;
  }

  return sum;
}

if (import.meta.main) {
  const data = readInput(import.meta.dirname + "/input");
  // 1
  const puzzle = [...data];
  console.log(foo(puzzle));
}
