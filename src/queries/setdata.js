const dbConnection = require('../../db/db_connection.js');


const setEvent = (title, pic, date, descr, cb) => {
    dbConnection.query(
        'INSERT INTO events (title, pic, date, descr) VALUES ($1, $2, $3, $4)',
        [title, pic, date, descr],
        (err, res) => {
        if (err) return cb(err);
        cb(null, res);
        }
        );
}


const setComment = (userId, eventId, comtext, cb) =>{
    dbConnection.query(
        'INSERT INTO comments (user_Id, event_Id, comtext) VALUES ($1, $2, $3)',
        [userId, eventId, comtext],
        (err, res) => {
        if (err) return cb(err);
        cb(null, res);
        }
        );
}


const setReview = (userId, eventId, revtext,cb) => {
    dbConnection.query(
        'INSERT INTO reviews (user_Id, event_Id, revtext) VALUES ($1, $2, $3)',
        [userId, eventId, revtext],
        (err, res) => {
        if (err) return cb(err);
        cb(null, res);
        }
        ); 
}


const setRegister = (userId, eventId, cb) => {
    dbConnection.query(
        'INSERT INTO attend (user_Id, event_Id) VALUES ($1, $2)',
        [userId, eventId],
        (err, res) => {
        if (err) return cb(err);
        cb(null, res);
        }
        ); 
}
q



module.exports = {
    setEvent,
    setComment,
    setReview,
    setRegister
};