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
            if (err) return cb(err);
            cb(null, result.rows);
        });

const getComments = (eventId, cb) =>
    dbConnection.query(
        'SELECT comments.event_id,users.username,comments.comtext ' +
        'FROM users join comments on comments.user_id = users.id ' +
        'where comments.event_id = $1;', [eventId],
        (err, result) => {
            if (err) return cb(err)
            cb(null, result.rows)
        });

const getReviews = (eventId, cb) =>
    dbConnection.query(
        'SELECT reviews.event_id,users.username,reviews.revtext ' +
        'FROM users join reviews on reviews.user_id = users.id ' +
        'where reviews.event_id = $1;', [eventId],
        (err, result) => {
            if (err) return cb(err)
            cb(null, result.rows)
        });


const getRegister = (eventId, cb) =>
    dbConnection.query(
        'SELECT users.username FROM attend join users on attend.user_id ' +
        '= users.id where attend.event_id = $1;', [eventId],
        (err, result) => {
            if (err) return cb(err)
            cb(null, result.rows)
        });

module.exports = {
    search,
    getEvents,
    getComments,
    getReviews,
    getRegister
};