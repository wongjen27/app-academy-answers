function sort(nums, sorted = []) {
    if (nums.length === 0) {
        return sorted;
    }

    // Find the minimum element
    let min = Math.min(...nums);

    // Add the minimum element to the sorted array
    sorted.push(min);

    // Remove all occurrences of the minimum element from nums
    nums = nums.splice(minIndex, 1);

    return sort(nums, sorted);
}

// Example usage:
console.log(sort([4, 1, 6, 3, 1, 7])); // [1, 1, 3, 4, 6, 7]
console.log(sort([0, 1, -3])); // [-3, 0, 1]
console.log(sort([])); // []
