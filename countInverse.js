var countInverse = function (A) {
    var count = sortAndCount(A)[1];
    return count;
}

var sortAndCount = function (A) {
    if (A.length == 1) return [A, 0];

    var middle = Math.floor(A.length / 2),
        left = A.splice(0, middle),
        right = A;
    var outputLeft = sortAndCount(left);
    var outputRight = sortAndCount(right);
    var result = mergeAndCount(outputLeft[0], outputRight[0], A.length);
    return [result[0], result[1] + outputLeft[1] + outputRight[1]];
}


var mergeAndCount = function (left, right) {

    var i = 0;
    var j = 0;
    var res = [];
    var k = 0;
    var count = 0;

    while (left[i] && right[j]) {

        if (left[i] < right[j]) {
            res[k] = left[i];
            i++;
        } else if (left[i] > right[j]) {
            res[k] = right[j];
            j++;
            count += left.slice(i).length;
        }
        k++;
    }
    res = res.concat(left[i] ? left.slice(i) : right.slice(j));
    return [res, count];
}

A = [1, 3, 9, 5, 10, 2, 4, 6, 8, 7]

console.log(countInverse(A));
