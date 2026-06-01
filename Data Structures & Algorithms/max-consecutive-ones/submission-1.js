class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let res = 0;
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                res = Math.max(res, count);
                count = 0;
            } else {
                count++;
            }

        }
        return Math.max(res, count);
    }
}
