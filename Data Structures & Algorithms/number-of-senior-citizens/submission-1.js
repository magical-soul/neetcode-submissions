class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let count = 0;
        // for (let detail of details) {
        //     if (parseInt(detail.slice(11, 13)) > 60) {
        //         count++;
        //     }
        // }
        // return count;

        for (let d of details) {
            // let ten = d.charCodeAt(11) - 48;
            // let one = d.charCodeAt(12) - 48;
            // let age = one + 10 * ten;

             let ten = d.charAt(11);
            let one = d.charAt(12);
            let age = parseInt(ten + one);
            if (age > 60) {
                count++;
            }
        }
        return count;
    }
}
