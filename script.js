// complete the given function

function palindrome(str){
let s=0,e=str.length()-1;

	str=str.toLowerCase();
	
	while(s<=e)
		{
			if(str.charAt(s)!=str.charAt(e))
				return false;
			s++;e--;
		}
	return true;
}
module.exports = palindrome
