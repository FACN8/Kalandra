// public handler, error handler, create event, get events handler, register handler (for event),review and comment handler
const { readFile } = require('fs');
const path = require('path');
const qs = require('qs');


const {
    getEvents,
    getComments,
    getReviews,
    getRegister
} = require('./queries/getdata.js');

const {
    setEvent,
    setComment,
    setReview,
    setRegister
   } = require('./queries/setData.js');

const serverError = (err, response) => {
    response.writeHead(500, 'Content-Type:text/html');
    response.end('<h1>Sorry, there was a problem loading the homepage</h1>');
    console.log(err);
};

const publicHandler = (url, response) => {
    const filepath = path.join(__dirname, '..', url);
    readFile(filepath, (err, file) => {
        if (err) return serverError(err, response);
        const [, extension] = url.split('.');
        const extensionType = {
            html: 'text/html',
            css: 'text/css',
            js: 'application/javascript',
            ico: 'image/x-icon',
            jpg: 'image/jpg',
            png: 'image/png',
            jpeg: 'image/jpeg'
        };
        response.writeHead(200, { 'content-type': extensionType[extension] });
        response.end(file);
    });
};


const homeHandler = response => {
    const filepath = path.join(__dirname, '..', 'public', 'index.html');
    readFile(filepath, (err, file) => {
        if (err) return serverError(err, response);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(file);
    });
};

const createEventHandler = (request, response) => {
    let data = '';
    request.on('data', chunk => {
        data += chunk;
    });
    request.on('end', () => {
        const { title, pic, date, descr } = qs.parse(data);
        setEvent(title, pic, date, descr, err => {
            if (err) return serverError(err, response);
            response.writeHead(201, { 'Location': '/' }); //change it to go to event page
            response.end()
        });
    });
};

const  getEventsHandler = response => {
    getEvents((err, event) => {
        if (err) return serverError(err, response);
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(event));
    });
};


const registerHandler = (request, response) => {
    let data = '';
    request.on('data', chunk => {
        data += chunk;
    });
    request.on('end', () => {
        const { userId, eventId } = qs.parse(data);
        setRegister(userId, eventId, err => {
            if (err) return serverError(err, response);
            response.writeHead(201, { 'Location': '/' });
            response.end()
        });
    });
};

const  getRegisterHandler = response => {
    getRegister((err, event) => {
        if (err) return serverError(err, response);
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(event));
    });
};

const createCommentHandler = (request, response) => {
    let data = '';
    request.on('data', chunk => {
        data += chunk;
    });
    request.on('end', () => {
        const { userId, eventId, comtext } = qs.parse(data);
        setComment(userId, eventId, comtext, err => {
            if (err) return serverError(err, response);
            response.writeHead(201, { 'Location': '/' });
            response.end()
        });
    });
};

const  getCommentsHandler = response => {
    getComments((err, event) => {
        if (err) return serverError(err, response);
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(event));
    });
};


const createReviewHandler = (request, response) => {
    let data = '';
    request.on('data', chunk => {
        data += chunk;
    });
    request.on('end', () => {
        const { userId, eventId, revtext } = qs.parse(data);
        setReview(userId, eventId, revtext, err => {
            if (err) return serverError(err, response);
            response.writeHead(201, { 'Location': '/' });
            response.end()
        });
    });
};

const  getReviewsHandler = response => {
    getReviews((err, event) => {
        if (err) return serverError(err, response);
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(event));
    });
};



const errorHandler = response => {
    response.writeHead(404, { 'content-type': 'text/html' });
    response.end('<h1>404 Page Requested Cannot be Found</h1>');
};

module.exports = {
    publicHandler,
    homeHandler,
    createEventHandler,
    getEventsHandler,
    registerHandler,
    getRegisterHandler,
    createCommentHandler,
    getCommentsHandler,
    createReviewHandler,
    getReviewsHandler,
    errorHandler
};