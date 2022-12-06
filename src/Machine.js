module.exports = class Machine {
    
    credit = 0 ;
    Items = [{code : 1, name :'crisps'   , RS:   100},
             {code : 2, name :'chocolate', RS:   350}, 
             {code : 3, name :'mints'    , RS:   70}
            ];

    constructor() {

    }


    seeSelections() {
       
        let Item = [];
        this.Items.forEach(i=>{
            Item.push({name: i.name, RS: i.RS});
        })

        return Item;
    }

    deposit(credits){

        if(credits === 10||credits === 20||credits === 50||credits === 100||credits === 500){
            this.credit += credits; 
            return  `You have deposited Rs ${this.credit}`;
        }
        else
            return 'Invalid Credited Amount';
    }

    selectItem(code){
        
        this.Items.forEach(i=>{
           if( i.code === code)
                return 'Item Avaliable';
        })

        return 'The item you selected is unavailable';
    }
};