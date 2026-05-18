class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        while(left < right){
           
            while(left < right && !this.isAlphaNumeric(s[right])){
                right--;
            }

            while(left < right && !this.isAlphaNumeric(s[left])){
                left++;

            }
            if(s[left].toLocaleLowerCase() !== s[right].toLocaleLowerCase()){
                return false;
            }
            left++; right--;
        }
        return true;
    }
    isAlphaNumeric(char){
        if(char >= "a" && char <= "z" ||
            char >= "A" && char <= "Z" ||
            char >= "0" && char <= "9"
        ){
            return true;
        }else{
        return false;

        }
    }
}
