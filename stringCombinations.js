var combinations = []
function makeCombinations (word)
{
    var wordComponents = word.split("")
    var i;
    for (i = 0; i < wordComponents.length; i++) {
        var y;
        for (y = 0; y < wordComponents.length; y++) {
            var singleCombination = `${wordComponents[i]}${wordComponents[y]}`
            if (singleCombination != singleCombination.split("").reverse().join("")) {

                combinations.push(singleCombination)
            }
        }
    }
    combinations.push(word)
}
makeCombinations("dog")
console.log(combinations);