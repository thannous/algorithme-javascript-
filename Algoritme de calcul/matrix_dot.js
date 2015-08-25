var MM_dot = function (A, B) {
    var m_a = size(A)[0];
    var n_a = size(A)[1];
    var m_b = size(B)[0];
    var n_b = size(B)[1];
    var newMatrix = Array();
    console.log("tailel")
    console.log(size(A))
    console.log(size(B))
    if (m_b !== n_a) {
        return "FAILED"
    }

    console.log("A : " + A)
    console.log("B : " + B)
    for (var i = 0; i < m_a; i++) {
        var subArray = [];
        console.log("i ++ = " + i)
        for (var j = 0; j < n_b; j++) {
            console.log("j ++ = " + j)
            var colB = _getCol(B, j);
            console.log(colB)
            subArray[j] = VV_dot(A[i], colB)
            newMatrix[i] = subArray;
        }
    }
    return newMatrix;
}
var _getCol = function _getCol(A, j) {
    var n = A.length;
    var res = [];
    for (var i = n - 1; i > 0; --i) {
        res[i] = A[i][j];
        --i;
        res[i] = A[i][j];
    }
    if(i===0) res[0] = A[0][j];
    return res;
};

var size = function (x) {
    var y, z;
    if (typeof x === "object") {
        y = x[0];
        if (typeof y === "object") {
            z = y[0];
            if (typeof z === "object") {
                return numeric._dim(x);
            }
            return [x.length, y.length];
        }
        return [1, x.length];
    }
    return [];
}

var VV_dot = function (x, y) {
    var m_x = size(x)[0];
    var n_x = size(x)[1];
    var m_y = size(y)[0];
    var n_y = size(y)[1];

    if (m_x != 1 || m_y != 1) {
        return "c\'est pas un vecteur"
    }

    if (n_y !== n_x) {
        return "vecteur de differente taille"
    }
    var res = x[n_x - 1] * y[n_x - 1];

    for (var i = n_x - 2; i >= 1; i -= 2) {
        res += x[i] * y[i] + x[i - 1] * y[i - 1];
    }
    if (i === 0) {
        res += x[0] * y[0];
    }

    return res;
}

var X1 = [[1, 2, 0],
    [4, 3, -1]];

var Y1 = [[5, 1],
    [2, 3],
    [3, 4]];

var X = [[1, 2],
    [3, 2]];

var Y = [[1, 3],
    [2, 3]]

var vectX = [1, 2, 3]
var vectY = [1, 2, 3]

//console.log(dotVV(vectX, vectY))
//console.log(MM_dot(X, Y))
console.log(MM_dot(X1, Y1))


///matrix_dot(A , B)