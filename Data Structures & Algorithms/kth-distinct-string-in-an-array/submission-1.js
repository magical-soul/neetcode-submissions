class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        const count = {};
        // for (let s of arr) {
        //     count[s] = (count[s] || 0) + 1;
        // }

        for (let s of arr) {
            if (!(s in count)) {
                count[s] = 0;
            }
            count[s]++;
        }

        for (let s of arr) {
            if (count[s] === 1) {
                k--;
                if (k === 0) {
                    return s;
                }
            }
        }

        return '';
    }
}
