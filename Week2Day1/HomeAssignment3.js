function isPalindrome(str) 
{
    let reverse = "";

    let characters = str.split("");

    for (let i = characters.length - 1; i >= 0; i--) 
    {
        reverse = reverse + characters[i];
    }

    return str === reverse;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));