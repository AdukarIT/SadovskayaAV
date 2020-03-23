const gallery = document.getElementById("gallery");
const FILTERS = {
    date: [1800, 2020],
    country: '',
    genre: '',
    search: '',
};

function filterByDate(books, dateFrom, dateTo) {
    return books.filter(function (book) {
        return book.published >= dateFrom && book.published <= dateTo;
    });
}

function filterByCountry(books, country) {
    if(country) {
        const authors = getAuthors();

        books = books.filter(function (book) {
            return authors[book.author].country === country;
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

function filterBySearch(books, search) {
    if (search)
        books = books.filter(function (book) {
            return book.name.toLowerCase().includes(search.toLowerCase());
        });

    return books;
}

function getFilteredBooks() {
    let books = getBooks();

    const filters = getFilters();
    for(let filter in filters) {
        switch (filter) {
            case 'date':
                if (filters.date.length > 0)
                    books = filterByDate(books, filters.date[0], filters.date[1]);
                break;
            case 'search':
                books = filterBySearch(books, filters.search);
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

function clearGallery() {
    gallery.innerHTML = '';
}
function renderBooks(books) {
    clearGallery();
    const authors = getAuthors();
    for (const book of books){
        const article = document.createElement("article");
        article.classList.add("article");

        const div = document.createElement("div");
        div.classList.add('cover');
        article.appendChild(div);

        const img = new Image();
        img.src = book.cover;
        img.alt = book.name;
        img.classList.add("cover_img");
        img.addEventListener('load', function (e) {
            div.appendChild(img);
        });
        article.appendChild(div);

        const name = document.createElement('p');
        name.textContent = authors[book.author].name;
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
        start: getFilters().date,
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
        renderBooks(getFilteredBooks())
    });
}

function initCountries() {
    const select = document.getElementById('countries');
    const empty = document.createElement('option');
    select.appendChild(empty);
    const uniq = [];
    for (const author of getAuthors()){
        const option = document.createElement('option');
        if (!uniq.includes(author.country)){
            option.textContent = author.country;
            uniq.push(author.country);
            select.appendChild(option);
            option.value = author.country;
            if (getFilters().country == author.country){
                option.selected = true;
            }
        }
    }
    select.addEventListener('change', function (e) {
        setFilter('country', e.target.selectedOptions[0].value);
        renderBooks(getFilteredBooks());
    })
}

function initGenre() {
    const select = document.getElementById('genres');
    const empty = document.createElement('option');
    select.appendChild(empty);
    const uniq = [];
    for (const book of getBooks()){
        for (const genre of book.genre) {
            if (!uniq.includes(genre)) {
                const option = document.createElement('option');
                option.textContent = genre;
                uniq.push(genre);
                select.appendChild(option);
                if (getFilters().genre == genre){
                    option.selected = true
                }
            }
        }
    }
    select.addEventListener('change', function (e) {
        setFilter('genre', e.target.selectedOptions[0].value);
        renderBooks(getFilteredBooks());
    })
}

function renderAuthor(e) {
    clearGallery();
    const author = getAuthors()[e.target.getAttribute('author_id')];
    const article = document.createElement("article");
    article.classList.add("article");

    const div = document.createElement("div");
    div.classList.add('about_author');
    article.appendChild(div);

    const img = new Image();
    img.src = author.photo;
    img.alt = author.name;
    img.classList.add("author_photo");
    img.addEventListener('load', function (e) {
        div.appendChild(img);
    });

    const info = document.createElement("div");
    info.classList.add('info');
    div.appendChild(info);

    const name = document.createElement('p');
    name.textContent = author.name;
    info.appendChild(name);

    const country = document.createElement('p');
    country.textContent ='Страна: ' +  author.country;
    info.appendChild(country);

    const birth = document.createElement('p');
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

const search = document.getElementById('text-to-find');
search.addEventListener('input', function (e) {
    setFilter('search', search.value);
    renderBooks(getFilteredBooks());
});

function initLocalStorage(key, value) {
    if(!localStorage.getItem(key)) {
        localStorage.setItem(key, value);
        return;
    }

    console.log(`${key} already in local storage.`);
}

function getBooks() {
    return JSON.parse(localStorage.getItem('books'));
}

function getAuthors() {
    return JSON.parse(localStorage.getItem('authors'));
}

function getFilters() {
    return JSON.parse(localStorage.getItem('filters'));
}

function setFilter(key, value) {
    const filters = getFilters();
    filters[key] = value;
    localStorage.setItem('filters', JSON.stringify(filters));
}


function init() {
    initLocalStorage('books', JSON.stringify(db.books));
    initLocalStorage('authors', JSON.stringify(db.authors));
    initLocalStorage('filters', JSON.stringify(FILTERS));
    initRangeSlider('yearsRange');
    initCountries();
    initGenre();
    renderBooks(getFilteredBooks());
}

addEventListener('DOMContentLoaded', function() {
    init();
});