var all = []
function transformFirstLettter (word)
{
    var words = word.split(" ")
    for (var i = 0; i < words.length; i++) {
        var firstLetter = words[i][0]
        all.push(words[i].replace(firstLetter, firstLetter.toUpperCase()))
    }
    console.log(all.join(" "));
}
transformFirstLettter("bruce is a good boy")
all.map((c, i) =>
{
    console.log(c);
})