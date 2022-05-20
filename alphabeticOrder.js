function order (word)
{
    var all = word.split("").sort().join("")
    console.log(all);
}


order("hello")