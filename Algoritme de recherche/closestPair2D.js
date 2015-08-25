/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var LON = readline();
var LAT = readline();
var latA = LAT.replace(",",".");
var lngA = LON.replace(",",".");
var courteDistance = Infinity;
var idDefi = "";
var nameDefi = {};

var toRadian = function(degree){
   return degree * Math.PI / 180
}
var distance = function(latA, lngA, latB, lngB){
    x = toRadian(lngB - lngA) * Math.cos((toRadian(latA) + toRadian(latB))/ 2);
    y = toRadian(latB - latA);
 
    var res = Math.sqrt(Math.pow(x,2) + Math.pow(y,2)) * 6371;

    return res;
};

var inputs = {};
var N = parseInt(readline());

for (var i = 0; i < N; i++) {
    var DEFIB = readline();

    inputs = DEFIB.split(";");
    nameDefi[i] = inputs[1];
 
    var dist = distance(latA, lngA, inputs[5].replace(",","."),inputs[4].replace(",","."))
    printErr("dist : " + dist)
    printErr("i : " + i)
    printErr("idDefi : " + idDefi)
    if (dist < courteDistance ){
        courteDistance = dist;
        idDefi = i;
    }

}

print(nameDefi[idDefi]);