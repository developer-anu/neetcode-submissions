class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for(var i = 0; i < nums.length; i++){
            console.log(map);
            if(map.has(target - nums[i])){
                return [i, map.get(target - nums[i])];
            }
            map.set(nums[i], i);

        }
        
    }
}
