/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    }
    const out = [numbers[0], numbers[numbers.length - 1]];
    return out;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number) => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    function convert(str: string): number {
        const x = parseInt(str);
        return Number.isNaN(x) ? 0 : x;
    }
    const int_array = numbers.map(convert);
    return int_array;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    function convert(str: string): number {
        const stripped = str.replace("$", "");
        const x = parseInt(stripped);
        return Number.isNaN(x) ? 0 : x;
    }
    const int_array = amounts.map(convert);
    return int_array;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
import { isQuestion } from "./functions";
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const filtered_messages = messages.filter(
        (message: string) => !isQuestion(message)
    );
    const capitalized_messages = filtered_messages.map((message: string) =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );
    return capitalized_messages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word: string) => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const isRGB = (col: string): number => {
        switch (col.length) {
        case 0:
            return 0;
        case 3:
            return col.includes("red") ? 0 : 1;
        case 4:
            return col.includes("blue") ? 0 : 1;
        case 5:
            return col.includes("green") ? 0 : 1;
        default:
            return 1;
        }
    };
    return colors.reduce(
        (total: number, col: string) => isRGB(col) + total,
        0
    ) === 0
        ? true
        : false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce((total: number, num: number) => total + num, 0);
    return `${sum}=${addends.join("+")}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const new_values: number[] = [...values];
    const first_negative = new_values.findIndex((num: number) => num < 0);
    if (first_negative === -1) {
        new_values.push(
            new_values.reduce((total: number, num: number) => total + num, 0)
        );
        return new_values;
    }
    new_values.splice(
        first_negative + 1,
        0,
        new_values
            .slice(0, first_negative)
            .reduce((total: number, num: number) => total + num, 0)
    );
    return new_values;
}
