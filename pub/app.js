const form = document.querySelector('#searchform');
const eventsColumn1 = document.querySelector('#clmn1');
const eventsColumn2 = document.querySelector('#clmn2');

const fetchData = (url, cb) => {
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

const searchEvents = (event) => {
    if (event) event.preventDefault();

    while (eventsColumn1.firstChild) eventsColumn1.removeChild(eventsColumn1.firstChild);
    while (eventsColumn2.firstChild) eventsColumn2.removeChild(eventsColumn2.firstChild);

    const url = '/search?term=' + form.childNodes[1].value;

    fetchData(url, (error, response) => {
        
        if (!response || error || response.length === 0) {
            form.childNodes[1].value = '';
            alert('No results found');
            setTimeout(function () {
                window.location.href = 'https://stayhipp.com/wp-content/uploads/2019/11/redditucybercreeper101.jpg';
            }, 0);
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

form.addEventListener('submit', searchEvents);

searchEvents();
