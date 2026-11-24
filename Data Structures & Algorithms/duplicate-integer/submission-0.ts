class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numsSet = new Set(nums);
        if (numsSet.size < nums.length) {
            return true;
        } else {
            return false;
        }
    }
}
