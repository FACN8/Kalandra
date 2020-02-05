const dbConnection = require('../../db/db_connection');

const search = (term, cb) =>
    dbConnection.query('SELECT * FROM events WHERE title LIKE $1 OR descr LIKE $2;', ['%' + term + '%', '%' + term + '%'],
        (err, result) => {
            if (err) return cb(err)
            cb(null, result.rows)
        });

const getEvents = (cb) =>
    dbConnection.query('SELECT * FROM events;',
        (err, result) => {
            if (err) return cb(err)
            cb(null, result.rows)
        });

const getComments(eventId, cb) =>
    dbConnection.query('SELECT * FROM events WHERE title LIKE $1 OR descr LIKE $2;', ['%' + term + '%', '%' + term + '%'],
        (err, result) => {
            if (err) return cb(err)
            cb(null, result.rows)
        });

getReviews(eventId, cb) {

}
getRegister(eventId, cb) {

}


module.exports = {
    search,
    getEvents,
    getComments,
    getReviews,
    getRegister
};