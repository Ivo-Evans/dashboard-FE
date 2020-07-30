export default function farenheightToCelsius(n) {
    if (typeof n !== "number") { return }
    return Math.round(n - 32 * (5/9))
}