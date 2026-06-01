class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0) return 0;
        let l = 0;
        let count = 0;
        let set = new Set();

        for (let r = 0; r < s.length; r++) {
            while (set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }
            set.add(s[r]);
            count = Math.max(count, r - l + 1);
        }
        return count;
    }
}
