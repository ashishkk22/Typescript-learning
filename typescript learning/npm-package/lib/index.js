"use strict";
/**
 * @returns true if the input string is palindrome
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
function isPalindrome(input) {
    return input === input.split("").reverse().join("");
}
exports.isPalindrome = isPalindrome;
//# sourceMappingURL=index.js.map