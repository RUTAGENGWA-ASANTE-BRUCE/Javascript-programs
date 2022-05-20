function count (word)
{
    var wordParts = word.split("")
    var vowels = 0
    var x
    for (x = 0; x < wordParts.length; x++) {
        if (wordParts[x] == "a" || wordParts[x] == "o" || wordParts[x] == "u" || wordParts[x] == "e" || wordParts[x] == "i") {
            vowels++
        }
    }
    console.log("In '" + word + "' there are " + vowels + " vowels");
}
count("The big box is here")