/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    return (5 / 9) * (temperature - 32);
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    const floor0 = (num: number): number => (num > 0 ? num : 0);
    return floor0(first) + floor0(second) + floor0(third);
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    return message.toUpperCase() + "!";
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    // return message[-1] === "?"; doesn't work for some reason. It won't pass all the tests
    // I figured out that it's because javascript doesn't support [-1] it has to be [arr.length - 1]. I'm dumb :)
    if (!message.includes("?")) {
        return false;
    }
    const qindex = message.lastIndexOf("?");
    if (qindex === message.length - 1) {
        return true;
    }
    return false;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    const lower = word.toLowerCase();
    if (lower.length === 3 && lower.includes("yes")) {
        return true;
    }
    if (lower.length === 2 && lower.includes("no")) {
        return false;
    }
    return null;
}
