class Solution {
    fun isAnagram(s: String, t: String): Boolean {
        if (s.length != t.length) return false;

        var counts = mutableMapOf<Char, Int>();

        for (i in s.indices) {
            counts[s[i]] = counts.getOrDefault(s[i], 0) + 1
            counts[t[i]] = counts.getOrDefault(t[i], 0) - 1
        }

        for (c in counts) {
            if (c.value != 0) return false;
        }
        return true
    }
}
