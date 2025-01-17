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
        const expected = [
                         {name: 'crisps', RS: 100}, 
                         {name: 'chocolate', RS: 350},
                         {name: 'mints', RS: 70}
                        ];


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

it("Should Show message 'The item you selected is unavailable' if Item is unavailable",()=>{
    // setup

    const machine = new Machine();
    const code = 4;


    
    //exercise
        
        const actual = machine.selectItem(code);
        
        const expected = `The item you selected is unavailable`;


    // assert
    expect(expected).toEqual(actual);

});


/**
 As a customer, I want to see a message if my deposit is insufficient, so that I know to add more money.
- Given I have made a choice, 
- when I have not deposited enough money for that item, 
- then I see a message telling me how much more to deposit.
- `selectItem(code)` returns `'Your deposit is insufficient.  Please add Rs 20 for this item'`
 */

it("if my deposit is insufficient, Shows the message of needed value",()=>{
    // setup

        const machine = new Machine();
        const money = 100;
        machine.deposit(100);
        const code = 2;
        const expected = 'Your deposit is insufficient.  Please add Rs 250 for this item';
    
    
    
    //exercise

        const actual = machine.selectItem(code);   
        
        


    // assert
    expect(expected).toEqual(actual);

});


/**
As a customer, I want to receive change, so that I don’t pay more than the item costs.
- Given I have made a selection, 
- when the item is delivered, 
- then I receive correct change (in correct monetary units)
- `selectItem(code)` returns an object with the item and an 
array of bills `{item: 'mints', change: [20, 10]}`
*/

it("Receive change on extra amount",()=>{
    // setup

        const machine = new Machine();
        const money = 500;
        machine.deposit(money);
        const code = 3;
        const expected =  {item: "mints",  change: [100, 100, 100, 100, 20, 10] };
           
        

    //exercise
        const actual = machine.selectItem(code);  


    // assert
        expect(actual).toEqual(expected);

});



/*
As a customer, I want to receive my money back when I push the cancel button, so that I can change my mind.
- Given that I have deposited money,
- When I push the cancel button,
- Then I receive my money back
- `cancel()` returns `{change: [100]}`
*/
it("Receive change on extra amount",()=>{
        const machine = new Machine();
        const money = 500;
        machine.deposit(money);
        const expected =  {  change: [money] };
           
        

    //exercise
        const actual = machine.cancel();  


    // assert
        expect(actual).toEqual(expected);

});




/**
 
 As a customer, I want to know if the vending machine can make change, so that I can cancel my choice if it can't make change.
- Given I have deposited money and selected a choice, 
- when the machine does not have correct change, 
- then I see a message
- `selectItem(code)` returns `'Cannot return proper change.  Please choose another item or cancel the transaction'`

*/

it("Should Show message 'The item you selected is unavailable' if Item is unavailable",()=>{
    // setup

        const machine = new Machine();
        const money = 100;
        machine.deposit(100);
        const code = 2;
        const expected = 'Your deposit is insufficient.  Please add Rs 250 for this item';
    
    
    
    //exercise

        const actual = machine.selectItem(code);   
        
        


    // assert
    expect(expected).toEqual(actual);

});



});
