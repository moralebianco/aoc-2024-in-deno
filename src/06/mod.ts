import { readLines } from "../util.ts";

function foo(map: string[][], [x, y]: [x: number, y: number]) {
  let sum = 0;
  while (x >= 0 && x < map.length && y >= 0 && y < map.length) {
    let [u, v] = [x, y];
    switch (map[x][y]) {
      case "^":
        u--;
        break;
      case "v":
        u++;
        break;
      case ">":
        v++;
        break;
      case "<":
        v--;
        break;
    }
    if (!(u >= 0 && u < map.length && v >= 0 && v < map.length)) {
      map[x][y] = "X";
      break;
    }
    if (map[u][v] == "#") {
      map[x][y] = (() => {
        switch (map[x][y]) {
          case "^":
            return ">";
          case "v":
            return "<";
          case ">":
            return "v";
          case "<":
            return "^";
          default:
            throw new Error();
        }
      })();
      continue;
    }
    map[u][v] = map[x][y];
    map[x][y] = "X";
    [x, y] = [u, v];
  }
  for (const row of map) {
    for (const cell of row) {
      if (cell === "X") sum++;
    }
  }
  return sum;
}

if (import.meta.main) {
  const data = readLines("06");
  // 1
  const map = data.map((l) => l.split(""));
  const i = map.flat().findIndex((e) => !e.match(/[\.|#]/g));
  console.log(foo(map, [Math.floor(i / map.length), i % map.length]));
}
