const _f = Math.abs;
const is_safe = (l) =>
  (_f(
    l.slice(1).reduce((prev, curr, i) => prev + Math.sign(curr - l[i]), 0),
  ) === l.length - 1) && (
    !l.slice(1).find((e, i) => 1 > _f(l[i] - e) || _f(l[i] - e) > 3)
  );

const g = (l) => l.find((_, i) => is_safe(l.filter((_, j) => i !== j)));
const s = (prev, curr) => prev + curr;

if (import.meta.main) {
  const ls = Deno.readTextFileSync("./input").split("\n");

  const _0 = ls.map((l) => l.split(" ").map((e) => +e));
  const $1 = _0.map((l) => is_safe(l)).reduce(s, 0);
  console.log($1);

  const $2 = _0.map((l) => is_safe(l) || !!g(l)).reduce(s, 0);
  console.log($2);
}
