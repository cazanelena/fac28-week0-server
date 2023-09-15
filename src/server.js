const express = require("express");

const server = express();

server.get("/", (req, res) => {
    res.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Home</title>
      </head>
      <body>
        <h1>Hello Express</h1>
      </body>
    </html>
  `);
})

server.get("/colour", (req, res) => {
    const hex = req.query.hex || "ffffff";
    console.log(hex)
   
    res.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Color</title>
      </head>
      <body style="background-color: #${hex}">
      </body>
    </html>
  `);
})


module.exports = server;
