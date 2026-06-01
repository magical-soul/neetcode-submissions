class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // not the optimal solution because of sorting of array
    // time complexity => O(n log n)
    // space complexity => O(n) (because of sorting)
    // longestConsecutive(nums) {

    //     if (!Array.isArray(nums) || nums.length === 0) return 0;

    //     nums.sort((a, b) => a - b);

    //     let maxCount = 1;
    //     let count = 1;

    //     for (let i = 1; i < nums.length; i++) {
    //         if (nums[i] === nums[i - 1]) {
    //             // duplicate, ignore
    //             continue;
    //         }

    //         if (nums[i] === nums[i - 1] + 1) {
    //             // consecutive number, extend current sequence
    //             count++;
    //         } else {
    //             // gap found -> store max and reset current sequence length to 1
    //             if (count > maxCount) maxCount = count;
    //             count = 1;
    //         }
    //     }

    //     return Math.max(maxCount, count);

    // }


    // optimal solution using hashset
    // Time: O(n)
    // Space: O(n)
    longestConsecutive(nums) {

        const numSet = new Set(nums);
        let longest = 0;

        for (let num of numSet) {
            if (!numSet.has(num - 1)) {
                let length = 1;
                while (numSet.has(num + length)) {
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}

