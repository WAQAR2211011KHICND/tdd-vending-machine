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
                return { item   : this.Items[found].name ,
                         change : this.processChange(this.Items[found].RS)
                        };
            else
                return `Your deposit is insufficient.  Please add Rs ${this.Items[found].RS - this.credit} for this item`;
        }
    }

    processChange(itemPrice){
        let change   = [];
        let currNote = [10,20,50,100,500];

        if(this.credit === itemPrice)
            return change;

        let remaining = this.credit - itemPrice;

        let currIndex = currNote.length;
        while (remaining!==0 && currIndex > -1 ){
            
            while(remaining - currNote[currIndex] > -1){                
                  remaining -= currNote[currIndex];  
                  change.push( currNote[currIndex] );
            }
            currIndex -= 1;
        }

        this.credit = 0;
        return change;

    }
    
    cancel(){
        let returnedMoney = this.credit;
        this.credit = 0;
        return {
            change : [returnedMoney]
        };
    }


            
};