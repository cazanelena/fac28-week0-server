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

server.get("/cheese", (req, res) => {
    const html = `
    <form method="POST">
        <label for="cheese">Cheese name</label>
        <input name="cheese" value="">
        <label for="rating">Cheese rating</label>
        <input name="rating" type="range" min="0" max="5" step="0.5">
        <button>Rate Cheese</button>
    </form>
    `
    res.send(html)
})
module.exports = server;
