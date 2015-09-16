/**
 * Created by thanhchau on 10/09/15.
 */
function foo(array){

    var sum = 0;

    var product = 0;

    for(var i = 0; i < array.length; i++){
        sum += array[0];
    }

    for(var i = 0; i < array.length; i++){
        product *= array[0];

    }

}


function logPairs(array){

    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array.length; j++ ){
            console.log(array[i] + " " + array[j]);
        }
    }
}

function logUnodoredpair(array){

    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array.length; j++ ){
            console.log(array[i] + " " + array[j]);
        }
    }
}

function logUnodoredpair(array){

    for(var i = 0; i < array.length; i++){
        for(var j = i + 1; j < array.length; j++ ){
            console.log(array[i] + " " + array[j]);
        }
    }
}

function logUnodoredpair(arrayA, arrayB){

    for(var i = 0; i < arrayA.length; i++){
        for(var j = i + 1; j < arrayB.length; j++ ){
            if(arrayA[i] < arrayB[j]){
                console.log( array[i] + " " + array[j] );
            }
        }
    }
}


function logUnodoredpair(arrayA, arrayB){

    for(var i = 0; i < arrayA.length; i++){
        for(var j = i + 1; j < arrayB.length; j++ ){
            for (var k = 0; k < 10000; k++) {
                console.log( array[i] + " " + array[j] );

            }
        }
    }
}

function reverse(array){

    for(var i = 0; i < array.length / 2; i++){
        var end = array.length - i -1;
        var tmp = array[i];
        array[i] = array[end];
        array[end] = tmp;
    }
}

//array of string; sort each string