export default function pad(str: string, length: number, char = " "): string {
  return str.padStart((str.length + length) / 2, char).padEnd(length, char);
}
