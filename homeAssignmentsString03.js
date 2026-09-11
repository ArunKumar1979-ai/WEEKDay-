// ==========================================
// Example 1
// Split string and find length of last word
// ==========================================

let s1 = "Hello World";

let words1 = s1.split(" ");
let lastWord1 = words1[words1.length - 1];
let length1 = lastWord1.length;

console.log("Example 1:");
console.log("Last word:", lastWord1);
console.log("Length:", length1);


// ==========================================
// Example 2
// Trim, split and find length of last word
// ==========================================

function lengthOfLastWord(s) {
    let trimmedString = s.trim();
    let words = trimmedString.split(" ");
    let lastWord = words[words.length - 1];
    let length = lastWord.length;

    return length;
}

console.log("\nExample 2:");
console.log(lengthOfLastWord(" fly me to the moon "));


// ==========================================
// Example 3
// Check if two strings are anagrams
// ==========================================

function isAnagram(str1, str2) {
    let string1 = str1.replace(/\s/g, "").toLowerCase();
    let string2 = str2.replace(/\s/g, "").toLowerCase();

    let sortedString1 = string1.split("").sort().join("");
    let sortedString2 = string2.split("").sort().join("");

    return sortedString1 === sortedString2;
}

console.log("\nExample 3:");
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));