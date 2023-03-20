// complete the given function

function palindrome(str){

 const string = str.toLowerCase();
 const len = str.length;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
module.exports = palindrome