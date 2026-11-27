class Solution {
    fun hasDuplicate(nums: IntArray): Boolean {
        return if (nums.size > nums.distinct().size) true else false
    }
}
