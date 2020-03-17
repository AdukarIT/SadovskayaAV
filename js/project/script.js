const gallery = document.getElementById("gallery");
const filters = {
    date: [],
    country: '',
    genre: '',
};

function filterByDate(books, dateFrom, dateTo) {
    return books.filter(function (book) {
        return book.published >= dateFrom && book.published <= dateTo;
    });
}

function filterByCountry(books, country) {
    if(country) {
        books = books.filter(function (book) {
            return db.authors[book.author].country === country;
        });
    }
    return books
}

function filterByGenre(books, genre) {
    if (genre)
        books = books.filter(function (book) {
            return book.genre.includes(genre);
        });

    return books;
}

function runFilter() {
    let books = db.books;

    for(let filter in filters) {
        switch (filter) {
            case 'date':
                if (filters.date.length > 0)
                    books = filterByDate(books, filters.date[0], filters.date[1]);
                break;
            case 'country':
                books = filterByCountry(books, filters.country);
                break;
            case 'genre':
                books = filterByGenre(books, filters.genre);
                break;
            default:
                throw new Error(`Wrong filter: ${filter}`);
        }
    }

    return books;
}

function setFilter(name, value) {
    filters[name] = value;
    const books = runFilter();
    renderBooks(books);
}
function clearGallery() {
    gallery.innerHTML = '';
}
function renderBooks(books) {
    clearGallery();
    for (const book of books){
        let article = document.createElement("article");
        article.classList.add("article");

        let div = document.createElement("div");
        div.classList.add('cover');
        article.appendChild(div);

        let img = new Image();
        img.src = book.cover;
        img.alt = book.name;
        img.classList.add("cover_img");
        img.addEventListener('load', function (e) {
            div.appendChild(img);
        });
        article.appendChild(div);

        let name = document.createElement('p');
        name.textContent = db.authors[book.author].name;
        article.appendChild(name);
        name.classList.add("author_name");
        name.setAttribute('author_id', book.author);
        name.addEventListener('click', renderAuthor);

        gallery.appendChild(article);
    }
}

function initRangeSlider(selector) {
    const toInt = {
        to: function (number) {
            return `${parseInt(number)} год`;
        }
    };

    const range = document.getElementById(selector);

    noUiSlider.create(range, {
        start: [1800, 2020],
        connect: true,
        range: {
            'min': 1800,
            'max': 2020
        },
        step: 1,
        tooltips: [toInt, toInt],
    });

    range.noUiSlider.on('change', function (date) {
        setFilter('date', date);
    });
}

function initCountries() {
    const select = document.getElementById('countries');
    const empty = document.createElement('option');
    select.appendChild(empty);
    const uniq = [];
    for (const author of db.authors){
        const option = document.createElement('option');
        if (!uniq.includes(author.country)){
            option.textContent = author.country;
            uniq.push(author.country);
            select.appendChild(option);
            option.value = author.country;
        }
    }
    select.addEventListener('change', function (e) {
        setFilter('country', e.target.selectedOptions[0].value)
    })
}

function initGenre() {
    const select = document.getElementById('genres');
    const empty = document.createElement('option');
    select.appendChild(empty);
    const uniq = [];
    for (const book of db.books){
        for (const genre of book.genre) {
            if (!uniq.includes(genre)) {
                const option = document.createElement('option');
                option.textContent = genre;
                uniq.push(genre);
                select.appendChild(option)
            }
        }
    }
    select.addEventListener('change', function (e) {
        setFilter('genre', e.target.selectedOptions[0].value)
    })
}

function init() {
    initRangeSlider('yearsRange');
    initCountries();
    initGenre();
    renderBooks(db.books);
}
init();

function renderAuthor(e) {
    clearGallery();
    let author = db.authors[e.target.getAttribute('author_id')];
    let article = document.createElement("article");
    article.classList.add("article");

    let div = document.createElement("div");
    div.classList.add('about_author');
    article.appendChild(div);

    let img = new Image();
    img.src = author.photo;
    img.alt = author.name;
    img.classList.add("author_photo");
    img.addEventListener('load', function (e) {
        div.appendChild(img);
    });

    let info = document.createElement("div");
    info.classList.add('info');
    article.appendChild(info);

    let name = document.createElement('p');
    name.textContent = author.name;
    info.appendChild(name);

    let country = document.createElement('p');
    country.textContent ='Страна: ' +  author.country;
    info.appendChild(country);

    let birth = document.createElement('p');
    console.log(author.birthday);
    author.birthday = author.birthday.replace(/-/g, '.');
    birth.textContent = 'Дата рождения: ' +  author.birthday;
    info.appendChild(birth);

    let death = document.createElement('p');
    console.log(author.deathdate);
    author.deathdate = author.deathdate.replace(/-/g, '.');
    if (author.deathdate) {
        death.textContent = 'Дата смерти: ' + author.deathdate;
    }
    info.appendChild(death);

    gallery.appendChild(article);

}
