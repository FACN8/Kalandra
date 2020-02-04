const form = document.querySelector('#searchform');

const fetchData = (url, cb) => {
    axios.get(url)
        .then((response) => {
            cb(null, response)
        })
        .catch((error) => {
            cb(error)
        })
};

const searchEvents = (event) => {
    event.preventDefault();

    const url = '/search?term=' + form.childNodes[1].value;

    fetchData(url, (error, response) => {
        if (error /*|| no data*/) {
            form.childNodes[1].value = '';
            alert('No results found');
            return;
        }
        //Populate DOM with reponse object...
    });
};

form.addEventListener('submit', searchEvents);