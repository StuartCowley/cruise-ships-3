const Port = require('../src/Port.js');

describe('Port', () => {
    it('can be instantiated', () =>{
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('port has a name', () => {
        const port = new Port('Dover');
        expect(port.portName).toBe('Dover');
    })
})