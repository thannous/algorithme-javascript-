var items = [4, 2, 6, 5, 3, 9 ,1, 10 , 1 ];


var quickSort = function(A, l, r) {

    if (r > l) {
        var pivotIndex = l + Math.floor(Math.random() * (r - l));
        var pivotIndex = partition(A, l, r, pivotIndex);
        quickSort(A, l , pivotIndex);
        quickSort(A, pivotIndex +1, r);

    }
    return A;
};

function partition(A, l , r , pivot){

    var p = A[pivot];

    while( l < r ){

        while(A[l] < p) {
            l++;
            console.log("   l = "+ l)
        }
        while(A[r] > p) {
            r--;
            console.log("   r = "+ l)
        }
        if(l < r) {
                var tmp = A[l];
                A[l] = A[r];
                A[r] = tmp;
            l++;
            r--;
            }
    }
    console.log(A)
    return r;
}

var res = quickSort(items, 0, items.length -1 );

console.log(res);