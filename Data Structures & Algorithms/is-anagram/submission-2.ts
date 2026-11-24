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

        const countMap = new Map<string, number>();

        // Increment count for chars in s (+1), decrement for chars in t (-1).
        // For an anagram, every chars final count must be 0.
        for (let i = 0; i < s.length; i++) {
            let charS = s[i];
            let charT = t[i];
            countMap.set(charS, (countMap.get(charS) ?? 0) + 1);
            countMap.set(charT, (countMap.get(charT) ?? 0) - 1);
        }

        // If the number of chars diffrent, it can not be an anagram.
        for (const count of countMap.values()) {
            if (count !== 0) return false;
        }

        return true;
    }
}
