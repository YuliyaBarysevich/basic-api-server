'use strict'

const server = require('./src/server');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000;

dotenv.config();

server.start(PORT)