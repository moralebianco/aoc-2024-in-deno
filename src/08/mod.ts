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
    for (const [x, y] of pos) map[x][y] = "#";
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
        const $0: Pos = [arr[i][0] - xDiff, arr[i][1] - yDiff];
        const $1: Pos = [arr[j][0] + xDiff, arr[j][1] + yDiff];
        if (
          $0[0] >= 0 && $0[0] < map.length &&
          $0[1] >= 0 && $0[1] < map[0].length
        ) pos.push($0);
        if (
          $1[0] >= 0 && $1[0] < map.length &&
          $1[1] >= 0 && $1[1] < map[0].length
        ) pos.push($1);
      }
    }
    return pos;
  }
}

function bar(map: string[][]) {
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
    for (const [x, y] of pos) map[x][y] = "#";
  }
  for (const row of map) {
    for (const e of row) if (e !== ".") sum++;
  }
  return sum;
  function getPositions(arr: Pos[]) {
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
          _0 = $0;
          $0 = [_0[0] - xDiff, _0[1] - yDiff];
        }
        let $1: Pos = [_1[0] + xDiff, _1[1] + yDiff];
        while (
          $1[0] >= 0 && $1[0] < map.length &&
          $1[1] >= 0 && $1[1] < map[0].length
        ) {
          pos.push($1);
          _1 = $1;
          $1 = [_1[0] + xDiff, _1[1] + yDiff];
        }
      }
    }
    return pos;
  }
}

if (import.meta.main) {
  const data = readLines("08");
  let map: string[][];
  // 1
  map = data.map((r) => r.split(""));
  console.log(foo(map));
  // 2
  map = data.map((r) => r.split(""));
  console.log(bar(map));
}
