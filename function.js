/**
 * @name function
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



/**
 *
 *      Global Variables
 *  A function can access all variables defined inside and outside the function
 */

//b is global Variable
var b = 2

function myFunction() {
    //a is local Variable
    var a = 4;
    return a * b;
}

myFunction() // 8




/**
 *
 *      this
 *
 */

dataFriends = [
    {name:"Samantha G", age:12},
    {name:"Alexis G", age:14}
];

var person = {
    firstName   :"Penelope",
    lastName    :"Barrymore",
    dataFriends      :[
        {name:"T. Woods L", age:37},
        {name:"P. Mickelson L", age:43}
    ],
    showFullName :      function () {
        console.log (this.firstName + " " + this.lastName);
    },
    showAllFriends:     function () {
        // To capture the value of "this" when it refers to the user object, we have to set it to another variable here:?
        // We set the value of "this" to theUserObj variable, so we can use it later?
        this.dataFriends.forEach (function (person) {
            // Instead of using this.tournament, we now use theUserObj.tournament?
            console.log (person.name + " is friend with " + this.firstName);
        }.bind(this))
    },
    showData:function () {
        var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1?

        // This line is adding a random person from the data array to the text field?
        console.log (this.dataFriends[randomNum].name + " " + this.dataFriends[randomNum].age);
    }
}

person.showFullName();

firstName = "Thomas"
lastName = "Dupont";

showFullName = function () {
    // "this" inside this function will have the value of the window object?
    // because the showFullName () function is defined in the global scope, just like the firstName and lastName?
    console.log (this.firstName + " " + this.lastName);
}

showFullName();


var anotherPerson = {
    firstName   :"Rohit",
    lastName    :"Khan"
};

person.showFullName.apply(anotherPerson)


console.log("======== 1 ) Fix this when used in a method passed as a callback ========\n" );

//    $("button").click (user.clickHandler.bind (user));

console.log("======== 2 ) Fix this inside closure ========\n" );
    person.showAllFriends(); // Who is thomas ? he is in the globale scope . Its not that we wan't. So bind() the callback .bind(this)

//
//this inside the anonymous function cannot access the outer function’s this, so it is bound to the global window object, when strict mode is not being used.


console.log("======== 3 ) Fix this when method is assigned to a variable ========\n" );
person.showData();

var showUserData = person.showData;
showUserData ();

var showUserData = person.showData;
showUserData.bind (person)();



console.log("======== 4 ) Fix this when borrowing methods ========\n" );

var gameController = {
    scores  :[20, 34, 55, 46, 77],
    avgScore:null,
    players :[
        {name:"Tommy", playerID:987, age:23},
        {name:"Pau", playerID:87, age:33}
    ]
}

var appController = {
    scores  :[900, 845, 809, 950],
    avgScore: null,
    avg     :function () {

        var sumOfScores = this.scores.reduce (function (prev, cur, index, array) {
            return prev + cur;
        });

        this.avgScore = sumOfScores / this.scores.length;
    }
}
gameController.avgScore = appController.avg();
console.log(appController.avg())
console.log(appController.avgScore)
console.log(gameController.avgScore)
appController.avg.apply (gameController);
console.log(gameController.avgScore)


appController.maxNum = function () {
    this.avgScore = Math.max.apply (null, this.scores);
}

appController.maxNum.apply (gameController);
console.log (gameController.avgScore); // 77?

/**
 *
 *      JavaScript Closures
 *
 */
console.log(" JavaScript Closures ========\n" );
var someArg = "Now :"

//the variable "add" is assigned to the return value of a self-invoking function
// with the var arg arguments
var add = (function (arg) {
    //var counter is protected by the scope of the anonymous function
    //and only be change with the add function
    var counter = 0;

    return function () {
        counter +=1
        return arg + counter ;
    }
})(someArg);

add();  // 1
add();  // 2
add();  // 3

/**
 *
 *      Function.prototype.call()
 *
 */
/**
 *
 *      Function.prototype.apply()
 *
 */
console.log("======== Function.prototype.apply()========\n" );
var myArray = [4, 1, 8, 9, 2];

console.log(Math.max.apply(null,myArray));

console.log("\n\n" );


console.log("======== Use Call or Apply To Set this in Callback Functions ========\n" );

var player ={
    name : "miaou",
    fullname : "not set",
    setName : function(firstname , lastname){
        this.fullname = firstname + " " + lastname;
    }
}


function getUserInput(firstname, lastname, callback, callbackObject ){
    callback.apply(callbackObject, [firstname, lastname])
}


console.log (player.fullname);


getUserInput("Thanh", "chau", player.setName, player)

console.log (player.fullname);

console.log("======== Borrowing Functions with Apply and Call ========\n" );


var anArrayLikeObj = {
    0:"Martin",
    1:78,
    2:67,
    3:["Letta", "Marieta", "Pauline"], length:4
};
// Make a quick copy and save the results in a real array:?
// First parameter sets the "this" value?
var newArray = Array.prototype.slice.call (anArrayLikeObj, 0);
console.log(newArray)

// Search for "Martin" in the array-like object?
console.log (Array.prototype.indexOf.call (anArrayLikeObj, "Martin") === -1 ? false : true); // true?

// Try using an Array method without the call () or apply ()?
console.log (anArrayLikeObj.indexOf ("Martin") === -1 ? false : true); // Error: Object has no method 'indexOf'?
//The arguments object that is a property of all JavaScript functions is an array-like object

console.log("======== Use Apply () to Execute Variable-Arity Functions ========\n" );


var students = ["Peter Alexander", "Michael Woodruff", "Judy Archer", "Malcolm Khan"];

// No specific parameters defined, because ANY number of parameters are accepted?
function welcomeStudents () {
    var args = Array.prototype.slice.call (arguments);

    var lastItem = args.pop ();
    console.log ("Welcome " + args.join (", ") + ", and " + lastItem + ".");
}

welcomeStudents.apply (null, students);

/**
 *
 *     Inheritance and the Prototype
 *
 */



console.log("======== Inheritance and the Prototype ========\n" );

var Sprite = function (name, x, y){

    //define properties to object
    this._name = name;
    this._x = x;
    this._y = y;

    // define private variables
    var varPrivate = "im private"

    //definie global variables
    _names = "im global"

    /**
     * //each time you create a person, a new notGoodDraw function will be created for him,
     * where as sprite.prototype.draw, only one draw function is ever created,
     * and is shared amongst all persons that are created - because Sprite.prototype is their parent.
     * Thus, declaring methods on the prototype is more memory efficient.
     *

     */
      this.notGoodDraw = function (){

         }

}

Sprite.prototype.initialize = function () {
    this._x = (this._x < 0 || this._x > Screen.width) ? this._x = Screen.width / 2 : this._x;
    this._y = (this._y < 0 || this._y > Screen.height) ? this._y = Screen.height / 2 : this._y;
};


Sprite.prototype.draw = function (spriteBatch) {
    console.log("Dessin du sprite : name : "+ this._name );
    console.log("y = "+ this._y );
    console.log("x = "+ this._x );
};

var sprite = new Sprite("Player", 15, 50);




var Player = function (name, x, y, job) {

    Sprite.call(this, name, x, y);
    this._job = job;
};

Player.prototype = new Sprite();

// ou Player.prototype = Object.create(Sprite.prototype);
Player.prototype.draw = function (spriteBatch) {
    Sprite.prototype.draw.call(this, spriteBatch);
    console.log("Et mon job est de : "+ this._job);
};

var player = new Player ("new player", 15.0, 50.0, "Manger");
var player2 = new Player ("new player 2", 20.0, 40.0, "Sauter");

function sing(){
    console.log(this._name + ' sings!');
}

var flower = function(name){
    this._name = name;
}

var tulip = new flower("tulip")
console.log(Sprite.constructor)

//*****                        Test
sprite.draw();

console.log("******************\n\n");

player.draw();
player2.draw();
sing.apply(player2);
console.log("******************\n");
Sprite.prototype.draw.apply(tulip)
console.log("******************\n\n");




console.log(sprite._name);

console.log(sprite.varPrivate); //undefined , not attached to the instance

console.log(_names);
///////////////////////////////////////////

/**
 *
 *      Function.prototype.bind()
 *
 */

//Creating a bound function

//Partial Functions

//class methods that require this to refer to class instances
var myObject = {

    crazyMessage: 'gouzigouza',

    doSomethingCrazy: function() {

    },

    doSomeAsyncCrazyness: function() {
        setTimeout(function() {
            this.doSomethingCrazy();
        }.bind(this), 1000);
    }
};

//myObject.doSomeAsyncCrazyness();