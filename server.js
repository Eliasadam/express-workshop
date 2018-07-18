// const http = require("http");

// const server = http.createServer(function(req, res) {
//     console.log("New request:" + Date());
//     console.log("New request:" + JSON.stringify(req));
//   res.end("Hello World!");
// });
// server.listen(5000);

// console.log("Node.js web server at port 5000 is running..");

//<--------------==============================================-------------->

// const express = require("express");
// const app = express();
// app.get("/", function(req, res) {
//     if (req.url === "/") {
//         //check the URL of the current request
//         console.log("New request to main page at " + Date());
//         // set response header
//         res.writeHead(200, { "Content-Type": "text/html" });
//         // set response content
//         res.write("<html><body><h1>This is home Page.</h1></body></html>");
//         res.write("<h2>The time is: " + Date() + "</h2>");
//         res.end("Hello world");
//       } 
//   });

// app.listen(5000, function() {
//     console.log("Server is listening on port 3000. Ready to accept requests!");
//   });

//   //<================================================================================>

const express = require("express");
 const app = express();
 const formidable = require("express-formidable");
 const fs = require("fs");
//  const parsedFile = JSON.parse(file);
  app.use(express.static("public"));
  app.use(formidable());

  app.get("/01", function(req, res) {
    res.send("Hello World!");
  });

  app.get("/chocolate", function(req, res) {
    res.send("Mm chocolate :O");
  });

  app.get("/order", function(req, res) {
    // console.log(req.fields);
    res.render('/order/index.html');

  }
);

  
  app.post("/ahmed", function(req, res) {
    res.json(req.fields);
    
    fs.writeFile("data/posts.json", req.fields, function(error) {
        // do something
console.log("res.field");
      });

  });

 fs.readFile(__dirname + "/data/posts.json", function(error, file) {
  //  const parsedFile=JSON.parse(file.toString());
        // console.log(parsedFile);
        console.log(file.toString());
      });
  

  app.listen(3000, function() {
    console.log("Server is listening on port 3000. Ready to accept requests!");
  });
//   const fs = require('fs')
// fs.readFile(__dirname + "/data/posts.json", function (error, file) {
//     const parsedFile = JSON.parse(file.toString());
//     console.log(parsedFile);
// });

//<====================================================================================>
// const http = require("http");
// const server = http.createServer(function(req, res) {
//   if (req.url === "/") {
//     //check the URL of the current request
//     console.log("New request to main page at " + Date());
//     // set response header
//     res.writeHead(200, { "Content-Type": "text/html" });
//     // set response content
//     res.write("<html><body><h1>This is home Page.</h1></body></html>");
//     res.write("<h2>The time is: " + Date() + "</h2>");
//     res.end();
//   } 
// else if (req.url === "/student") {
//     console.log("New request to Student page at " + Date());
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("<html><body><h1>This is student Page.</h1></body></html>");
//     res.end();
//   } else {
//     res.end(
//       "<html><body><h2>Invalid Request at " + Date() + "</h2></body></html>"
//     );
//   }
// });

// server.listen(5000);

// console.log("Node.js web server at port 5000 is running..");

