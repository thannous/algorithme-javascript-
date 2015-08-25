/**
 * @name pattern function
 * @author Chau Thanh
 *
 * Basic usage:
 * var myFunction = new myFunction();
 * someFunction.init();
 *
 * use methods like someFunction.methodName();
 *
 * Advanced usage:
 * var someFunction = new SomeFunction({
 *      "additionalOption": "thatCanOvervriteDefaults"
 * });
 *
 *
 */
function myFunction(opts) {
    var _cfg;
    var _root;
    /*
     INITIALIZE
     */

    this.init = function() {
        //assign _root and config variables
        _root = this;
        _cfg = this.opts;

        //some code
    }

    /*
     Some Private Method (no "this")
     */
    _somePrivateMethod = function() {
        //some code
    }

    var add = (function () {
        var counter = 0;
        return function () {return counter += 1;}
    })();
    add()
    res = add()
    console.log(res)

    /*
     Some Method
     */
    this.someMethod = function() {
        //some code
    }

}

//declaration and auto initialization of someFunction
var myFunction = new myFunction();
myFunction.init();