class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n);
        const prefix = new Array(n);
        const suffix = new Array(n);
        prefix[0] = 1;
        suffix[n-1] = 1;

        for(let i = 1; i < n; i++){
            prefix[i] = nums[i-1] * prefix[i-1];
        }        

        for(let j = n - 2; j >=0; j--){
            suffix[j] = nums[j+1] * suffix[j+1];
        }

        for( let i = 0; i < n; i++){
            res[i] = prefix[i] * suffix[i];
        }

        return res;
    }
}
