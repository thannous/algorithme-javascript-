


initializeArbre();
function initializeArbre(){
    var myArbre = new Arbre();
    var tmpProfondeur = 9999;
    var n = parseInt(readline()); // the number of adjacency relations
    for (var i = 0; i < n; i++) {
        var inputs = readline().split(' ');
        var xi = parseInt(inputs[0]); // the ID of a person which is adjacent to yi
        var yi = parseInt(inputs[1]); // the ID of a person which is adjacent to xi

        var node = myArbre.getNode(xi);
     /*   printErr("*******")
        printErr("xi : " + xi)
        printErr("yi : " + yi)
        */
        node1 = myArbre.getNode(xi)
        node2 = myArbre.getNode(yi)
            if(node1){
                node1.referenceTo(yi) ;
            }else{
                node1 = myArbre.addNode(xi);
                node1.referenceTo(yi) ;
            }
            if(node2){
                node2.referenceTo(xi) ;
            }else{
                node2 = myArbre.addNode(yi);
                node2.referenceTo(xi)
            }
    }


        var myNodes = myArbre.getAllNode()
        

        for( var j = 0; j < myNodes.length  ;  j++){
            if(myNodes[j]){
                        var profondeur =  parcoursArbre(myNodes[j])
                        printErr ( "profondeur = "+  profondeur )
            }
    
       
            if (profondeur < tmpProfondeur)
                tmpProfondeur = profondeur

        }
        print(tmpProfondeur);

        function parcoursArbre(node){
            printErr("********** Je parcours pour le noeud : "+  node.name())
            var nodeName = node.name()
            var file = []
            var close = []
            file.push([nodeName,0]);
            printErr ( "file 1 = "+  JSON.stringify(file) )
            while(file.length > 0){
                printErr ( " *** " )
                var current = file.shift()
               // printErr ( "file 2 = "+  JSON.stringify(file) )
                var currentNode = current[0]
                var niveau = current[1]
                var nodeContent = myArbre.getNode(currentNode)
                if(nodeContent){
                    printErr ( "currentNode = "+  JSON.stringify(currentNode) )
                    //printErr ( "close = "+  JSON.stringify(close) )
                    printErr ( "close idx = "+  close.indexOf(currentNode) !== -1)
                    
                        if(close.indexOf(currentNode) === -1){
                            close.push(currentNode)
                            printErr ( "close = "+  close )
                            var successors =  nodeContent.getReferenceTo();
                            //printErr ( "successors = "+  successors )
                            for ( var idx in successors){
                                if (close.indexOf(successors[idx]) === -1)
                                    file.push([successors[idx], niveau + 1])
                            }
                            printErr ( "file 3 = "+  JSON.stringify(file) )
                        }
                }

            }
            return niveau;

        }

}
function Arbre() {
    var nodes = [];
    return {
        addNodes : function(N){
            for(i = 0; i < N; i++){
                this.addNode(i)
            }
            
        },
        addNode : function(index){
            var newNode = new Node(index);
            nodes[index] = newNode;
            return newNode;
        },
        getNode: function(index){
            return nodes[index];
        },
        getAllNode: function(){
            return nodes;
        }
    }
}

function Node(name){
    var _links = [],
        _name = name,
        _isGateway = false,
        _reference = [];

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
        referenceTo :function(node){

            _reference.push(node);
        },
        hasLinks:function(){
            return _links.length > 0;
        },
        getReferenceTo:function(){
            return _reference;
        }
    };

}