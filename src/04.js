const R = Deno.readTextFileSync;

if (import.meta.main) {
  const M = R("./input").split("\n").map((e) => e.split(""));
  const I = Array(M.length).fill(0).map((_, i) => i);
  const J = I.slice(1, -1);

  const _f = (e) => e.join("").match(/(?=(XMAS|SAMX))/g)?.length ?? 0;
  const _1 = [
    M,
    I.map((i) => I.map((j) => M[j][i])),
    I.slice(1, -3).map((i) => I.slice(0, -i).map((j) => M[i + j][j])),
    [I.map((i) => M[i][i])],
    I.slice(1, -3).map((j) => I.slice(0, -j).map((i) => M[i][i + j])),
    I.slice(3, -1).map((j) => I.slice(0, j + 1).map((i) => M[i][j - i])),
    [I.map((i) => M[i][I.length - i - 1])],
    I.slice(1, -3).map((i) => I.slice(0, -i).map((j) => M[i + j].at(-j - 1))),
  ];
  const $1 = _1.flat().reduce((prev, curr) => prev + _f(curr), 0);
  console.log($1);

  const _2 = (i, j) => M[i - 1][j - 1] + M[i][j] + M[i + 1][j + 1];
  const _3 = (i, j) => M[i + 1][j - 1] + M[i][j] + M[i - 1][j + 1];
  const _g = (s, t) => !!(s.match(/(MAS|SAM)/) && t.match(/(MAS|SAM)/));
  const $2 = J.map((i) => J.map((j) => _g(_2(i, j), _3(i, j))))
    .flat().reduce((prev, curr) => prev + curr, 0);
  console.log($2);
}
