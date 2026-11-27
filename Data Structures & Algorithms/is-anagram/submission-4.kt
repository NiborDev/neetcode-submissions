class Solution {
    fun isAnagram(s: String, t: String): Boolean {
        if (s.length != t.length) return false;

        var counts = IntArray(26)

        for (i in s.indices) {
            counts[s[i] - 'a']++
            counts[t[i] - 'a']--
        }

        for (c in counts) {
            if (c != 0) return false;
        }
        return true
    }
}
