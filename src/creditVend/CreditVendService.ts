const Merchant = require("./Merchant");
const fs = require("fs");

/**
 * Represents a book.
 * @constructor
 */
function Book(title, author) {}

const findById = (apiKey) => {
  // let file = fs.readFileSync("./src/apikey.json");
  // console.log("file found", file);
  // return "Hello";
  fs.readFileSync("./src/apikey.json", "utf8", (error, data) => {
    if (error) {
      console.log("error", error);
      return;
    }

    console.log("findById apiKey", apiKey);

    return JSON.parse(data).find((e: any) => {
      return e.id === apiKey;
      // console.log("found", found);
    });
  });

  // const path = "./src/apikey.json";
};

function base64_encode(file) {
  var bitmap = fs.readFileSync(file);
  return new Buffer(bitmap).toString("base64");
}

// function myfun(filePath, cb) {
//   var str = "";
//   fs.readFile(filePath, "utf8", function (err, data) {
//     if (err) throw err;
//     cb(data);
//   });

//   fs.readFile("./src/apikey.json", "utf8", (error, data) => {
//     if (error) {
//       console.log("error", error);
//       return;
//     }

//     console.log("findById apiKey", apiKey);

//     return JSON.parse(data).find((e: any) => {
//       return e.id === apiKey;
//       // console.log("found", found);
//     });
//   });
// }

module.exports = {
  findById,
};
