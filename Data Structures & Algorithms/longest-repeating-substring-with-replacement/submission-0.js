class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let freq = new Map();
        let maxFreq = 0;
        let maxLen = 0;
        for(let right = 0; right < s.length; right++){
            freq.set(s[right], (freq.get(s[right]) || 0) + 1);
            maxFreq = Math.max(maxFreq, freq.get(s[right]));
            while((right - left + 1) - maxFreq > k ){
                freq.set(s[left], freq.get(s[left]) - 1);
                left++;
            }
            maxLen = Math.max(maxLen,right - left + 1);
        }
            return maxLen;

    }
}
