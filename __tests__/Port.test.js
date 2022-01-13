const Port = require('../src/Port.js');

describe('Port', () => {
    describe('with ships', () =>{
        let port;
        let ship;
        let titanic;
        let queenMary;
        beforeEach(() => {
            port = new Port('Dover');
            ship = {};
            titanic = {};
            queenMary = {};
        })
        it('can be instantiated', () =>{
            expect(new Port()).toBeInstanceOf(Object);
        });
        it('port has a name', () => {
            expect(port.portName).toBe('Dover');
        });
        it('can add a ship', () => {
            port.addShip(ship);
            expect(port.ships).toContain(ship);
        });
        it('can remove a ship', () =>{
            port.addShip(titanic);
            port.addShip(queenMary);
            port.removeShip(queenMary);
            expect(port.ships).toEqual([titanic]);
        });
    });
});