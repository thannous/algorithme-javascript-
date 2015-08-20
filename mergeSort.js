/*
 merge sort algorithm
 @param List the sequence to be sorted
 */

var mergeSort = function (A) {
    if (A.length == 1) return A;
    var middle = Math.floor(A.length / 2);

    //the array is split in half creating left and right arrays
    var left = A.splice(0, middle);
    var right = A;

    //these arrays is then passed back into mergeSort() with the results passed into merge()
    var outputLeft = mergeSort(left);
    var outputRight = mergeSort(right);

    return merge(outputLeft, outputRight);
};


/*
 the merging routine
 @param List1 the first list to be merged
 @param List2 the second list to be merged
 */


var merge = function (tab1, tab2) {
    var res = [];
    var i = 0;
    var j = 0;
    var k = 0;

    while (tab1[i] && tab2[j]) {

        if (tab1[i] < tab2[j]) {
            res[k] = tab1[i];
            i++;
        } else if (tab1[i] > tab2[j]) {
            res[k] = tab2[j];
            j++;
        }
        k++;
    }
    res = res.concat(tab1[i] ? tab1.slice(i) : tab2.slice(j));

    return res;
};

var B = [1, 3, 9, 5, 10, 2, 4, 6, 8, 7];
console.log(mergeSort(B));
