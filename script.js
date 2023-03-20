// complete the given function

function palindrome(str){

	 let s=0,e=str.length-1;
    
        str=str.toLowerCase();
        
        while(s<=e)
            {
                if(str.charAt(s)!=str.charAt(e))
                    console.log(false);
                s++;e--;
            }
                    console.log(true);
}

module.exports = palindrome