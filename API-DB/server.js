'use strict';

const express = require('express');
const mysql = require('mysql'); 

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/test', (req, res) => {
    res.send('Serwus!');
});

var con = mysql.createConnection({
    host: "db",
    user: "root",
    database: "mysql",
    password: "codibly"
  });
  
con.connect(function(err) {
  if (err) throw err;
    console.log("Connected!");
});

app.get('/query', (req, res) => {
    let query = "select * from user;"
    con.query(query, function (err, result) {
        if (err) throw err;
        res.send(result);
      });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);