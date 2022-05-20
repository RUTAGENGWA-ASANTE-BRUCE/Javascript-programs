function checkPalindrome (word)
{
    var reversedString = word.split("").reverse().join("")
    if (word == reversedString) {
        console.log(`The word: ${word} is a palindrome because on reversing it we get ${reversedString}`);
    }
    else {
        console.log(`The word: ${word} is not a palindrome because on reversing it we get ${reversedString}`);
    }
}
checkPalindrome("madam")