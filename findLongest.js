function findLongest (word)
{
    var components = word.split(" ")
    var x;
    var longest = ""
    for (x = 0; x < components.length; x++) {
        if (components[x].length > longest.length) {
            longest = components[x]
        }
    }
    console.log(longest);
}
findLongest("Hello I am BruceBarnerHulkThor head of management proclamationdkj hj")