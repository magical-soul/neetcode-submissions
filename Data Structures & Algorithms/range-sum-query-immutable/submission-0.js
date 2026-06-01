class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefix = [];
        let curSum = 0;
        for (const num of nums) {
            curSum += num;
            this.prefix.push(curSum);
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        const rightSum = this.prefix[right];
        const leftSum = left > 0 ? this.prefix[left - 1] : 0;
        return rightSum - leftSum;
    }
}
