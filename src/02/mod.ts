import { readLines } from "../util.ts";

function foo(reports: number[][]) {
  let sum = 0;
  function check(report: number[]) {
    const unit = report[0] < report[1] ? -1 : 1;
    for (let i = 0; i < report.length - 1; i++) {
      const diff = (report[i] - report[i + 1]) * unit;
      if (1 > diff || diff > 3) return 0;
    }
    return 1;
  }
  for (const r of reports) sum += check(r);
  return sum;
}

function bar(reports: number[][]) {
  let sum = 0;
  function getIndex(report: number[], start = 0) {
    const unit = report[0] < report[1] ? -1 : 1;
    for (let i = start; i < report.length - 1; i++) {
      const diff = (report[i] - report[i + 1]) * unit;
      if (1 > diff || diff > 3) return i;
    }
    return -1;
  }
  for (const r of reports) {
    const i = getIndex(r);
    if (
      i == -1 ||
      (i > 0 && getIndex(r.slice(0, i).concat(r.slice(i + 1)), i - 1) == -1) ||
      getIndex(r.slice(0, i + 1).concat(r.slice(i + 2)), i) == -1 ||
      getIndex(r.slice(1)) == -1
    ) {
      sum += 1;
    }
  }
  return sum;
}

if (import.meta.main) {
  const data = readLines("02");
  // 1
  const reports = [];
  for (const line of data) {
    reports.push(line.split(/\s+/).map((e) => +e));
  }
  console.log(foo(reports));
  // 2
  console.log(bar(reports));
}
