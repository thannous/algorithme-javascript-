
var mainNetwork = initializeNetwork;
printErr("MainNetwork : " + JSON.stringify(mainNetwork))
// game loop
while (true) {
    var SI = parseInt(readline()); // The index of the node on which the Skynet agent is positioned this turn
    //printErr("MainNetwork : " + mainNetwork)


    print('0 1'); // Example: 0 1 are the indices of the nodes you wish to sever the link between
}


function initializeNetwork(){

    var network =  new Network();
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

        node1.linkTo(node2)
        node2.linkTo(node1)
    }

    for (var i = 0; i < E; i++) {
        var EI = parseInt(readline()); // the index of a gateway node
        network.getNode(EI).setGateway()
    }

    return network

}


var Network = function () {
    var nodes = [];
    return {
        addNodes : function(N){
            for(i = 0; i < N; i++){
                this.addNode(i)
            }
            
        },
        addNode : function(index){
            var newNode = new Node(index)
            nodes[index] = newNode;
            return newNode;
        },
        getNode: function(index){
            return nodes[index];
        }
    }
}

var Node = new function(name){
    var _links = [],
        _name = name,
        _isGateway = false;
}

Node.prototype.name = function(){
    return _name;
};

Node.prototype.linkTo = function(node){

    var linkedNode = _links.find(function(curNode){
        return node === curNode;
    });

    if(!linkedNode){
        _links.push(node);
    }
};

Node.prototype.setGateway = function(){
    _isGateway= true;
}