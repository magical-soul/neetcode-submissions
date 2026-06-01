class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        const count = new Array(26).fill(0);
        for (const c of s) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let oddMax = 0, evenMin = s.length;
        for (const c of count) {
            if (c & 1) {
                oddMax = Math.max(oddMax, c);
            } else if (c > 0) {
                evenMin = Math.min(evenMin, c);
            }
        }

        return oddMax - evenMin;
    }
}