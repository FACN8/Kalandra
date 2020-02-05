const fs = require('fs');
const dbConnection = require('./db_connection');
const initQuery = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

dbConnection.query(initQuery, (err, result) => {
    if (err) throw err;
    console.log('Database created:', result)
});