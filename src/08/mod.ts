import { readLines } from "../util.ts";

type Pos = [x: number, y: number];

function foo(map: string[][]) {
  let sum = 0;
  const dict = new Map<string, Pos[]>();
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] === ".") continue;
      if (!dict.has(map[i][j])) dict.set(map[i][j], []);
      dict.get(map[i][j])?.push([i, j]);
    }
  }
  for (const [_, v] of dict.entries()) {
    const pos = getPositions(v);
    for (const [x, y] of pos) {
      if (x >= 0 && x < map.length && y >= 0 && y < map[0].length) {
        map[x][y] = "#";
      }
    }
  }
  for (const row of map) {
    for (const e of row) if (e === "#") sum++;
  }
  return sum;
  function getPositions(arr: Pos[]) {
    const pos: Pos[] = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        const xDiff = arr[j][0] - arr[i][0];
        const yDiff = arr[j][1] - arr[i][1];
        pos.push([arr[i][0] - xDiff, arr[i][1] - yDiff]);
        pos.push([arr[j][0] + xDiff, arr[j][1] + yDiff]);
      }
    }
    return pos;
  }
}

if (import.meta.main) {
  const data = readLines("08");
  // 1
  const map = data.map((r) => r.split(""));
  console.log(foo(map));
}
