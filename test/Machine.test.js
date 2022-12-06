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
        const expected = [{name: 'crisps', RS: 100}, 
                         {name: 'chocolate', RS: 350},
                         {name: 'mints', Rs: 70}];


        //exercise
        const actual = machine.seeSelections();


        // assert
        expect(expected).toEqual(actual);

    });

/**
 * 

As a customer, I want to know how much money I have deposited, so that I know what I can purchase.
- Given I am using the vending machine, 
- when I insert money, 
- then I see the total I have deposited on a screen. 
- `deposit(100)` returns `'You have deposited Rs 100'`
- The machine should accept bills in these amounts: `10, 20, 50, 100, 500`
 
 */
    it("The machine should accept bills in these amounts: `10, 20, 50, 100, 500",()=>{
    // setup

    const machine = new Machine();
    const money = 10;
    const expected = `You have deposited Rs ${money}`;

    //exercise
    const actual = machine.deposit(money);


    // assert
    expect(expected).toEqual(actual);

});


/**
 As a customer, I want to add additional money, so that I can use the denominations I have to purchase an item.
- Given I have deposited money in the vending machine,
- when I deposit additional money,
- then I see the new total on a screen. 
- After depositing Rs 100, `deposit(50)` returns `'You have deposited Rs 150'`

 */
it("The machine should accepted the additional money, in these amounts: `10, 20, 50, 100, 500",()=>{
    // setup

    const machine = new Machine();
    const initialMoney = 10;
    machine.deposit(initialMoney);

    
    //exercise
    
        const extraMoney = 10;
        const actual = machine.deposit(extraMoney);
        
        const expected = `You have deposited Rs ${20}`;


    // assert
    expect(expected).toEqual(actual);

});

/**
 
As a customer, I want to see a message if my item is unavailable, so that I can make another choice.
- Given I am using the vending machine, 
- when I enter a code for an item that is unavailable, 
- then I see a message that the item is unavailable.
- `selectItem(code)` returns `'The item you selected is unavailable'`
 */
it("The machine should accepted the additional money, in these amounts: `10, 20, 50, 100, 500",()=>{
    // setup

    const machine = new Machine();
    const initialMoney = 10;
    machine.deposit(initialMoney);

    
    //exercise
    
        const extraMoney = 10;
        const actual = machine.deposit(extraMoney);
        
        const expected = `You have deposited Rs ${20}`;


    // assert
    expect(expected).toEqual(actual);

});


});
