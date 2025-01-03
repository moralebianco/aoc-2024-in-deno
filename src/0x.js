export const RF = (_) => Deno.readTextFileSync("./input");

export const RM = (_) => RF().split("\n").map((l) => l.split(""));

export const SM = (M) => M.forEach((r) => console.debug(r.join("")));
