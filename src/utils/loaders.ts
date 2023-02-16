var fullLength: number = 26;

export default function loader(frac: number, full: number): string {
    frac = frac / full * fullLength;
    var fracLength: number = Math.floor(frac);
    var object: string = "▓".repeat(fracLength) + "░".repeat(fullLength - fracLength);
    return object;
}