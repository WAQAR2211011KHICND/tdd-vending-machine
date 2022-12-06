const Machine = require('../src/Machine');

describe('the vending machine', () => {

   

    /**
     As a customer, I want to see that the vending machine has items, so that I can purchase them.
    - Given that I approach the vending machine
    - when I look at it,
    - then I see items inside that I can buy
    - seeSelections()` returns an array of objects with item and price:
    - `[{'crisps': 'Rs 100'}, {'chocolate': 'Rs 350'}, {'mints': 'Rs 70'}]`
     */
    
    it("Vending Machine will shown, that it has ",()=>{
        // setup

        const machine = new Machine();
        const expected = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];


        //exercise
        const actual = machine.seeSelections();


        // assert
        expect(expected).toEqual(actual);

    });


    


});
