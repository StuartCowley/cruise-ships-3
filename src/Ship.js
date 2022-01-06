function Ship(startingPort){
    this.currentPort = startingPort;
    this.setSail = function(){
        this.currentPort = '';
    };
    this.dock = function(port){
        this.currentPort = port;
    };
};

module.exports = Ship