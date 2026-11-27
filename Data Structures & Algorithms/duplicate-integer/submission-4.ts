class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        var numSet = new Set<number>(nums);
        return nums.length > numSet.size
    }
}
