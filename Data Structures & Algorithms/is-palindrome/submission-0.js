class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const reverseStr = cleanStr.split('').reverse().join('');
        return cleanStr === reverseStr;
    }
}
