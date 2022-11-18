const Merchant = require("./types/Merchant");
// const fs = require("fs");
import fs from "fs";

/**
 * Represents a book.
 * @constructor
 */


const validateAPIKey = async (apiKey: string):Promise<boolean> => {
  const data = await fs.promises.readFile("./src/apikey.json", "utf8");

  const apiKeyIndex = JSON.parse(data).findIndex((e: Merchant) => {
    return e.apiKey === apiKey;
  });

  //console.log("apiKeyIndex", apiKeyIndex);

  return apiKeyIndex > -1;
};

const getAPIKeyIndex = async (apiKey: string):Promise<number> => {
  const data = await fs.promises.readFile("./src/apikey.json", "utf8");

  const apiKeyIndex = JSON.parse(data).findIndex((e: Merchant) => {
    return e.apiKey === apiKey;
  });

  // console.log("apiKeyIndex", apiKeyIndex);
  //console.log(JSON.parse(data)[0]);

  return apiKeyIndex ;
};

const isMerchantActive = async(apikey: string):Promise<boolean> =>{
  const data = await fs.promises.readFile("./src/apikey.json", "utf8");
    
  return JSON.parse(data).at(getAPIKeyIndex(apikey)).isActive;

}

const startTrialVend = async(apikey: string)=>{
  const data = await fs.promises.readFile("./src/apikey.json", "utf8");
    //console.log(JSON.parse(data))
    //let index : number = getAPIKeyIndex(apikey);
    return getAPIKeyIndex(apikey).then((i)=> {return JSON.parse(data)[i]});

  //return JSON.parse(data)[index];

}


module.exports = {
  validateAPIKey, isMerchantActive , startTrialVend
};
