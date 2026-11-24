class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false; // Can not an anagram, because it has not the same size.
        }

        const sArr: String[] = [...s];
        const tArr: String[] = [...t];

        // Sort arrays
        sArr.sort();
        tArr.sort();

        // Check if the chars are the same on each index. This way, we can be sure that each letter appears exactly as many times as it does in the other string.
        for (let i = 0; i < sArr.length; i++) {
            if (sArr[i] !== tArr[i]) return false
        }

        return true
    }
}
