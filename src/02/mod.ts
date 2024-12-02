import { readByLine } from "../util.ts";

function foo(reports: number[][]) {
  let sum = 0;
  function check(report: number[]) {
    const flag = report[0] < report[1];
    for (let i = 0; i < report.length - 1; i++) {
      let diff = report[i] - report[i + 1];
      if (flag) diff *= -1;
      if (1 > diff || diff > 3) return 0;
    }
    return 1;
  }
  for (const r of reports) sum += check(r);
  return sum;
}

function bar(reports: number[][]) {
  let sum = 0;
  function getIndex(report: number[]) {
    const flag = report[0] < report[1];
    for (let i = 0; i < report.length - 1; i++) {
      let diff = report[i] - report[i + 1];
      if (flag) diff *= -1;
      if (1 > diff || diff > 3) return i;
    }
    return -1;
  }
  for (const r of reports) {
    const i = getIndex(r);
    if (
      i == -1 ||
      (i > 0 && getIndex(r.slice(0, i).concat(r.slice(i + 1))) == -1) ||
      getIndex(r.slice(0, i + 1).concat(r.slice(i + 2))) == -1 ||
      getIndex(r.slice(1)) == -1
    ) {
      sum += 1;
    }
  }
  return sum;
}

if (import.meta.main) {
  const data = readByLine(import.meta.dirname + "/input");
  // 1
  const reports = (() => {
    const matrix = [];
    for (const line of data) {
      matrix.push(line.split(/\s+/).map((e) => +e));
    }
    return matrix;
  })();
  console.log(foo(reports));
  // 2
  console.log(bar(reports));
}
