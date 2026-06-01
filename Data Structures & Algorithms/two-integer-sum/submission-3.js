class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        // broth force technique
        //     if(nums.length < 2) return [];
        //     for (let i = 0; i < nums.length; i++) {
        //         for (let j = i+1; j < nums.length; j++) {
        //             if (nums[i] + nums[j] === target) {
        //                 return [i, j];
        //             }
        //         }
        //     }
        //     return [];

        // hash map

        const index_to_number = {};
        for (let i = 0; i < nums.length; i++) {
            const compliment = target - nums[i];

            if (compliment in index_to_number) {
                return [index_to_number[compliment], i];
            }
            index_to_number[nums[i]] = i;
        }
        return [];
    }
}
