/**
 * identifie les deux nombres les plus proche et retourne l'ecart
 **/


var tab = [10,5,15,17,3,8,11,28,6, 55,7]


var searchWithDivide = function(tab){
    if(tab.length == 1) return [tab, Infinity ];

    var middle = Math.floor( tab.length/ 2)
    var left = tab.splice(0, middle);
    var right = tab;

    // on cherche l'ecart le plus petit dans le tableau de gauche
    var outputLeft = searchWithDivide(left);

    // on cherche l'ecart le plus petit dans le tableau de droite
    var outputRight = searchWithDivide(right);

    //on cherche l'ecart entre les deux tableau
    var outputMerge = searchMerge(outputLeft[0], outputRight[0]);
    var min = Math.min(outputLeft[1], outputRight[1], outputMerge[1])
    return [outputMerge[0], min];

}

var searchMerge = function(left, right){
    var i = 0;
    var min = Infinity
    while(left[i] && right[i]){
        var power = Math.abs(left[i] - right[i]);
        if(power < min ){
            min = power;
        }
        i++;
    }
    var concat = left.concat(right);
    return [concat, min]

}

/*
var searchSelection = function(tab){
    for(var i = 0; i< tab.length; i++){
    for(var j = i+1; j < tab.length; j++){
        var dist = Math.abs(tab[i] - tab[j])
        if (dist < minDistance){
            minDistance = dist;
        }
        if (minDistance == 1){
            break;
        }
    }
        return dist;
}
}
*/
tab.sort(function(a, b){return a-b});
res = searchWithDivide(tab);
print(res[1]);