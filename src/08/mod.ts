import { readLines } from "../util.ts";

type Pos = [x: number, y: number];

function getPositions(map: string[][], arr: Pos[], resonant: boolean) {
  const pos: Pos[] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let _0 = [arr[i][0], arr[i][1]];
      let _1 = [arr[j][0], arr[j][1]];
      const xDiff = _1[0] - _0[0];
      const yDiff = _1[1] - _0[1];
      let $0: Pos = [_0[0] - xDiff, _0[1] - yDiff];
      while (
        $0[0] >= 0 && $0[0] < map.length &&
        $0[1] >= 0 && $0[1] < map[0].length
      ) {
        pos.push($0);
        if (!resonant) break;
        _0 = $0;
        $0 = [_0[0] - xDiff, _0[1] - yDiff];
      }
      let $1: Pos = [_1[0] + xDiff, _1[1] + yDiff];
      while (
        $1[0] >= 0 && $1[0] < map.length &&
        $1[1] >= 0 && $1[1] < map[0].length
      ) {
        pos.push($1);
        if (!resonant) break;
        _1 = $1;
        $1 = [_1[0] + xDiff, _1[1] + yDiff];
      }
    }
  }
  return pos;
}

function foo(map: string[][], resonant: boolean) {
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
    const pos = getPositions(map, v, resonant);
    for (const [x, y] of pos) map[x][y] = "#";
  }
  for (const row of map) {
    for (const e of row) if (e === "#") sum++;
  }
  return sum;
}

if (import.meta.main) {
  const data = readLines("08");
  let map: string[][];
  // 1
  map = data.map((r) => r.split(""));
  console.log(foo(map, false));
  // 2
  map = data.map((r) => r.split(""));
  console.log(foo(map, true));
}
