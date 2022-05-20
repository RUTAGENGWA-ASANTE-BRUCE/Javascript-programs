
function findSecond (numbers)
{
    var x; var y;
    var biggest = 0;
    var biggestArray = []
    var smallestArray = []
    for (x = 0; x < numbers.length; x++) {
        if (numbers[x] > biggest) {
            biggest = numbers[x]
            biggestArray.unshift(biggest)
        }
        else if (numbers[x] < biggest) {
            biggest = numbers[x]
            biggestArray.push(numbers[x])
        }

    }

    console.log(biggestArray);
    console.log(`in array ${numbers} the second biggest is ${biggestArray[1]}`);


}
findSecond([1, 5, 66, 81, 7, 93, 29, 1000, 23, 14])


