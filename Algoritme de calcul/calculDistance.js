// Dans une list trouve l'item le plus proche de notre position (lat, lng)

var lePlusProche = function(latA, lngA, list){
    var courteDistance = Infinity;
    var id = "";
    for (var i = 0; i < list.length; i++) {

        var latB =  list[i].lat();
        var lngB =  list[i].lng();

        var dist = distance(latA, lngA,latB,lngB);

        if (dist < courteDistance ){
            courteDistance = dist;
            id= i;
        }

    }
    return list[i];
};



var toRadian = function(degree){
    return degree * Math.PI / 180
};
var distance = function(latA, lngA, latB, lngB){
    x = toRadian(lngB - lngA) * Math.cos((toRadian(latA) + toRadian(latB))/ 2);
    y = toRadian(latB - latA);

    var res = Math.sqrt(Math.pow(x,2) + Math.pow(y,2)) * 6371;
    return res;
};
