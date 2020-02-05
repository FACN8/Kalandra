const {
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
} = require('./handlers');

const router = (request, response) => {
    const { url } = request;

    if (url === '/') {
        homeHandler(response);
    } else if (url.includes('public')) {
        publicHandler(url, response);
    } else if (url === '/browse') {
        getEventsHandler(response);
    } else if (url === '/create-event') {
        createEventHandler(response);
    } else if (url === '/register') {
        registerHandler(response);
    } else if (url === '/attendees') {
        getRegisterHandler(response);
    } else if (url === '/create-comment') {
        createCommentHandler(response);
    } else if (url === '/comments') {
        getCommentsHandler(response);
    } else if (url === '/create-review') {
        createReviewHandler(response);
    } else if (url === '/reviews') {
        getReviewsHandler(response);
    }else {
        errorHandler(response);
    }
};

module.exports = router;