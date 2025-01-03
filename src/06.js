import { RM } from "./0x.js";

if (import.meta.main) {
  const M = RM(); //;
  const P = [];
  const V = () => M[x][y];

  const [X, Y] = (() => (M.reduce((t, l, x) => (
    t || l.reduce((t, c, y) => t || ("^v<>".includes(c) && [x, y]), false)
  ), false)))();

  let [x, y] = [X, Y];
  let [u, v] = [X, Y];

  const JS = JSON.stringify;
  const _S = V();
  const _0 = { "<": "^", "^": ">", ">": "v", "v": "<" };
  const _1 = () => M[x][y] = _0[V()];
  const _2 = () => (M[u][v] = V()) | ([x, y] = [u, v]);
  const is = () => u >= 0 && u < M.length && v >= 0 && v < M.length;
  const _F = () =>
    ([u, v] = [x, y]) &&
    (V() === "<" ? v-- : (V() === ">" ? v++ : (V() === "^" ? u-- : u++)));
  while (P.push([x, y]) && is() && ((M[u][v] === "#" ? _1() : _2()) | 1)) _F();
  const _4 = new Set(P.filter((a) => a[0] != X | a[1] != Y).map((a) => JS(a)));
  console.log(_4.size + 1);

  const _5 = ([i, j] = P) => {
    [x, y] = [X, Y];
    [u, v] = [X, Y];
    M[x][y] = _S;
    const D = {};
    const f = (t = JS([u, v, V()])) => !D[t] && ((D[t] = 1) | _2() | 1);
    M[i][j] = "#";
    while (is() && (M[u][v] === "#" ? _1() : f())) _F();
    M[i][j] = ".";
    return is();
  };
  console.log([..._4].reduce((P, S) => P + _5(JSON.parse(S)), 0));
}
