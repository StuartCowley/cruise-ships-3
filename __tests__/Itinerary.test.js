const Itinerary =  require('../src/Itinerary.js');

describe('Itinerary', () =>{
    describe('with iterineraries', () =>{
        let dover;
        let calais;
        let itinerary;
        beforeEach(() => {
            dover = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                portName: 'Dover',
                ships: []
            };
            calais = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                portName: 'Calais',
                ships: []
            };
            itinerary = {
                ports: [dover, calais]
            };
        });
        it('it can be instantiated', () =>{
            expect(new Itinerary()).toBeInstanceOf(Object);
        });
        it('can have ports', () =>{
            expect(itinerary.ports).toEqual([dover, calais]);
        });
    });    
});