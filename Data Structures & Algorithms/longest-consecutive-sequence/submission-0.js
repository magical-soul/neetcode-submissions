class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // if (nums.length === 0) {
        //     return 0;
        // }
        // let count = 0;
        // let maxCount = 0;
        // nums.sort((a, b) => a - b);
        // for (let i = 0; i < nums.length; i++) {
        //     if ((nums[i + 1] !== nums[i]) && (nums[i + 1] - nums[i] === 1)) {
        //         count ++;
        //         maxCount ++;
        //     } 
        //     // else {
        //     //     count = 0
        //     // }
        // }
        // return count;


        if (!Array.isArray(nums) || nums.length === 0) return 0;

        nums.sort((a, b) => a - b);

        let maxCount = 1;
        let count = 1;

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) {
                // duplicate, ignore
                continue;
            }

            if (nums[i] === nums[i - 1] + 1) {
                // consecutive number, extend current sequence
                count++;
            } else {
                // gap found -> store max and reset current sequence length to 1
                if (count > maxCount) maxCount = count;
                count = 1;
            }
        }

        return Math.max(maxCount, count);

        // const numSet = new Set(nums);
        // let longest = 0;

        // for (let num of numSet) {
        //     if (!numSet.has(num - 1)) {
        //         let length = 1;
        //         while (numSet.has(num + length)) {
        //             length++;
        //         }
        //         longest = Math.max(longest, length);
        //     }
        // }
        // return longest;
    }
}

