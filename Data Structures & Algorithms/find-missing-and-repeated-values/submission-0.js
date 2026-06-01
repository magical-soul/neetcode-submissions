class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        const N = grid.length;
        const count = {};

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                let val = grid[i][j];
                count[val] = (count[val] || 0) + 1;
            }
        }

        let doubleVal = 0,
            missing = 0;

        for (let num = 1; num <= N * N; num++) {
            let freq = count[num] || 0;
            if (freq === 0) missing = num;
            if (freq === 2) doubleVal = num;
        }

        return [doubleVal, missing];
    }
}