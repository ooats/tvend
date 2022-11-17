const Merchant = require("./Merchant");
// const fs = require("fs");
import fs from "fs";

/**
 * Represents a book.
 * @constructor
 */
const validateAPIKey = async (apiKey: string) => {
  const data = await fs.promises.readFile("./src/apikey.json", "utf8");

  const apiKeyIndex = JSON.parse(data).findIndex((e: Merchant) => {
    return e.apiKey === apiKey;
  });

  console.log("apiKeyIndex", apiKeyIndex);

  return apiKeyIndex > -1;
};

module.exports = {
  validateAPIKey,
};
