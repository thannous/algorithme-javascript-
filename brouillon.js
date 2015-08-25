/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
var L = parseInt(inputs[1]); // the number of links
var E = parseInt(inputs[2]); // the number of exit gateways
var linkremaining = L;
var links = {}
var gateway = [];

var createLink = function(N1, N2){

    function ajouterRoute(N1, N2) {
        if (!(N1 in links))
            links[N1] = [];
        links[N1].push(N2);
    }
    ajouterRoute(N1, N2);
    ajouterRoute(N2, N1);
}


var depthFirstSearch = function(problem){
    printErr("recherche ...");
    printErr(JSON.stringify(problem))
    var close = [];
    var pile = []
    var actions = []
    pile.push([problem.initialNode, []]);
    while(pile.length > 0){
        var data = pile.pop();
        var currentNode = data[0];
        var actions = []

        if(data[1].length)
            actions.push(data[1])

        if(problem.isGoalState(currentNode)){
            return data;
        }
        if(!(currentNode in close)){
            close.push(currentNode)

            var successors = problem.getSuccessors(currentNode);

            for( var node in successors){

                pile.push([successors[node], actions.push(currentNode)]);
            }
        }
    }
}


var breadthFirstSearch = function(problem){
    printErr("recherche ...");
    printErr(JSON.stringify(problem))
    var close = [];
    var pile = []
    var actions = []
    var roadGate = []
    pile.push([problem.initialNode, []]);
    while(pile.length > 0){
        printErr("********");
        printErr("pile : "+ JSON.stringify(pile));
        var data = pile.shift();
        var ttl = 0;
        var currentNode = data[0];
        var h = data[1];
        var tmp = -1;
        var idx = 0;
        printErr("pile shift : "+ pile);

        printErr("actions: "+ actions );
        printErr("data : "+ data );
        printErr("currentNode : "+ currentNode );
        printErr("current chemin : "+ JSON.stringify(h) );

        printErr("type data1 : " + typeof h);
        /*       if(problem.isGoalState(currentNode)){
         return [currentNode, currentNode + h ];
         }*/
        if(!(close.hasOwnProperty(currentNode))){
            close.push(currentNode)

            var successors = problem.getSuccessors(currentNode);

            printErr("\n\n----------- GetSuccessor -----------");


            printErr("Successors : "+ successors);
            for( var node in successors){
                printErr("node : "+ successors[node]);

                if(problem.isGoalState(successors[node])){


                    nbSuccesor = problem.getSuccessors(successors[node]).length;
                    printErr("nbSuccesor : "+ nbSuccesor);
                    if(nbSuccesor > tmp){
                        idx = ttl;
                    }
                    ttl++;

                    h.push(currentNode,successors[node]);
                    printErr("roadGate 1 : "+ JSON.stringify(roadGate));

                    roadGate[idx] = [successors[node] , h];
                    printErr("THANH : "+ JSON.stringify(h));
                    printErr("roadGate 2: "+ JSON.stringify(roadGate));
                    printErr("roadGateTyoe 1 : "+ typeof roadGate);
                    pile = [];
                    printErr("pile : "+  pile);
                    pile.push([problem.initialNode, []]);
                    if(  ttl  == E){
                        printErr("idx : "+ idx);
                        return roadGate[idx];
                    }

                }else if(!(close.hasOwnProperty(successors[node]))) {
                    printErr("data 1 : "+ data[1] );
                    var tmpH = [];
                    if(h.length > 0){
                        // tmpH.push(h);
                        printErr("vide" );
                    }

                    tmpH.push(currentNode);

                    printErr("histo :) : "+ JSON.stringify(tmpH));
                    var tabe = [successors[node], tmpH];
                    pile.push(tabe);
                    printErr("pile ??? : "+ JSON.stringify(pile));
                }

            }
        }
    }
}

var isGoal = function(node){

    var res = gateway.some(function(value, idx){
        if( node ==  value ){
            return true;
        }
        return false;
    })
    return res;
}

var getSuccessors = function(node){
    return links[node];
}

for (var i = 0; i < L; i++) {
    var inputs = readline().split(' ');
    var N1 = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
    var N2 = parseInt(inputs[1]);
    createLink(N1,N2)
}

printErr(JSON.stringify(links))

for (var i = 0; i < E; i++) {
    var EI = parseInt(readline()); // the index of a gateway node
    gateway.push(EI)
}

// game loop
var problem = {};

problem.isGoalState= isGoal;
problem.getSuccessors = getSuccessors;

while (true) {
    var SI = parseInt(readline()); // The index of the node on which the Skynet agent is positioned this turn
    printErr("Position de skynet : "+ SI)
    var varlinkSup = "";
    var noeudVoisin = "";
    linkremaining --;

    problem.initialNode = SI;
    var varlinkSup = breadthFirstSearch(problem);
    var first = varlinkSup[1] ;
    printErr("closestGateway : "+ varlinkSup[0])
    printErr("prevGateway : "+ varlinkSup[1])
    printErr("linkremainingbefore : "+ Object.keys(links))
    printErr("first : "+ JSON.stringify(first))

    links[first[0]].splice(links[first[0]].indexOf(first[1] ), 1)

    printErr("linkremainingafter : "+ links[varlinkSup[1]])
    print(first[0] + " "+ first[1]   )
}


/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var mainNetwork = initializeNetwork();

// game loop
while (true) {
    var agentIndex = parseInt(readline());
    var skynetAgent = new SkynetAgent(agentIndex,mainNetwork);

    var linkToSever = skynetAgent.findImmediateLinkToGateway() ||
        mainNetwork.getRandomGatewayLink();

    linkToSever.sever();
}

function initializeNetwork(){
    var network = new Network();

    var inputs = readline().split(' ');
    var N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
    var L = parseInt(inputs[1]); // the number of links
    var E = parseInt(inputs[2]); // the number of exit gateways

    network.addNodes(N);

    for (var i = 0; i < L; i++) {
        var inputs = readline().split(' ');
        var N1 = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
        var N2 = parseInt(inputs[1]);

        var node1 = network.getNode(N1);
        var node2 = network.getNode(N2);

        node1.linkTo(node2);
        node2.linkTo(node1);
    }

    for (var i = 0; i < E; i++) {
        var EI = parseInt(readline()); // the index of a gateway node

        network.getNode(EI).markGateway();
    }

    return network;
}

function NodeLink(n1, n2){
    node1 = n1;
    node2 = n2;

    return {
        sever:function(){
            n1.removeLink(n2);
            n2.removeLink(n1);

            print(n1.name() + ' ' + n2.name());
        }
    }
}

function SkynetAgent(index, network){
    var _index = index,
        _network = network;

    return {
        findImmediateLinkToGateway: function(){
            return _network.getNode(_index).findLinkedGateway();
        }
    };
}

function Network(){
    var nodes = [];

    return {
        addNodes: function(numNodes){
            for(var i = 0; i < numNodes; i++){
                this.addNode(i);
            }
        },
        addNode: function(index){
            var newNode = new Node(index);

            nodes[index] = newNode;

            return newNode;
        },
        getNode: function(index){
            return nodes[index];
        },
        getRandomGatewayLink: function(){
            var firstGatewayWithLinks = nodes.find(isGatewayWithLinks);

            return firstGatewayWithLinks.getFirstLink();
        }
    };

    function isGatewayWithLinks(node){
        return node.isGateway() && node.hasLinks();
    }
}

function Node(name){
    var _links = [],
        _name = name,
        _isGateway = false;

    return {
        name:function(){
            return _name;
        },
        linkTo:function(node){

            var linkedNode = _links.find(function(curNode){
                return node === curNode;
            });

            if(!linkedNode){
                _links.push(node);
            }
        },
        removeLink:function(node){
            remove(_links, node);
        },
        getFirstLink:function(){
            return new NodeLink(this, _links[0]);
        },
        hasLinks:function(){
            return _links.length > 0;
        },
        markGateway:function(){
            _isGateway = true;
        },
        isGateway:function(){
            return _isGateway;
        },
        findLinkedGateway:function(){
            var linkedGatewayNode = _links.find(isGatewayNode);

            if(linkedGatewayNode){
                return new NodeLink(this, linkedGatewayNode);
            }
        }
    };

    function isGatewayNode(node){
        return node.isGateway();
    }
}

function remove(array, item){
    var index = array.indexOf(item);

    if(index > -1){
        array.splice(index, 1);
    }
}

if (!Array.prototype.find) {
    Array.prototype.find = function(predicate) {
        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}