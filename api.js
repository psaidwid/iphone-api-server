const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const passwords = require('./passwords.json');

var server = app.listen(80, function () {
   console.log("API Server listening on port "+ server.address().port)
})
