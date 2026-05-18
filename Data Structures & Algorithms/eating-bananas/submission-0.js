class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let result = r;

        while(l<=r){
            let mid = Math.floor((l+r)/2);
            let totalTime = 0;

            for(const p of piles){
                totalTime += Math.ceil(p/mid);                
            }

            if(totalTime <= h){
                result = mid;
                r = mid -1;
            }else{
                l = mid + 1;
            }            
        }
        return result;
    }
}
