class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const ASCII_CODE_A = "a".charCodeAt(0);
        const anagramGroups = new Map<string, string[]>();

        for (const word of strs) {
            const letterCounts = new Array<number>(26).fill(0);

            // Counting every char in a word
            for (const char of word) {
                const alphabetIndex = char.charCodeAt(0) - ASCII_CODE_A; // calculates the index for this letter
                letterCounts[alphabetIndex]++;
            }

            //checks if a pattern already exist in our map.
            const signature = letterCounts.join("_");
            const existingGroup = anagramGroups.get(signature);

            if (existingGroup) {
                // Add an word to the anagram Group
                existingGroup.push(word);
            } else {
                // Create a new Group
                anagramGroups.set(signature, [word]);
            }
        }
        return Array.from(anagramGroups.values());
    }
}
