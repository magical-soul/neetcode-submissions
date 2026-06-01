class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if (nums.length === 0) return []; 
        let res = [];
        for (let i = 0; i < nums.length; i++) {
         res.push(nums.filter((_, index) => index !== i).reduce((acc, cur) => acc * cur, 1))
        }
        return res;
    }
}
