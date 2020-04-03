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
    for (const id in books){
        const book = books[id];
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
            img.setAttribute('book_id', id)
            div.appendChild(img);
            img.addEventListener('click', function (e) {
                renderBook(e.target.getAttribute('book_id'));
            })
        });
        article.appendChild(div);

        const name = document.createElement('p');
        if(!authors[book.author]){
            console.log('Can not render book.', book);
            continue;
        }
        name.textContent = authors[book.author].name;
        article.appendChild(name);
        name.classList.add("author_name");
        name.setAttribute('author_id', book.author);
        name.addEventListener('click', function (e) {
            renderAuthor(e.target.getAttribute('author_id'));
        });

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

function renderBook(id) {
    clearGallery();
    const book = getBook(id);
    console.log(book);
    const article = document.createElement("article");
    article.classList.add("article");

    const div = document.createElement("div");
    div.classList.add('about_book');
    article.appendChild(div);

    const img = new Image();
    img.src = book.cover;
    img.alt = book.name;
    img.classList.add("book_cover");
    img.addEventListener('load', function (e) {
        div.appendChild(img);
    });

    const info = document.createElement("div");
    info.classList.add('info');
    div.appendChild(info);

    const name = document.createElement('p');
    name.textContent = book.name;
    info.appendChild(name);

    const published = document.createElement('p');
    published.textContent ='Год публикации: '+  book.published;
    info.appendChild(published);

    const genre = document.createElement('p');
    genre.textContent = "Жанр: " + book.genre;
    info.appendChild(genre);

    const quote = document.createElement('p');
    quote.textContent = "Цитаты из книги: " + book.notes;
    info.appendChild(quote);

    gallery.appendChild(article);

}

function renderAuthor(id) {
    clearGallery();
    const author = getAuthors()[id];
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
        if (author.deathdate) {
            author.deathdate = author.deathdate.replace(/-/g, '.');
            death.textContent = 'Дата смерти: ' + author.deathdate;
        }
    info.appendChild(death);

    gallery.appendChild(article);
}

function initSearch(id) {
    const search = document.getElementById(id);
    search.value = getFilters().search;

    search.addEventListener('input', function (e) {
        setFilter('search', search.value);
        renderBooks(getFilteredBooks());
    });
}

function initLocalStorage(key, value) {
    if(!localStorage.getItem(key)) {
        localStorage.setItem(key, value);
        return;
    }
    console.log(`${key} already in local storage.`);
}

function getBook(id) {
    const books = getBooks();
    if(books[id]){
        return books[id];
    }
    alert('Book not found!');
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


function addBook() {
    const button = document.getElementById('addBook');
    button.addEventListener('click', function (e) {
        clearGallery();
        const htmlForm = '' +
            '  <div id="formContainer2" class="formContainer">\n' +
            '       <form method="post" name="addNewBook" >\n' +
            '           <input name="name" required size="100%" type="text"  placeholder="название книги" >\n' +
            '           <input name="published" required size="100%" type="number" placeholder="год публикации">\n' +
            '           <input name="cover" required size="100%" type="text" placeholder="ссылка на изображение обложки">\n' +
            '           <input name="genre" required size="100%" type="text" placeholder="жанр">\n' +
            '           <textarea name="notes" size="100%" placeholder="цитаты из книги"></textarea>\n' +
            '           <select id="choose_author">\n' +
            '           </select>\n'+
            '           <div class="button_container">\n'+
            '                <button class=" button button_create" type="submit">добавить книгу</button>\n' +
            '                <button class="button button_reset-form" type="reset">очистить</button>\n'+
            '           </div>\n'+
            '      </form>\n' +
            '  </div>'
        gallery.innerHTML = htmlForm;

        const select = document.getElementById('choose_author');
        for (const author of getAuthors()){
            const option = document.createElement('option');
            option.value = author.id;
            option.textContent = author.name;
            select.appendChild(option);
        }

        const formElement = document.forms.addNewBook;

        formElement.addEventListener('submit', function (e) {
            e.preventDefault();

            const book = {};
            for(const field of e.target.elements) {
                if(field.name && field.value) {
                    console.log(field.name, field.value)
                    if (field.name === 'genre'){
                        let genre = [];
                        genre.push(field.value);

                        book[field.name] = genre;
                        continue;
                    }
                    book[field.name] = field.value;
                }
            }

            const books = getBooks();
            for (const oldBook of books) {
                if (oldBook.name == book.name) {
                    alert("такая книга уже есть");
                    return;
                }
            }


            const authors = getAuthors();
            for (const author of authors){
                book.author = author.id;
            }

            books.push(book);
            console.log(book);
            localStorage.setItem('books', JSON.stringify(books));

            return false;
        });

    })
}


function addAuthor() {
    const button = document.getElementById('addAuthor');
    button.addEventListener('click', function (e) {
        clearGallery();
        const htmlForm = '' +
            '  <div id="formContainer" class="formContainer">\n' +
            '       <form method="post" name="addNewAuthor">\n' +
            '           <input name="name" required size="100%" type="text"  placeholder="Имя и фамилия автора" >\n' +
            '           <input name="birthday" required size="100%" type="datetime" placeholder="дата рождения в формате ДД-ММ-ГГ">\n' +
            '           <input name="deathdate"  size="100%" type="datetime" placeholder="дата смерти в формате ДД-ММ-ГГ"">\n' +
            '           <input name="country" required size="100%" type="text" placeholder="страна (гражданство)">\n' +
            '           <input name="photo" required size="100%" type="text" placeholder="ссылка на фотографию">\n' +
            '           <div class="button_container">\n'+
            '                <button class=" button button_create" type="submit">добавить автора</button>\n' +
            '                <button class="button button_reset-form" type="reset">очистить</button>\n'+
            '           </div>\n'+
        '      </form>\n' +
        '  </div>';
        gallery.innerHTML = htmlForm;

        const formElement = document.forms.addNewAuthor;

        formElement.addEventListener('submit', function (e) {
            e.preventDefault();

            const author = {};
            for(const field of e.target.elements) {
                if(field.name && field.value) {
                    author[field.name] = field.value;
                }
            }


            const authors = getAuthors();
            for (const oldAuthor of authors) {
                if (oldAuthor.name == author.name) {
                    alert("такой автор уже есть");
                    return;
                }
            }
            author.id = getMaxOfArray(arrayOfId()) + 1 ;
            authors.push(author);
            localStorage.setItem('authors', JSON.stringify(authors));

            return false;
        });
    })
}

function arrayOfId() {
    const authors = getAuthors();
    const array = [];
    for (const  author of authors){
        array.push(author.id);
    }
    return array;
}

function getMaxOfArray(array) {
    return Math.max.apply(null, array);
}


function init() {
    initLocalStorage('books', JSON.stringify(db.books));
    initLocalStorage('authors', JSON.stringify(db.authors));
    initLocalStorage('filters', JSON.stringify(FILTERS));
    initRangeSlider('yearsRange');
    initCountries();
    initGenre();
    initSearch('text-to-find');
    renderBooks(getFilteredBooks());
    addBook();
    addAuthor();
}

addEventListener('DOMContentLoaded', function() {
    init();
});
//data-id
