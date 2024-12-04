export function readLines(day: string) {
  return Deno.readTextFileSync(
    `${import.meta.dirname}/${day}/input`,
  ).split("\n");
}
