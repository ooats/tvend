import express from "express";
const CreditVendService = require("./CreditVendService");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const dto: creditVendDTO = req.body as creditVendDTO;

    const key = await CreditVendService.validateAPIKey(dto.apiKey);

    console.log("was key found", key);
    return res.send({ message: key });
  } catch (err) {
    return res.send(err);
  }
});

module.exports = router;
