function initRangeSlider(selector) {
    const toInt = {
        to: function (number) {
            return `${parseInt(number)} год`;
        }
    };

    const range = document.getElementById(selector);

    noUiSlider.create(range, {
        start: [1900, 2000],
        connect: true,
        range: {
            'min': 1800,
            'max': 2020
        },
        step: 1,
        tooltips: [toInt, toInt],
    });

    range.noUiSlider.on('change', function (date) {
        renderByDate(date[0], date[1])
    });
}

function renderByDate(dateFrom, dateTo) {
    const books = db.books.filter(function (book) {
        return book.published >= dateFrom && book.published <= dateTo;
    });
    renderBooks(books)
}




function renderBooks(books) {
    const gallery = document.getElementById("galery");
    gallery.innerHTML = '';
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

        gallery.appendChild(article);
    }
}

function renderBooksByAuthor(authorId) {
   const books = db.books.filter(function (book) {
        return book.author === authorId;
    });
   renderBooks(books)
}

function initCountries() {
    const select = document.getElementById('countries');
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
        renderByCountry(e.target.selectedOptions[0].value)
    })
}

function initGenre() {
    const select = document.getElementById('genres');
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
        renderByGenre(e.target.selectedOptions[0].value)
    })
}

function renderByCountry(country) {
    const books = db.books.filter(function (book) {
        return db.authors[book.author].country === country;
    });
    renderBooks(books)
}

function renderByGenre(genre) {
    const books = db.books.filter(function (book) {
        return book.genre.includes(genre);
    });
    renderBooks(books)
}

function init() {
    initRangeSlider('yearsRange');
    initCountries();
    renderBooks(db.books);
    initGenre();
}
init();
