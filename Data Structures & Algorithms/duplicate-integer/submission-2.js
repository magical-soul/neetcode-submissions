class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // nums.sort();
        // for (let i = 0; i < nums.length - 1; i++) {
        //     if (nums[i] === nums[i + 1]) {
        //         return true;
        //     }
        // }
        // return false;

        const seen = {};
        for(let num of nums){
            if(seen[num]) {
                return true;
            }
            seen[num] = (seen[num] || 0)+ 1;

        }
        return false;
    }
}
