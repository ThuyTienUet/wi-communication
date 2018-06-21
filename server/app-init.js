const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');

const cors = require('cors');
const bodyParser = require('body-parser');
const routesApi = require('./routes/index');
const io = require('socket.io')(server);
require('./socket.io/socket.io')(io);
require('./database/db-connect');

app.use(cors());

app.use(express.static('database/upload'));
app.use(bodyParser.json());
app.use('/api', routesApi);

module.exports.io = io;
module.exports.app = app;
module.exports.server = server;