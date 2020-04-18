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
    if (country) {
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
    for (let filter in filters) {
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
    for (const book of books) {
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
            img.setAttribute('book_id', book.id);
            div.appendChild(img);
            img.addEventListener('click', function (e) {
                renderBook(parseInt(e.target.getAttribute('book_id')));
            })
        });
        article.appendChild(div);

        const name = document.createElement('p');
        if (!authors[book.author]) {
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
    for (const author of getAuthors()) {
        const option = document.createElement('option');
        if (!uniq.includes(author.country)) {
            option.textContent = author.country;
            uniq.push(author.country);
            select.appendChild(option);
            option.value = author.country;
            if (getFilters().country == author.country) {
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
    const genres = getGenres();
    select.appendChild(empty);
    for (const genre of genres) {
        const option = document.createElement('option');
        option.value = genre.id;
        option.textContent = genre.name;

        if (getFilters().genre === genre.id){
            option.selected = true;
        }

        select.appendChild(option);
    }
    select.addEventListener('change', function (e) {
        setFilter('genre',parseInt(e.target.selectedOptions[0].value));
        renderBooks(getFilteredBooks());
    })
}

function getGenreById(id) {
    const genres = getGenres();
    for (const g of genres) {
        if (g.id === id) return g.name;
    }
}


function renderBook(id) {
    clearGallery();
    console.log(id);
    const book = getBook(id);
    const article = document.createElement("article");
    article.classList.add("article");

    const div = document.createElement("div");
    div.classList.add('about_book');
    article.appendChild(div);

    console.log(book);
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
    published.textContent = 'Год публикации: ' + book.published;
    info.appendChild(published);


    const genre = document.createElement('p');
    let genreNames = [];
    book.genre.forEach(function (id) {
        genreNames.push(getGenreById(id));
    });
    genre.textContent = 'Жанр : ' + genreNames.join(', ');
    info.appendChild(genre);


    const quote = document.createElement('p');
    if (book.notes) {
        quote.textContent = "Цитаты из книги: " + book.notes;
        info.appendChild(quote);
    }

    const btn = document.createElement('button');
    btn.textContent = "редактировать";
    btn.classList.add('button', 'button_edit');
    btn.addEventListener('click', function (e) {
        renderBookForm(book);
    });
    info.appendChild(btn);


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
    country.textContent = 'Страна: ' + author.country;
    info.appendChild(country);

    const birth = document.createElement('p');
    author.birthday = author.birthday.replace(/-/g, '.');
    birth.textContent = 'Дата рождения: ' + author.birthday;
    info.appendChild(birth);

    let death = document.createElement('p');
    if (author.deathdate) {
        author.deathdate = author.deathdate.replace(/-/g, '.');
        death.textContent = 'Дата смерти: ' + author.deathdate;
    }
    info.appendChild(death);

    const btn = document.createElement('button');
    btn.textContent = "редактировать";
    btn.classList.add('button', 'button_edit');
    btn.addEventListener('click', function (e) {
        renderAuthorForm(author);
    });
    info.appendChild(btn);

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
    if (!localStorage.getItem(key)) {
        localStorage.setItem(key, value);
        return;
    }
    console.log(`${key} already in local storage.`);
}

function getBook(id) {
    const books = getBooks();
    for (const book of books) {
        if (book.id === id) {
            return book;
        }
    }
    alert('Book not found!');
}

function getBooks() {
    return JSON.parse(localStorage.getItem('books'));
}

function getAuthors() {
    return JSON.parse(localStorage.getItem('authors'));
}

function getGenres(){
    return JSON.parse(localStorage.getItem('genres'))
}

function getFilters() {
    return JSON.parse(localStorage.getItem('filters'));
}

function setFilter(key, value) {
    const filters = getFilters();
    filters[key] = value;
    localStorage.setItem('filters', JSON.stringify(filters));
}

function createEmptyBook() {
    return  {
        name: '',
        published: '',
        cover: '',
        genre: [],
        notes: [],
        author: ''
    }
}


function createBookFormButton() {
    const button = document.getElementById('addBook');
    button.addEventListener('click', function (e) {
        renderBookForm()
    })
}

function renderBookForm(book) {
    clearGallery();

    let isCreate = false;

    if(!book){
        isCreate = true;
        book = createEmptyBook();
    }
    console.dir(book);
    gallery.innerHTML = `
              <div id="formContainer2" class="formContainer">
                   <form name="addNewBook" action="/save-book">
                       <input name="name" value="${book.name}" required size="100%" type="text"  placeholder="название книги" >
                       <input name="published" value="${book.published}" required size="100%" type="number" placeholder="год публикации">
                       <input name="cover" value="${book.cover}" required size="100%" type="text" placeholder="ссылка на изображение обложки">
                       <select id="choose_genre" name="genre"></select>
                       <textarea name="notes" size="100%" placeholder="цитаты из книги">${book.notes}</textarea>
                       <select id="choose_author" name="author">
                       </select>
                       <div class="button_container">
                            <button id="submit_button" class=" button button_create" type="submit">добавить книгу</button>
                            <button class="button button_reset-form" type="reset">очистить</button>
                       </div>
                  </form>
              </div>`;

    const formElement = document.forms.addNewBook;
    const select = document.getElementById('choose_author');
    const selectGenre = document.getElementById('choose_genre');
    if(!isCreate){
        const btn = document.getElementById('submit_button');
        btn.textContent = 'изменить';

        const chooseGenreButton = document.getElementById('choose_genre');
        formElement.removeChild(chooseGenreButton);
        formElement.removeChild(select);
    }

    for (const genre of getGenres()){
        const optionGenre = document.createElement('option');
        optionGenre.value = genre.id;
        optionGenre.textContent = genre.name;
        selectGenre.appendChild(optionGenre);

    }
    $(selectGenre).val(null).select2({
        multiple: true,
        placeholder: "Select a genre",
        tags: true,
    });


    for (const author of getAuthors()) {
        const option = document.createElement('option');
        option.value = author.id;
        option.textContent = author.name;
        select.appendChild(option);
    }

    formElement.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log(e);
        for (const field of e.target.elements) {
            if (!field.name || !field.value) {
                continue;
            }

            switch (field.name) {
                case 'notes':
                    let notes = [];
                    notes.push(field.value);

                    book[field.name] = notes;
                    break;
                case 'genre':
                    book.genre = [];
                    for(const option of field.selectedOptions) {
                        book.genre.push(parseInt(option.value));
                    }
                    break;
                default:
                    book[field.name] = field.value;
            }
        }

        const books = getBooks();
        if (isCreate) {
            for (const oldBook of books) {
                if (oldBook.name == book.name) {
                    alert("такая книга уже есть");
                    return;
                }
            }

            book.id = getMaxOfArray(arrayOfBookId()) + 1;

            books.push(book);
        }
        else {
            books[book.id - 1] = book;
        }

        console.log(book);
        localStorage.setItem('books', JSON.stringify(books));

        alert('Done!');
        renderBooks(getFilteredBooks());

        return false;
    });
}


function createAuthorFormButton() {
    const button = document.getElementById('addAuthor');
    button.addEventListener('click', function (e) {
        renderAuthorForm()
    })
}

function createEmptyAuthor() {
    return {
        name: '',
        birthday: '',
        deathdate: '',
        country: '',
        photo: ''
    };
}

function renderAuthorForm(author) {
    clearGallery();

    let isCreate = false;
    if(!author){
        isCreate = true;
        author = createEmptyAuthor();
    }

    gallery.innerHTML = `
        <div id="formContainer" class="formContainer">
            <form method="post" name="addNewAuthor">
                <input name="name" value="${author.name}" required size="100%" type="text"  placeholder="Имя и фамилия автора" >
                <input name="birthday" value="${author.birthday}" required size="100%" type="datetime" placeholder="дата рождения в формате ДД-ММ-ГГ">
                <input name="deathdate" value="${author.deathdate}"  size="100%" type="datetime" placeholder="дата смерти в формате ДД-ММ-ГГ"">
                <input name="country" value="${author.country}" required size="100%" type="text" placeholder="страна (гражданство)">
                <input name="photo" value="${author.photo}" required size="100%" type="text" placeholder="ссылка на фотографию">
                <div class="button_container">
                    <button id="submit_button" class=" button button_create" type="submit">добавить автора</button>
                    <button class="button button_reset-form" type="reset">очистить</button>
                </div>
            </form>
        </div>`;

    if(!isCreate){
        const btn = document.getElementById('submit_button');
        btn.textContent = 'изменить'
    }
    const formElement = document.forms.addNewAuthor;

    formElement.addEventListener('submit', function (e) {
        e.preventDefault();

        for (const field of e.target.elements) {
            if (field.name && field.value) {
                author[field.name] = field.value;
            }
        }
        const authors = getAuthors();

        if (isCreate) {

            for (const oldAuthor of authors) {
                if (oldAuthor.name == author.name) {
                    alert("такой автор уже есть");
                    return;
                }
            }
            author.id = getMaxOfArray(arrayOfId()) + 1;
            authors.push(author);
        } else {
            authors[author.id] = author;
        }

        localStorage.setItem('authors', JSON.stringify(authors));
        alert('Done!');
        renderBooks(getFilteredBooks());

        return false;
    });
}

function arrayOfId() {
    const authors = getAuthors();
    const array = [];
    for (const author of authors) {
        array.push(author.id);
    }
    return array;
}

function arrayOfBookId() {
    const books = getBooks();
    const booksIdArray = [];
    for (const book of books) {
        booksIdArray.push(book.id);
    }

    return booksIdArray;

}

function getMaxOfArray(array) {
    return Math.max.apply(null, array);
}



function init() {
    initLocalStorage('books', JSON.stringify(db.books));
    initLocalStorage('authors', JSON.stringify(db.authors));
    initLocalStorage('filters', JSON.stringify(FILTERS));
    initLocalStorage('genres', JSON.stringify(db.genres));
    initRangeSlider('yearsRange');
    initCountries();
    initGenre();
    initSearch('text-to-find');
    renderBooks(getFilteredBooks());
    createBookFormButton();
    createAuthorFormButton();
}

addEventListener('DOMContentLoaded', function () {
    init();
});
