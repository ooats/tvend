"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Merchant = require("./Merchant");
// const fs = require("fs");
const fs_1 = __importDefault(require("fs"));
/**
 * Represents a book.
 * @constructor
 */
const findById = (apiKey) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fs_1.default.promises.readFile("./src/apikey.json", "utf8");
    const apiKeyIndex = JSON.parse(data).findIndex((e) => {
        return e.apiKey === apiKey;
    });
    console.log("apiKeyIndex", apiKeyIndex);
    return apiKeyIndex > -1;
});
module.exports = {
    findById,
};
//# sourceMappingURL=CreditVendService.js.map