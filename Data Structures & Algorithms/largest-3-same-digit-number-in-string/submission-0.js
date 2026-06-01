class Solution {
    /**
     * @param {string} num
     * @return {string}
     */
    largestGoodInteger(num) {
        let res = -1;

        for (let i = 0; i < num.length - 2; i++) {
            if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
                res = Math.max(res, Number(num[i]));
            }
        }

        return res !== -1 ? String(res).repeat(3) : '';
    }
}