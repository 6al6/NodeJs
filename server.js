/* const http = require("http");

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("Hello World");
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});

console.log(__filename);
console.log(__dirname);

const { readFile, readFileSync } = require("fs");

try {
  const data = readFileSync("hi.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error(err);
} */
/*
const { writeFile, writeFileSync } = require("fs");

const newContent = "This is some new text";*/

/*writeFile("hi.txt", newContent, {flag:'a'}, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Content written");
});*/

/* SAME BUT WITH writeFileSync */
/*
try {
  writeFileSync("hi.txt", newContent, { flag: "a" });
  console.log("Content written!");
} catch (err) {
  console.error(err);
}*/

/* USING APPEND FILE METHOD INSTEAD OF USING FLAGS*/
/*
const { appendFile } = require("fs");

const newContent = "\nThis is some more new content";

appendFile("hi.txt", newContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Content written");
});

//RENAMING FILES//
const { rename } = require("fs");

rename("hi.txt", "hello.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File renamed");
});

//DELETING FILES//
const { unlink } = require("fs");

unlink("hello.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File deleted");
}); */

/*
//MODULES - EXPORT AND IMPORT//

//const addNums = require("./addNums");//
//ANTHER WAY TO IMPORT FILES//
import { addNums } from "./addNums.js";
//TWO WAYS WE CAN GO ABOUT THIS: 1. change file name from .js to .mjs OR 2. adding attribute to package json file
// how to get package json? - npm init -y and add: "type": "module"  in package.json
const sum = addNums(2, 2);

console.log(sum);

// usign es6 modules we no longer have acces to require, export, __filename, __dirname... THAT WHY IT IS COMMON TO USE COMMON JS SYNTAX MODULE.EXPORTS AND REQUIRE
*/

//BASIC HTML CONTENT//

//create webs server//

const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  let path = "./";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});
server.listen(PORT, () => console.log("Server running"));

//BASIC ROUTING//
//we want to be able to route certain files to certain urls//
//LOOK EXAMPLE ABOVE//

//CHANGING STATUS CODE BASED ON PAGE WE ARE ON//
//ADD: res.statusCode = 200 or whatever for each path//

//REDIRECTS//
// want to redirect from nonexistent links that now go to 404 page to HOME PAGE
//change statusCode to 301 - redirect
//add res.setHeADER('Location', '/')

//NODE PACKAGE MANAGER - NPM
