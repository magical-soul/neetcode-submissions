class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const sortedFirstStr = [...s].sort().join("");
        const sortedSecondStr = [...t].sort().join("");
        if (sortedFirstStr === sortedSecondStr) {
            return true;
        }
        return false;
    }
}
