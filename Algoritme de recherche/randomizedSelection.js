var tab = [4, 2, 6, 5, 3, 9];

var randomizedSelection = function (array, k) {


    var from = 0;
    var to = array.length - 1;

    console.log("array +" + array)


    // if from == to we reached the kth element

    var less = [];
    var greater = [];
    console.log("from : " + from);
    console.log("to : " + to);
    var pivotIndex = getRandomIntInclusive(from, to)
    var pivot = array[pivotIndex];


    for (var i = 0; i <= array.length - 1; i++) {
        if (array[i] < pivot) {
            less.push(array[i])
        } else if (array[i] > pivot) {
            greater.push(array[i])
        }
    }

    var L = less.length;
    console.log("Array = " + array)
    console.log("Less = " + less)
    console.log("greater = " + greater)
    console.log("k = " + k)
    console.log("L = " + L)

    if (L == k - 1) {
        return pivot;
    } else if (L > k - 1) {
        k = randomizedSelection(less, k)
    } else if (L < k - 1) {
        k = randomizedSelection(greater, k - L - 1)
    }
    return k;

}

console.log("res = " + randomizedSelection(tab, 6));


function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}