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
        let found = -1;
        for(let i =0  ; i < this.Items.length; i++){
            if( this.Items[i].code === code )
                found = i;
        }

        if(found==-1){
            return 'The item you selected is unavailable';
        }
        else {
        
            if ( this.Items[found].RS <= this.credit)
                return 'Success';
            else
                return `Your deposit is insufficient.  Please add Rs ${this.Items[found].RS-this.credit} for this item`;
            
        }
        
        }
            
};