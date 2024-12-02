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
}
