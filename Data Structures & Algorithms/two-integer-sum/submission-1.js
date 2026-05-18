class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * {3:0}
     * {4:1}
     * {5:2}
     * {6:3}
     */
    twoSum(nums, target) {
        let map = new Map();
        for(let i = 0; i < nums.length ; i++){
            let complimentary = target - nums[i];
            if(map.has(complimentary)){
                return[i , map.get(complimentary)];
            };
            map.set(nums[i], i);
        }
    }
}
