class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for(let str of strs){
            res += str.length + "#" + str;
        }
        console.log(res);
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let index = 0;
        while(index < str.length){
           let j = index;
           while(str[j] !== "#"){
                j++;
           }
           let length = parseInt(str.substring(index,j));
           index = j + 1;
           j = index + length;
           res.push(str.substring(index,j));
           index = j;
         }
         console.log(res);
         return res;
    }
}
