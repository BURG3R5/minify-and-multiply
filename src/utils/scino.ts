const scino = require("scino");

export default function scientific(num: number): string {
  return scino(num, 3);
}
