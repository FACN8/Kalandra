const { Pool } = require('pg');
const url = require('url');
require('dotenv').config();

//if (process.env.NODE_ENV === "test") {
//    DB_URL = process.env.TEST_DB_URL;
//} TEST_DB_URL = postgres://rabea:12345@localhost:5432/namesloc

if (!process.env.DB_URL) throw new Error('Enviroment variable DB_URL must be set')

const params = url.parse(process.env.DB_URL);
const [user, password] = params.auth.split(':');
const options = {
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    max: process.env.MAX_CONNECTION || 2,
    user,
    password,
    ssl: params.hostname !== 'localhost'
}

module.exports = new Pool(options);