class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let result = 0;
        let left = 0;
        let right = 0;
       
        let CharSet = new Set();

        while(right < s.length){
            if(!CharSet.has(s[right])){
                CharSet.add(s[right]);
                right++;
                result = Math.max(result, right - left);
            }else{
                CharSet.delete(s[left]);
                left++;
            }
        }
        return result;
    }
}