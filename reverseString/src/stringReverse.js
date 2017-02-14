function stringReverse (str){
	var split_str = str.split('');// I decelared a variable called split and I assigned the splitted string to it. the split method is used to split a string into an array of substrings
	var reverse_str = split_str.reverse().join('');// I declared a variable called reverse_str and I assigned the joined string that was splitted and reversed to it using the reverse and join method 
	if(str.length ===  0){//condition statement to check if the parameter passed is an empty string
		return null;// returns null if an empty string is passed
	}
	if (str === reverse_str){//condition statement to check it the string passed is a palindrome
			return true; // returns true for palindromes
	}
	else{
		return reverse_str;// returns the reverse of the string passed
	}

}


module.exports = stringReverse;// export stringReverse