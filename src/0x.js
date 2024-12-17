export const RF = (_) => Deno.readTextFileSync("./input");

export const SM = (M) => M.forEach((r) => console.debug(r.join("")));
