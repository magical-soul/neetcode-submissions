class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        const count = new Map();
        for (const num of arr) {
            count.set(num, (count.get(num) || 0) + 1);
        }

        let res = -1;
        for (const [num, freq] of count.entries()) {
            if (num === freq) {
                res = Math.max(res, num);
            }
        }
        return res;
    }
}