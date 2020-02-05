const handlers = require('./handlers');

const router = (request, response) => {

    if (request.url === '/') {
        request.url = '/pub/index.html';
    } //TRY MERGING BOTH IFs (WITH ELSE) ... else ...
    
    if (request.url.includes('pub')) {
        handlers.publicHandler(request, response);
    } else if (request.url.includes('/search?')) {
        handlers.searchHandler(request, response);
    }/* else if (request.url === '/browse') {
        handlers.getEventsHandler(response);
    } else if (request.url === '/create-event') {
        handlers.createEventHandler(response);
    } else if (request.url === '/register') {
        handlers.registerHandler(response);
    } else if (request.url === '/attendees') {
        handlers.getRegisterHandler(response);
    } else if (request.url === '/create-comment') {
        handlers.createCommentHandler(response);
    } else if (request.url === '/comments') {
        handlers.getCommentsHandler(response);
    } else if (request.url === '/create-review') {
        handlers.createReviewHandler(response);
    } else if (request.url === '/reviews') {
        handlers.getReviewsHandler(response);
    } */else {
        handlers.errorHandler(response);
    }
};

module.exports = router;