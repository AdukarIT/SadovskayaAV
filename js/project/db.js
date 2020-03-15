const db = {
    authors: [
        {
            name: 'Габриэль Гарсиа Маркес',
            birthday: '06-03-1927',
            deathdate: '17-04-2014',
            country: 'Колумбия',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Gabriel_Garcia_Marquez.jpg',

        },
        {
            name: 'Дэниел Киз',
            birthday: '09-08-1927',
            deathdate: '15-06-2014',
            country: 'США',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/c/cd/%D0%94%D1%8D%D0%BD%D0%B8%D0%B5%D0%BB_%D0%9A%D0%B8%D0%B7.jpg',

        },
        {
            name: 'Грегори Дэвид Робертс',
            birthday: '21-06-1952',
            deathdate: '',
            country: 'Австралия',
            photo: 'http://www.cablook.com/wp-content/uploads/2014/08/GregLowRes03.jpg'},
        {
            name: 'Нелл Харпер Ли ',
            birthday: '28-04-1926',
            deathdate: '19-02-2016',
            country: 'США',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Photo_portrait_of_Harper_Lee_%28To_Kill_a_Mockingbird_dust_jacket%2C_1960%29.jpg'
        },
        {
            name: 'Джордж Оруэлл ',
            birthday: '25-06-1903',
            deathdate: '21-01-1950',
            country: 'Великобритания',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/274px-George_Orwell_press_photo.jpg',
        },
        {
            name: 'Михаил Афанасьевич Булгаков',
            birthday: '03-05-1891',
            deathdate: '10-03-1940',
            country: 'СССР',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Bu%C5%82hakow.jpg/274px-Bu%C5%82hakow.jpg'
        },

    ],
    books: [
        {
            name: 'Сто лет одиночества',
            published: 1967,
            cover: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/100years.jpg',
            genre: ['роман'],
            notes: '...',
            read: 2020,
            author: 0
        },
        {
            name: 'Любовь во время чумы',
            published: 1985,
            cover: 'https://i.livelib.ru/boocover/1002072601/200/6cf4/Gabriel_Garsia_Markes__Lyubov_vo_vremya_chumy.jpg',
            genre: ['роман'],
            notes: '...',
            author: 0
        },
        {
            name: 'Полковнику никто не пишет',
            published: 1961,
            cover: 'https://i.livelib.ru/boocover/1000318322/200/41f7/Gabriel_Garsia_Markes__Polkovniku_nikto_ne_pishet.jpg',
            genre: ['повесть'],
            notes:[ 'Самое плохое в бедности — это то, что она заставляет говорить неправду.',+
                'Я не ношу шляпы, чтобы ни перед кем её не снимать. ', +
                'Мы стали слишком взрослыми, чтобы верить в приход Мессии.\n', +
                'Женщина пришла в отчаяние.\n', +
                '— А что мы будем есть все это время? — Она схватила его за ворот рубашки и с силой тряхнула. — Скажи, что мы будем есть?\n', +
                'Полковнику понадобилось прожить семьдесят пять лет — ровно семьдесят пять лет, минута в минуту, — чтобы дожить до этого мгновения. И он почувствовал себя непобедимым, когда четко и ясно ответил:\n' +
            '— Дерьмо.'],
            author: 0

        },
        {
            name: 'Невероятная и печальная история о простодушной Эрендире и ее жестокосердной бабушке',
            published: 1972,
            cover: 'https://i1.mybook.io/p/512x852/book_covers/de/0e/de0e3af8-8cfa-45f9-aa70-c2408575e4f0.jpe?v2',
            genre: ['повесть'],
            notes: [],
            author: 0
        },
        {
            name: 'Цветы для Элджернона',
            published: 1966,
            cover: 'https://i3.mybook.io/p/512x852/book_covers/56/b3/56b3dc88-2981-4ec1-9118-49d800bc0bd7.jpg?v2',
            genre: ['роман'],
            notes:[ 'открыл, как человек может начать презирать самого себя. Это происходит, когда он сознает, что поступает неправильно, но не может остановиться.\n', +
                'Удивительно, как люди высоких моральных принципов и столь же высокой чувствительности, никогда не позволяющие себе воспользоваться преимуществом над.', +
                'человеком, рожденным без рук, ног или глаз, как они легко и бездумно потешаются над человеком, рожденным без разума.\n', +
                'Нельзя построить новый дом на месте старого, не разрушив его'],
            author: 1,

        },
        {
            name: 'Шантарам',
            published: 2003,
            cover: 'https://cv1.litres.ru/pub/c/elektronnaya-kniga/cover/5815016-gregori-devid-roberts-shantaram.jpg',
            genre: ['роман'],
            author: 2,
        },
        {
            name: 'Тень горы',
            published: 2016,
            cover: 'https://cv5.litres.ru/pub/c/elektronnaya-kniga/cover_330/17042658-gregori-devid-roberts-ten-gory.jpg',
            genre: ['роман'],
            author: 2,
        },
        {
            name: 'Убить пересмешника',
            published: 1960,
            cover: 'https://cv7.litres.ru/pub/c/elektronnaya-kniga/cover_415/129770-harper-li-ubit-peresmeshnika.jpg',
            genre: ['роман'],
            notes: ['Мужество – это когда заранее знаешь, что ты проиграл, и все-таки берешься за дело и наперекор всему на свете идешь до конца. Побеждаешь очень редко, но иногда все-таки побеждаешь.',
                'Но чтобы я мог жить в мире с людьми, я прежде всего должен жить в мире с самим собой. Есть у человека нечто такое, что не подчиняется большинству, – это его совесть.',
                'ничего не надо страшиться, кроме страха.', 'Просто есть такие люди, они… они чересчур много думают о том свете и потому никак не научатся жить на этом'],
            author: 3,
        },
        {
            name: '1984',
            published: 1949,
            cover: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/1984-Big-Brother.jpg',
            genre: ['роман'],
            notes: ['Сущность войны — уничтожение не только человеческих жизней, но и плодов человеческого труда. Война — это способ разбивать вдребезги, распылять в стратосфере, топить в морской пучине материалы, которые могли бы улучшить народу жизнь и тем самым в конечном счёте сделать его разумнее. Даже когда оружие не уничтожается на поле боя, производство его — удобный способ истратить человеческий труд и не произвести ничего для потребления.',
                'Если ты в меньшинстве – и даже в единственном числе, – это не значит, что ты безумен. Есть правда и есть неправда, и, если ты держишься правды, пусть наперекор всему свету, ты не безумен.',
                'Привычка не показывать своих чувств въелась настолько, что стала инстинктом.',
                'Умный тот, кто нарушает правила и всё-таки остаётся жив.'],
            author: 4,
        },
        {
            name: 'Скотный двор',
            published: 1945,
            cover: 'https://all-the-books.ru/upload/resize_cache/iblock/d81/194_310_10b176f381c3f30412ac3fd7bace6d9c0/skotnyy_dvor.jpg',
            genre: ['притча','сатира'],
            notes: ['Все животные равны. Но некоторые животные более равны, чем другие.','Только старенький Вениамин настаивал, что помнит всю свою долгую жизнь до мельчайших деталей и знает: им никогда не жилось ни лучше, ни хуже – голод, непосильный труд и обманутые ожидания, таков, говорил он, нерушимый закон жизни.',
                'И днем и ночью мы работаем на ваше благо. И молоко пьем, и яблоки мы едим тоже ради вас же самих.'],
            author: 4,
        },
        {
            "name": 'Мастер и Маргарита',
            "published": 1967,
            "cover": 'https://lh3.googleusercontent.com/proxy/NeQk1IOayucWw3pWKwK-vckay-JTQ7mvUd5_z3HCPfiQSKWngkf0h1V03zcilNA-p6pNsKUEvQt7BTcKiQ',
            "genre": ['роман'],
            author: 5,
        },
    ]
};
