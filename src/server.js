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
    
    const html = `
    <style>
        body {
            background-color: #${hex}
        }
    </style>
    <form>
        <label for="hex">Enter hex color</label>
        <input name="hex" value="${hex}">
    </form>
    `
    res.send(html)
})


module.exports = server;
