class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
       /* let sortedS = s.split("").sort().join("");
        let sortedT = t.split("").sort().join("");
       
       return sortedS == sortedT;*/
       const mapS = {};
       const mapT = {};
       for(let i = 0; i < s.length; i++){
         mapS[s[i]] = (mapS[s[i]] || 0) + 1;
         mapT[t[i]] = (mapT[t[i]] || 0) + 1;
       }

       for(let key in mapS){
         if(mapS[key] !== mapT[key]){
            return false;
         }
       }
       return true;
    }
}
