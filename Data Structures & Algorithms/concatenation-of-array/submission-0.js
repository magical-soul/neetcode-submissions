class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        // for (let i = 0; i < nums.length; i++) {
        //     nums.push(nums[i]);
        // }
        // return nums;


        return [nums, ...nums]
    }
}
