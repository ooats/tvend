import express from "express";
const CreditVendService = require("./CreditVendService");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("req.body", req.body);

    let { apiKey } = req.body;
    console.log("apiKey", apiKey);
    const key = CreditVendService.findById(apiKey).then((response) => {
      console.log("found response", response);
    });

    console.log("key...", key);
    return res.send({ message: "key" });
  } catch (err) {
    return res.send(err);
  }
});

module.exports = router;
