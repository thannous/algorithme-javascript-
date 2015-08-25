var items = [4, 2, 6, 5, 3, 9];


var quickSort = function(A, l, r) {

    if (r - 1 > l) {
        var pivot = l + Math.floor(Math.random() * (r - l));
        var pivot = partition(A, l, r, pivot);
        console.log(A);
        quickSort(A, l , pivot);
        quickSort(A, pivot +1, r);

    }
    return A;
};

function partition(A, l , r , pivot){
    var tmp;
    var p = A[pivot];
    while( l < r ){
        while(A[l] <= p) {
            l++;
        }
        while(A[r] > p) {
            r--;
        }
        if(l < r) {
                tmp = A[l];
                A[l] = A[r];
                A[r] = tmp;
            }
    }
    return l;
}

var res = quickSort(items, 0, items.length - 1);

console.log(res);