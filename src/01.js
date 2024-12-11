if (import.meta.main) {
  const ls = Deno.readTextFileSync("./input").split("\n");
  const _0 = ls.map((l) => l.split(/\s+/g).map((e) => +e));
  const _1 = _0.map((l) => l[0]).sort();
  const _2 = _0.map((l) => l[1]).sort();
  const $1 = _0.map((_, i) => Math.abs(_2[i] - _1[i]))
    .reduce((prev, curr) => prev + curr, 0);
  console.log($1);

  const _3 = _0.map((l) => l[0]);
  const _4 = _0.map((l) => l[1]);
  const $2 = _0.map((_, i) => _3[i] * _4.filter((e) => e === _3[i]).length)
    .reduce((prev, curr) => prev + curr, 0);
  console.log($2);
}
