function Port(portName){
    this.portName = portName;
    this.ships = [];
    this.addShip = function(ship){
        this.ships.push(ship);
    };
    this.removeShip = function(ship){
        const indexOfShip = this.ships.indexOf(ship);
        this.ships.splice(indexOfShip, 1);
    };
};

module.exports = Port