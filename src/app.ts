const express = require("express");
const CreditVendRouter = require("./creditVend/creditVendRouter");

const app = express();
console.log("We are here");
app.use(express.json({ limit: "3mb" }));
app.use(CreditVendRouter);

module.exports = app;
