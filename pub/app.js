const searchForm = document.querySelector('#searchform');
const postForm = document.querySelector('#create-event-form');
const eventsColumn1 = document.querySelector('#clmn1');
const eventsColumn2 = document.querySelector('#clmn2');
const createEventContainer = document.querySelector('#create-event-container');
const postNav = document.querySelector('#post');
const homeNav = document.querySelector('#home');

const fetchData = (url = '', cb) => {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(response => {
            cb(null, response);
        })
        .catch(error => {
            cb(error);
        });
};

const postData = (url, data, cb) => {
    axios.post(url, data)
        .then(function (response) {
            cb(null, response);
        })
        .catch(function (error) {
            cb(error);
        });
};

const createEvent = (event) => {
    event.preventDefault();

    let values = [];

    postForm.childNodes.forEach((element) => {
        if (element.value)
            values.push(element.value);
    });

    values.forEach((child) => {
        console.log(child);
    });

    postData('/create-event', {
        pic: values[0],
        title: values[1],
        date: values[2],
        descr: values[3]
    }, (error, response) => {
        if (error) {
            alert('Error creating event (POST REQUEST, FRONT END): ' + error);
            return;
        }
        redirectHome();
    });
};

const searchEvents = (event) => {
    if (event) event.preventDefault();
    postNav.style.backgroundColor = '';
    postNav.style.color = 'black';
    postForm.style.display = 'none';

    while (eventsColumn1.firstChild) eventsColumn1.removeChild(eventsColumn1.firstChild);
    while (eventsColumn2.firstChild) eventsColumn2.removeChild(eventsColumn2.firstChild);

    const url = '/search?term=' + searchForm.childNodes[1].value;

    fetchData(url, (error, response) => {
        
        if (!response || error || response.length === 0) {
            searchForm.childNodes[1].value = '';
            alert('No results found');
            //setTimeout(function () {
            //    window.location.href = 'https://stayhipp.com/wp-content/uploads/2019/11/redditucybercreeper101.jpg';
            //}, 0);
            return;
        }

        let flag = true;

        response.forEach(element => {
            let div = document.createElement('div');
            div.className += ' eventitem';

            let img = document.createElement('img');
            img.setAttribute('src', element.pic);
            img.className += ' eventitemimg';
            div.appendChild(img);

            let center = document.createElement('center');
            let title = document.createElement('h1');
            title.className += ' eventitemspan';
            title.textContent = element.title;
            center.appendChild(title);
            div.appendChild(center);

            let descr = document.createElement('h3');
            descr.className += ' eventitemspan';
            descr.textContent = element.descr;
            div.appendChild(descr);

            let date = document.createElement('h3');
            date.className += ' eventitemspan';
            date.textContent = element.date;
            div.appendChild(date);

            if (flag) {
                eventsColumn1.appendChild(div);
                flag = false;
            }
            else {
                eventsColumn2.appendChild(div);
                flag = true;
            }
        });
    });
};

const togglePostContainer = () => {
    if (postForm.style.display === 'none') {
        postNav.style.backgroundColor = 'black';
        postNav.style.color = 'white';
        postForm.style.display = 'flex';
    } else {
        postNav.style.backgroundColor = '';
        postNav.style.color = 'black';
        postForm.style.display = 'none';
    }
};

const redirectHome = () => {
    window.location.href = '/';
};

searchForm.addEventListener('submit', searchEvents);
postForm.addEventListener('submit', createEvent);
postNav.addEventListener('click', togglePostContainer);
homeNav.addEventListener('click', redirectHome);

searchEvents();
