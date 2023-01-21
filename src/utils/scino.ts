const scino = require("scino");

export default function scientific(num: number): string {
  if (num === 0) {
    return "0";
  }

  const result = scino(num, 3);

  if (
    result.endsWith("10⁰") ||
    result.endsWith("10¹") ||
    result.endsWith("10⁻¹") ||
    result.endsWith("10²")
  ) {
    return num.toFixed(2);
  }

  return result;
}
