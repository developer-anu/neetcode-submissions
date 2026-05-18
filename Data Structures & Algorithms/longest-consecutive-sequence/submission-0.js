class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let longest = 0;

        for(let num of set){
            if(!set.has(num - 1)){
                let start = num;
                let length = 1;
                while(set.has(start+length)){
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}
