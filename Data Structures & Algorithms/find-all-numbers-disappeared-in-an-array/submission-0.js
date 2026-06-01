class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        const n = nums.length;
        const rangeArr = [];
        const res = [];
        for (let i = 1; i <= n; i++) {
            rangeArr.push(i);
        }

        for (const num of rangeArr) {
            if (!nums.includes(num)) {
                res.push(num);
            }
        }
        return res;
    }
}
