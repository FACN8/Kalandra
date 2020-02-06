const { readFile } = require('fs');
const path = require('path');
const qs = require('querystring');
const getData = require('./queries/getdata.js');
//const setData = require('./queries/setData.js');
const extensionType = {
    html: { "Content-Type": "text/html" },
    css: { "Content-Type": "text/css" },
    js: { "Content-Type": "application/javascript" },
    png: { "Content-Type": "image/png" },
    jpg: { "Content-Type": "image/jpg" },
    ico: { "Content-Type": "image/x-icon" },
    json: { "Content-Type": "application/json" },
    text: { "Content-Type": "text/plain" }
};

const serverError = (err, response) => {
    response.writeHead(500, extensionType.html);
    response.end('<h1>Sorry, there was a problem loading the homepage</h1>');
    console.log(err);
};

const publicHandler = (request, response) => {
    const filepath = path.join(__dirname, "..", request.url);
    const fileExt = filepath.split(".")[1];

    readFile(filepath, (error, file) => {
        if (error) return serverError(error, response);

        response.writeHead(200, extensionType[fileExt]);
        response.end(file);
    });
};

const searchHandler = (request, response) => {
    const term = request.url.split('=')[1];

    getData.search(term, (error, result) => {
        if (error) serverError(error, response);

        response.writeHead(200, extensionType.json);
        response.end(JSON.stringify(result));
    });
};
/*
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

const getEventsHandler = response => {
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

const getRegisterHandler = response => {
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

const getCommentsHandler = response => {
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

const getReviewsHandler = response => {
    getReviews((err, event) => {
        if (err) return serverError(err, response);
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(event));
    });
};*/

const errorHandler = response => {
    response.writeHead(404, { 'content-type': 'text/html' });
    response.end('<h1>404 Page Requested Cannot be Found</h1>');
};

module.exports = {
    publicHandler,
    searchHandler,
    /*  createEventHandler,
      getEventsHandler,
      registerHandler,
      getRegisterHandler,
      createCommentHandler,
      getCommentsHandler,
      createReviewHandler,
      getReviewsHandler,*/
    errorHandler
};
