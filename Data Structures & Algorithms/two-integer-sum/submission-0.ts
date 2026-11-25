class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // Create a hashMap for faster number finding.
        let indexDictionary = new Map<number, number>(
            nums.map((num, index) => [num, index])
        );

        // Calculates the diffrence of the target number and the number of a specific index. The diffrence is searched in the hashmap.
        for (let i = 0; i < nums.length; i++){
            let difference = target - nums[i];
            let difIndex = indexDictionary.get(difference);
            if (difIndex !== undefined && difIndex !== i) {
                return [i, difIndex]
            }
        }
    }
}
