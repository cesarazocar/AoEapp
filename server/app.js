var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors')
var data_routes = require("./routes/data.routes");

app.use(cors())
app.use("/api/v1", data_routes);

module.exports = app;