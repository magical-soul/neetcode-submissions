class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    // this solution works but it has more space complexity as filter returns new array in each iteration which creates temporary arrays instead adding other solution

    // Time Complexity: Total → O(n²)
    // space Complexity: filter creates a new array every iteration → O(n) per loop
    // productExceptSelf(nums) {
    //     if (nums.length === 0) return [];
    //     let res = [];
    //     for (let i = 0; i < nums.length; i++) {
    //         res.push(nums.filter((_, index) => index !== i).reduce((acc, cur) => acc * cur, 1))
    //     }
    //     return res;
    // }


    // Time Complexity: Total → O(n²)
    // space Complexity: Output array only → O(n)
    // productExceptSelf(nums) {
    //     const n = nums.length;
    //     const res = new Array(n);

    //     for (let i = 0; i < n; i++) {
    //         let prod = 1;
    //         for (let j = 0; j < n; j++) {
    //             if (i !== j) {
    //                 prod *= nums[j];
    //             }
    //         }
    //         res[i] = prod;
    //     }
    //     return res;
    // }

    // best solution 
    // O(n) time
    // O(1) extra space (output array doesn’t count)
    productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n).fill(1);

        // 1️⃣ Prefix products
        let prefix = 1;
        for (let i = 0; i < n; i++) {
            res[i] = prefix;
            prefix *= nums[i];
        }

        // 2️⃣ Suffix products
        let suffix = 1;
        for (let i = n - 1; i >= 0; i--) {
            res[i] *= suffix;
            suffix *= nums[i];
        }

        return res;
    }

}
