class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};
        for (let i = 0; i < strs.length; i++) {
            const key = strs[i].split('').sort().join('');
            const value = strs[i];

            if (!groups[key]) {
                groups[key] = [];
            }
            groups[key].push(value);
        }
        return Object.values(groups);
    }
}
