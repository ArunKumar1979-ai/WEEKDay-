// Function to find the intersection of two arrays
function intersection(arr1, arr2) {
    let result = [];

    // Loop through each element of arr1
    // 0  1  2  3 ...
    for (let i = 0; i <= arr1.length - 1; i++) {
        let currentElement = arr1[i];

        // Check if element is in arr2 AND not already included in result
        if (arr2.includes(currentElement) && !result.includes(currentElement)) {
            result.push(currentElement);
        }
    }

    return result;
}

// Example 1: Typical case
let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
let result1 = intersection(array1, array2);
console.log(result1); // [3, 4]

// Example 2: No common elements
let array3 = [10, 20, 30];
let array4 = [40, 50, 60];
let result2 = intersection(array3, array4);
console.log(result2); // []

// Example 3: All elements common (with duplicates in inputs)
let array5 = [1, 1, 2, 2];
let array6 = [1, 2, 3];
let result3 = intersection(array5, array6);
console.log(result3); // [1, 2]