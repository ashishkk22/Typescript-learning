/**
 * @returns true if the input string is palindrome
 */

export function isPalindrome(input: string): boolean {
  return input === input.split("").reverse().join("");
}
