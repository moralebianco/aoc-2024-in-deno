export function* readInput(filename: string) {
  const file = Deno.readTextFileSync(filename);
  for (const line of file.split("\n")) {
    yield line;
  }
}
