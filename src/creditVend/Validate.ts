// const Merchant = require("./types/Merchant");


function checkTypes(str: string):boolean{
    if(typeof str === "string"  && parseInt(str)!== null){
        return true;
    }
}

