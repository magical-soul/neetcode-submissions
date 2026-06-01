class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        const sortedFirstStr = [...s].sort().join("");
        const sortedSecondStr = [...t].sort().join("");
        // aarccerr

        if(sortedFirstStr === sortedSecondStr) {
            return true;
        }
        return false;
    }
}
