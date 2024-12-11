const f = (m) =>
  m.slice(4, -1).split(",").map((e) => +e)
    .reduce((prev, curr) => prev * curr, 1);
const g = (prev, curr) =>
  (prev[0] && curr.indexOf("mul") === 0)
    ? [true, prev[1] + f(curr)]
    : [curr === "do()", prev[1]];

if (import.meta.main) {
  const ls = Deno.readTextFileSync("./input").split("\n");

  const _1 = ls.flatMap((l) => l.match(/(mul\(\d+,\d+\))/g).map(f));
  console.log(_1.reduce((prev, curr) => prev + curr, 0));

  const _2 = ls.join("").match(/(mul\(\d+,\d+\))|(do\(\))|(don't\(\))/g);
  console.log(_2.reduce(g, [true, 0])[1]);
}
