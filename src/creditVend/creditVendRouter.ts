import { Console } from "console";
import express from "express";
const CreditVendService = require("./CreditVendService");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const dto: creditVendDTO = req.body as creditVendDTO;
    //console.log(dto);

    
    const key: boolean = await CreditVendService.validateAPIKey(dto.apiKey);

    console.log("was key found", key);
    const isActive: boolean = await CreditVendService.isMerchantActive(dto.apiKey);
    console.log("is active value", isActive);

   if(key && isActive === true){
    console.log(await CreditVendService.startTrialVend(dto.apiKey));
     return res.send({message : await CreditVendService.startTrialVend(dto.apiKey)})}
  } catch (err) {
    return res.send(err);
  }
});

module.exports = router;
