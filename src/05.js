import { RF } from "./0x.js";

const F = (A) => A[Math.floor(A.length / 2)];
const S = (prev, curr) => prev + F(curr);
const R = (S, E) => S.difference(new Set([E]));

//;
const g = (D) => {
  const t = { 0: new Set() };
  const f = (T, E) => (T[E] ??= new Set());
  D.map((r) => r.split("|")).forEach(
    ([_e, e]) => f(t, e).add(+_e) & t[0].add(+e) & f(t, _e),
  );
  return t;
};

if (import.meta.main) {
  const [_0, _1] = RF().split("\n\n").map((s) => s.split("\n"));
  const _2 = g(_0);
  const _3 = _1.map((s) => s.split(",").map((e) => +e));
  const _l = (S, A) => new Set(A).intersection(S).size;
  const ft = (A) => A.find((v, i) => _l(_2[v], A.slice(i + 1)));
  console.log(_3.filter((a) => !ft(a)).reduce(S, 0));

  const _4 = _3.filter((a) => ft(a));
  const st = (e, S) => ([e].concat(
    [...S.intersection(_2[e])].reduce(
      (A, E, t) => (A.length < (t = st(E, R(S, E))).length ? t : A),
      [],
    ),
  ));
  console.log(_4.map((a) => st(0, new Set(a))).reduce(S, 0));
}
