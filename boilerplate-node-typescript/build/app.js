"use strict";
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello Express World!!');
});
app.listen(4000, function () {
    console.log('Express server running on port 4000!!');
});
