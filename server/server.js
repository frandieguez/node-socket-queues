const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const errorHandler = require('errorhandler');
const path = require('path');
const app = express();
let server = http.createServer(app);

require('dotenv').config();

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV == 'production';

if (!isProduction) {
  app.use(errorHandler())
}

app.use(express.static(publicPath));

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Server listening on port ${ port }…`);
});

// IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');
